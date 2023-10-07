import { useEffect, useState } from "react";
import * as actionCart from "../redux/actions/actionCart";
import { useDispatch } from "react-redux";
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
  const [activeFilter, setActiveFilter] = useState("EARRINGS");
  const [loading, setLoading] = useState(false);
  const [productList] = useCollection(
    db.collection("products").orderBy("timestamp", "desc")
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [activeFilter]);

  const getStatusColor = (status) => {
    if (status === "sale") {
      return null;
    } else if (status === "sold") {
      return "bg-danger";
    } else if (status === "reserved") {
      return "bg-secondary";
    }
  };

  const addProductToCart = (product) => {
    addToCart(product);

    toast.success(` ${product.productName} has been added to your cart! ⭐`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const renderCollectionList = () => {
    return productList?.docs
      // .filter((product) => product.data().type === "REGULAR")
      // .filter((product) => product.data().filter === activeFilter)
      .map((item) => (
        <div className="col-md-6 col-lg-4 p-2" key={item.id}>
          <div className="collection-img position-relative d-flex justify-content-center align-items-center">
            <Link href={`/product/${item.id}`}>
              {item.data().postImage ? (
                <Image
                  src={item.data().postImage}
                  alt={item.data().productName}
                  width="320"
                  height="400"
                />
              ) : (
                renderLoading()
              )}
            </Link>

            <span
              className={`${getStatusColor(
                item.data().status
              )} position-absolute d-flex align-items-center justify-content-center text-white`}
            >
              {item.data().status.toUpperCase()}
            </span>
          </div>
          <div className="text-start mt-3">
            <span className="fw-bold lead fs-4">
              ₱ {parseInt(item.data().price).toLocaleString()}
            </span>
            <p className="text-capitalize my-1">{item.data().productName}</p>

            <br />
          </div>
          <div className="text-center mt-3">
            <button
              onClick={() => addProductToCart(item.data())}
              className="btn btn-primary mt-3 w-50"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ));
  };

  return (
    <section id="collection" className="py-lg-4 pt-md-5">
      <ToastContainer />
      <div className="container" >
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
                activeFilter === "EARRINGS" && "active-tab"
              }`}
              onClick={() => setActiveFilter("EARRINGS")}
            >
              ATL
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "RINGS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("RINGS")}
            >
              BKN
            </button>
            <button
              className={`btn m-2 fw-bold ${
                activeFilter === "RINGS" && "active-tab"
              }`}
              onClick={() => setActiveFilter("RINGS")}
            >
              BOS
            </button>
            <button
              className={`btn m-2 fw-bold ${
                activeFilter === "EARRINGS" && "active-tab"
              }`}
              onClick={() => setActiveFilter("EARRINGS")}
            >
              CHA
            </button>
            <button
              className={`btn m-2 fw-bold ${
                activeFilter === "BRACELETS" && "active-tab"
              }`}
              onClick={() => setActiveFilter("BRACELETS")}
            >
              CHI
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              CLE
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              DAL
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              DEN
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              DET
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              GSW
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              HOU
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              IND
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              LAC
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              LAL
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              MEM
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              MIA
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              MIL
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              MIN
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              NOP
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              NYK
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              OKC
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              ORL
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              PHI
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              PHO
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              POR
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              SAC
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              SAS
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              TOR
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
            >
              UTA
            </button>
            <button
                className={`btn m-2 fw-bold ${
                    activeFilter === "BRACELETS" && "active-tab"
                }`}
                onClick={() => setActiveFilter("BRACELETS")}
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
              <li className="list-group-item">Atlanta Hawks</li>
              <li className="list-group-item">Boston Celtics</li>
              <li className="list-group-item">Brooklyn Nets</li>
              <li className="list-group-item">Chicago Bulls</li>
              <li className="list-group-item">Cleveland Cavaliers</li>
              <li className="list-group-item">Dallas Mavericks</li>
              <li className="list-group-item">Denver Nuggets</li>
              <li className="list-group-item">Detroit Pistons</li>
              <li className="list-group-item">Golden State Warriors</li>
              <li className="list-group-item">Houston Rockets</li>
              <li className="list-group-item">Indiana Pacers</li>
              <li className="list-group-item">Los Angeles Clippers</li>
              <li className="list-group-item">Los Angeles Lakers</li>
              <li className="list-group-item">Memphis Grizzlies</li>
              <li className="list-group-item">Miami Heat</li>
              <li className="list-group-item">Milwaukee Bucks</li>
              <li className="list-group-item">Minnesota Timberwolves</li>
              <li className="list-group-item">New Orleans Pelicans</li>
              <li className="list-group-item">New York Knicks</li>
              <li className="list-group-item">Oklahoma City Thunder</li>
              <li className="list-group-item">Orlando Magic</li>
              <li className="list-group-item">Philadelphia 76ers</li>
              <li className="list-group-item">Phoenix Suns</li>
              <li className="list-group-item">Portland Trail Blazers</li>
              <li className="list-group-item">Sacramento Kings</li>
              <li className="list-group-item">San Antonio Spurs</li>
              <li className="list-group-item">Toronto Raptors</li>
              <li className="list-group-item">Utah Jazz</li>
              <li className="list-group-item">Washington Wizards</li>

              {/* Add more categories as needed */}
            </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="collection-list row mt-4 gx-0 gy-3">
              {loading ? renderLoading() : renderCollectionList()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
