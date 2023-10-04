import React, { useEffect, useState, Component } from "react";
import Head from "next/head";
import NavigationBar from "../../components/NavigationBar";
import firebase from "firebase/compat/app";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Modal,
  Button,
} from "react-bootstrap";
import { bindActionCreators } from "@reduxjs/toolkit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase";
import * as actionCart from "../../redux/actions/actionCart";
import Image from "next/image";
import axios from 'axios';

export default function Cart() {
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [facebook, setFacebook] = useState("");
  const [invalidFacebook, setinvalidFacebook] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null); // New state for the selected file
  const validFacebookLink = new RegExp(
    "(?:(?:http|https)://)?(?:www.)?facebook.com/(?:(?:w)*#!/)?(?:pages/)?(?:[?w-]*/)?(?:profile.php?id=(?=d.*))?([w-]*)?"
  );
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: any) => state.cartProducts);
  const { deleteProductCart } = bindActionCreators(actionCart, dispatch);

  // New function to handle file selection
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    let value = 0;
    cartProducts?.forEach((product) => {
      const productValue =
        product.price * (product.quantity ? product.quantity : 1);
      value = value + productValue;
    });
    setTotal(value);
  }, [cartProducts]);

  const cartCheckOut = (e) => {
    e.preventDefault();
    if (!facebook) {
      setinvalidFacebook(true);
    } else {
      setShowModal(true);
      setinvalidFacebook(false);

      const formData = new FormData();
      formData.append("myFile", selectedFile, selectedFile.name);
      formData.append("user", facebook);

      // Now, you can send formData to your backend for processing.
      axios.post("api/uploadfile", formData).then((response) => {
        // Handle the response from the server as needed
        console.log(response.data);
      });

      db.collection("orders").add({
        user: facebook,
        order: cartProducts,
        status: "prepare",
        totalPrice: total,
        partialPayment: 0,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div>
      <Head>
        <title>Philippine Card Marketplace</title>
        <link rel="icon" href="/logo1.png" />
      </Head>

      <NavigationBar />
      <Container fluid style={{ marginTop: "140px" }}>
        <Row style={{ marginTop: "30px" }}>
          <Col xs={12} md={6}>
            <ListGroup>
              {cartProducts?.map((product, index) => (
                <ListGroup.Item key={index}>
                  <div className="cartContainer">
                    <div className="cartImage">
                      <Image
                        src={product.postImage}
                        alt={product.productName}
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="cartProdName">
                      <h4 className="prodName">{product.productName}</h4>
                      <p className="prodPrice">Price: ₱{product.price}</p>
                      <p className="prodDelivery">{product.description}</p>
                    </div>
                    <div
                      className="px-2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p className="fw-bold">QTY: {product.quantity}pcs</p>
                      <FontAwesomeIcon
                        className="ps-3"
                        icon={faTrash}
                        height={20}
                        role="button"
                        color="red"
                        onClick={() => deleteProductCart(product.productName)}
                      />
                    </div>
                    <div className="RemoveCartItem"></div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col xs={12} md={6} style={{ margin: "0px" }}>
            <div className="Cart-total">
              <h4 className="Cart-total-heading">
                Subtotal ({cartProducts ? cartProducts?.length : 0})
              </h4>
              <hr />
              <div>
                {cartProducts?.map((product, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>
                      {product.productName} (
                      {product.quantity ? product.quantity : 1})
                    </p>
                    <p>
                      ₱{" "}
                      {product.price *
                        (product.quantity ? product.quantity : 1)}
                    </p>
                  </div>
                ))}
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontWeight: "bold" }}>Order Total:</p>
                <p className="fs-2 fw-bold lead">
                  ₱ {Math.ceil(total).toLocaleString()}
                </p>
              </div>
              <div className="text-warning mb-5">
                <p>Shipping fee will be added upon delivery by the courier.</p>
                <p>We also have free delivery (Saturday around Angeles, Pampanga).</p>
              </div>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>
                  Please enter your Name or Facebook Link or Phone Number where we could
                  contact you.
                </Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Enter Your Name or Facebook Link or Phone Number"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  autoComplete="username"
                  isInvalid={invalidFacebook}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please enter a valid Facebook link or Phone Number
                </Form.Control.Feedback>
              </Form.Group>

              {/*file upload function*/}
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Upload the screenshot of your payment</Form.Label>
                <Form.Control
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf" // Add the accepted file types you want
                    onChange={onFileChange}
                />
              </Form.Group>

              <button
                className="btn btn-primary mt-5"
                disabled={cartProducts.length < 1}
                onClick={cartCheckOut}
              >
                CHECKOUT
              </button>
              <Modal show={showModal}>
                <Modal.Header>
                  <Modal.Title className="text-dark">
                    Congratulation!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-dark">
                  Successful Checkout! Please wait for our message, thank you.
                  <br />
                  <br />
                  For faster transaction please message us here:
                  <br />
                  <a target= "_blank" href="https://www.facebook.com/phcardsmp">Philippine Card Marketplace</a>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={closeModal}>Close</Button>
                </Modal.Footer>
              </Modal>
              <div className="text-light mb-5">
                <p>BPI Account: Jowel Castaneda | 000000000</p>
                <p>GCash Account: Jowel Castaneda | 000000000</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
