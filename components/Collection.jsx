import { useEffect, useState } from "react";
import * as actionCart from "../redux/actions/actionCart";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { renderLoading, renderLoadingImage } from "../utilities/loader";
import Image from "next/image";
import Link from "next/link";

export default function Collection() {
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCart, dispatch);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeCard, setActiveCard] = useState("");
  const [cardAdded, setCardAdded] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activePlayerSearch, setActivePlayerSearch] = useState(null);
  const cartProducts = useSelector((state) => state.cartProducts);
  const searchPlayer = useSelector((state) => state.searchPlayer);
  const [productList] = useCollection(
    db.collection("products").orderBy("timestamp", "desc")
  );

  useEffect(() => {
    if (searchPlayer == "") {
      setActivePlayerSearch(null);
    } else {
      setActivePlayerSearch(searchPlayer);
    }
  }, [searchPlayer]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [activeFilter]);

  useEffect(() => {
    let updatedTotalQuantity = 0;
    cartProducts?.forEach((product) => {
      updatedTotalQuantity =
        updatedTotalQuantity + parseInt(product.quantitySelected);
    });

    if (cardAdded) {
      if (updatedTotalQuantity > totalQuantity) {
        toast.success(` ${activeCard} has been added to your cart! ⭐`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      } else {
        toast.error(
          ` 😔 you exceeds the maximum quantity allowed for ${activeCard}`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          }
        );
      }

      setCardAdded(false);
    }

    setTotalQuantity(updatedTotalQuantity);
  }, [cartProducts]);

  const addProductToCart = (product, id) => {
    addToCart({ ...product, id });
    setActiveCard(product.productName);
    setCardAdded(true);
  };

  const getCardName = (name) => {
    const maxLength = 30;

    if (name.length <= maxLength) {
      return <span className="fw-bold">{name}</span>;
    } else {
      return <span className="fw-bold">{`${name.slice(0, maxLength)}...`}</span>;
    }
  };

  const getDescription = (text) => {
    const maxLength = 80;

    if (text.length <= maxLength) {
      return <p className="text-capitalize my-1">{text}</p>;
    } else {
      return <p className="text-capitalize my-1">{`${text.slice(0, maxLength)}...`}</p>;
    }
  };

  const renderCards = (item) => {
    return (
      <div className="col-md-6 col-lg-4 p-2" key={item.id}>
        <div className="collection-img position-relative d-flex justify-content-center align-items-center">
          <Link href={`/product/${item.id}`}>
            {item.data().postImage ? (
              <Image
                src={item.data().postImage}
                alt={item.data().productName}
                width="280"
                height="360"
              />
            ) : (
              renderLoading()
            )}
          </Link>
        </div>
        <div className="text-start mt-3">
          {getCardName(item.data().productName)}
          <br />
          <div>
          <span className="fw-bold lead fs-5">
            ₱{parseInt(item.data().price).toLocaleString()}
          </span>
          <span>{' | '}{parseInt(item.data().quantity).toLocaleString()} available</span>
          </div>
          <p className="text-capitalize my-1">
            {getDescription(item.data().description)}
          </p>
        </div>
        <div className="text-center mt-1 pb-lg-0 pb-4">
          <button
            onClick={() => addProductToCart(item.data(), item.id)}
            className="btn btn-primary mt-1 w-50"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  const renderCollectionList = () => {
    let filteredProducts = productList?.docs;

    if (activeFilter && activeFilter !== "ALL") {
      filteredProducts = filteredProducts.filter(
        (product) => product.data().filter === activeFilter
      );
    }

    if (activePlayerSearch) {
      filteredProducts = filteredProducts.filter((product) => {
        const { firstName, lastName } = product.data();
        const filterText = activePlayerSearch.toLowerCase(); // Convert the filter text to lowercase

        return (
          firstName.toLowerCase().startsWith(filterText) ||
          lastName.toLowerCase().startsWith(filterText)
        );
      });
    }

    if (!filteredProducts || filteredProducts.length === 0) {
      return (
        <div className="position-relative d-flex justify-content-center align-items-center fw-bold mt-5">
          <p>No results found</p>
        </div>
      );
    }

    return filteredProducts.map((item) => renderCards(item));
  };

  return (
    <section id="collection" className="py-lg-4 pt-md-5">
      <ToastContainer />
      <div className="container">
        <div className="row g-0 mt-0 ">
          <div className="d-flex flex-wrap mt-lg-2 m-md-5 justify-content-center">
            <div className="button-container d-lg-none pt-md-5 pt-sm-5 ">
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "ALL" && "active-tab"
                }`}
                onClick={() => setActiveFilter("ALL")}
              >
                ALL
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "ATL" && "active-tab"
                }`}
                onClick={() => setActiveFilter("ATL")}
              >
                ATL
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "BKN" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BKN")}
              >
                BKN
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "BOS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BOS")}
              >
                BOS
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "CHA" && "active-tab"
                }`}
                onClick={() => setActiveFilter("CHA")}
              >
                CHA
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "CHI" && "active-tab"
                }`}
                onClick={() => setActiveFilter("CHI")}
              >
                CHI
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "CLE" && "active-tab"
                }`}
                onClick={() => setActiveFilter("CLE")}
              >
                CLE
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "DAL" && "active-tab"
                }`}
                onClick={() => setActiveFilter("DAL")}
              >
                DAL
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "DEN" && "active-tab"
                }`}
                onClick={() => setActiveFilter("DEN")}
              >
                DEN
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "DET" && "active-tab"
                }`}
                onClick={() => setActiveFilter("DET")}
              >
                DET
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "GSW" && "active-tab"
                }`}
                onClick={() => setActiveFilter("GSW")}
              >
                GSW
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "HOU" && "active-tab"
                }`}
                onClick={() => setActiveFilter("HOU")}
              >
                HOU
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "IND" && "active-tab"
                }`}
                onClick={() => setActiveFilter("IND")}
              >
                IND
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "LAC" && "active-tab"
                }`}
                onClick={() => setActiveFilter("LAC")}
              >
                LAC
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "LAL" && "active-tab"
                }`}
                onClick={() => setActiveFilter("LAL")}
              >
                LAL
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "MEM" && "active-tab"
                }`}
                onClick={() => setActiveFilter("MEM")}
              >
                MEM
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "MIA" && "active-tab"
                }`}
                onClick={() => setActiveFilter("MIA")}
              >
                MIA
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "MIL" && "active-tab"
                }`}
                onClick={() => setActiveFilter("MIL")}
              >
                MIL
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "MIN" && "active-tab"
                }`}
                onClick={() => setActiveFilter("MIN")}
              >
                MIN
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "NOP" && "active-tab"
                }`}
                onClick={() => setActiveFilter("NOP")}
              >
                NOP
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "NYK" && "active-tab"
                }`}
                onClick={() => setActiveFilter("NYK")}
              >
                NYK
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "OKC" && "active-tab"
                }`}
                onClick={() => setActiveFilter("OKC")}
              >
                OKC
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "ORL" && "active-tab"
                }`}
                onClick={() => setActiveFilter("ORL")}
              >
                ORL
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "PHI" && "active-tab"
                }`}
                onClick={() => setActiveFilter("PHI")}
              >
                PHI
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "PHO" && "active-tab"
                }`}
                onClick={() => setActiveFilter("PHO")}
              >
                PHO
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "POR" && "active-tab"
                }`}
                onClick={() => setActiveFilter("POR")}
              >
                POR
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "SAC" && "active-tab"
                }`}
                onClick={() => setActiveFilter("SAC")}
              >
                SAC
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "SAS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("SAS")}
              >
                SAS
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "TOR" && "active-tab"
                }`}
                onClick={() => setActiveFilter("TOR")}
              >
                TOR
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "UTA" && "active-tab"
                }`}
                onClick={() => setActiveFilter("UTA")}
              >
                UTA
              </button>
              <button
                className={`btn m-2 fw-bold ${
                  activeFilter === "WAS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("WAS")}
              >
                WAS
              </button>
            </div>
          </div>
          <hr />
          <div className="col-lg-3 d-lg-block d-none pe-5 py-4">
            <div className="category-list">
              {/* Category list sidebar */}
              <ul className="list-group">
                <h4>NBA Teams</h4>
                <button
                  className={`list-group-item ${
                    activeFilter === "ALL" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("ALL")}
                >
                  All Teams
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "ATL" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("ATL")}
                >
                  Atlanta Hawks
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "BOS" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("BOS")}
                >
                  Boston Celtics
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "BKN" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("BKN")}
                >
                  Brooklyn Nets
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "CHA" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("CHA")}
                >
                  Charlotte Hornets
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "CHI" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("CHI")}
                >
                  Chicago Bulls
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "CLE" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("CLE")}
                >
                  Cleveland Cavaliers
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "DAL" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("DAL")}
                >
                  Dallas Mavericks
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "DEN" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("DEN")}
                >
                  Denver Nuggets
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "DET" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("DET")}
                >
                  Detroit Pistons
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "GSW" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("GSW")}
                >
                  Golden State Warriors
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "HOU" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("HOU")}
                >
                  Houston Rockets
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "IND" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("IND")}
                >
                  Indiana Pacers
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "LAC" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("LAC")}
                >
                  Los Angeles Clippers
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "LAL" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("LAL")}
                >
                  Los Angeles Lakers
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "MEM" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("MEM")}
                >
                  Memphis Grizzlies
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "MIA" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("MIA")}
                >
                  Miami Heat
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "MIL" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("MIL")}
                >
                  Milwaukee Bucks
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "MIN" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("MIN")}
                >
                  Minnesota Timberwolves
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "NOP" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("NOP")}
                >
                  New Orleans Pelicans
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "NYK" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("NYK")}
                >
                  New York Knicks
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "OKC" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("OKC")}
                >
                  Oklahoma City Thunder
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "ORL" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("ORL")}
                >
                  Orlando Magic
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "PHI" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("PHI")}
                >
                  Philadelphia 76ers
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "PHO" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("PHO")}
                >
                  Phoenix Suns
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "POR" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("POR")}
                >
                  Portland Trail Blazers
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "SAC" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("SAC")}
                >
                  Sacramento Kings
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "SAS" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("SAS")}
                >
                  San Antonio Spurs
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "TOR" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("TOR")}
                >
                  Toronto Raptors
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "UTA" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("UTA")}
                >
                  Utah Jazz
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "WAS" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("WAS")}
                >
                  Washington Wizards
                </button>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className={`collection-list row m-4 gx-0 gy-3 }`}>
              {loading ? renderLoading() : renderCollectionList()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
