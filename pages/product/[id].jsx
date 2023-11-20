import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import * as actionCart from "../../redux/actions/actionCart";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Modal, Button } from "react-bootstrap";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState("/title.png");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const { addToCart } = bindActionCreators(actionCart, dispatch);

  const [productList] = useCollection(
    db.collection("products").orderBy("timestamp", "desc")
  );

  const clickImage = (imageSrc) => {
    if (!isFullscreen) {
      setActiveImage(imageSrc);
      setShowImageModal(true);
      setIsFullscreen(true);
    } else {
      setActiveImage(imageSrc);
      setShowImageModal(false);
      setIsFullscreen(false);
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setIsFullscreen(false);
  };

  const addProductToCart = (id, product) => {
    addToCart({ ...product, id });
    setShowModal(true);
  };

  const renderName = (item) => {
    return (
      <Form.Group controlId="formType" className="w-100 py-3">
        <Form.Select
          aria-label="Default select example"
          className="fs-3 fw-bold lead border-none"
          onChange={(e) => router.push(`/product/${e.target.value}`)}
        >
          {productList?.docs.map((product) => (
            <option
              key={product.id}
              value={product.id}
              selected={product.data().productName === item.productName}
            >
              {product.data().productName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    );
  };

  const renderProduct = () => {
    return productList?.docs
      .filter((product) => product.id === id)
      .map((item) => (
        <>
          <div className="col-md-6 d-flex justify-content-center align-items-center overflow-hidden">
            <Image
              src={item.data().postImage}
              alt={item.data().productName}
              height="600"
              width="500"
              style={{ cursor: "pointer" }}
              onClick={() => clickImage(item.data().postImage)}
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{item.data().team}</h4>
            {renderName(item.data())}
            <p className="fs-4 fw-bold">
              ₱{parseInt(item.data().price).toLocaleString()}
            </p>
            <p className="lead">{item.data().description}</p>
            <p className="fs-4">{item.data().quantity} available</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProductToCart(item.id, item.data())}
            >
              Add to Cart
            </button>
            <Link href="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </Link>
          </div>
        </>
      ));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Double Dribble</title>
        <link rel="icon" href="/ddicon.jpeg" />
      </Head>

      <main className="pt-lg-5 pt-md-5 mt-lg-4 mt-md-5">
        <div id="product py-5">
          <NavigationBar />
          <div className="container py-lg-5 mt-lg-0 mt-md-5">
            <div className="row py-4">{renderProduct()}</div>
          </div>
        </div>
        <br />
        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title className="text-dark">Order Placed!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            ⭐ Your card has been added to your cart!
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showImageModal}
          onHide={closeImageModal}
          size="xl" // Set the modal size to extra large (xl)
        >
          <Modal.Header closeButton>
            <Modal.Title>Image Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src={activeImage}
                alt={activeImage}
                className="img-fluid" // Next.js Image component doesn't accept external classes directly
                layout="responsive" // Use layout="responsive" for responsiveness
                width={800} // Set a default width
                height={600} // Set a default height
                objectFit="contain" // Maintain aspect ratio and fit within the specified dimensions
                style={{
                  cursor: "pointer",
                  maxHeight: "80vh",
                  maxWidth: "30vw",
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeImageModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Footer />
      </main>
    </div>
  );
};

export default Product;
