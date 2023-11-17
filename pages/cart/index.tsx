import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavigationBar from "../../components/NavigationBar";
import firebase from "firebase/compat/app";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
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
import Link from "next/link";

export default function Cart() {
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState(null);
  const [invalidAddress, setinvalidAddress] = useState(false);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: any) => state.cartProducts);
  const { updateCart, deleteProductCart, clearCart } = bindActionCreators(
    actionCart,
    dispatch
  );
  const [loginEmail, setLoginEmail] = useState(null);


  useEffect(() => {
    setLoginEmail(localStorage.getItem("email"));
  }, []);

  useEffect(() => {
    let value = 0;
    let totalQuantity = 0;
    cartProducts?.forEach((product) => {
      const productValue =
        product.price *
        (product.quantitySelected);
      value = value + productValue;
      totalQuantity = totalQuantity + parseInt(product.quantitySelected)
    });
    setTotal(value);
    setTotalQuantity(totalQuantity)
  }, [cartProducts]);

  const cartCheckOut = (e) => {
    e.preventDefault();
    if (!address) {
      setinvalidAddress(true);
    } else {
      setShowModal(true);
      setinvalidAddress(false);

      db.collection("orders").add({
        email: loginEmail,
        order: cartProducts,
        status: "waiting for payment",
        totalPrice: total,
        partialPayment: 0,
        address: address,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  const setQuantity = (id, quantity) => {
    const newProductList = [];

    cartProducts.forEach((data) => {
      if (id === data.id) {
        newProductList.push({
          ...data,
          quantitySelected: quantity,
        });
      } else {
        newProductList.push(data);
      }
    });

    updateCart(newProductList);
  };

  const closeModal = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowModal(false);
    clearCart()
    router.push("/profile");
  };

  const selectCard = (product: { id: any; }) => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div>
      <Head>
        <title>Phillipine Card Marketplace</title>
        <link rel="icon" href="/pcm.png" />
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
                        height="120"
                        onClick={() => selectCard(product)}
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
                      <div
                        className="px-2"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <p>QTY:</p>
                        <Form.Select
                          aria-label="QTY"
                          style={{
                            marginLeft: "10px",
                            width: "69px",
                            cursor: "pointer",
                          }}
                          onChange={(e) =>
                            setQuantity(product.id, e.target.value)
                          }
                          defaultValue={product.quantitySelected}
                        >
                          {Array.from(
                            { length: product.quantity },
                            (_, index) => index + 1
                          ).map((optionValue) => (
                            <option key={optionValue} value={optionValue}>
                              {optionValue}
                            </option>
                          ))}
                        </Form.Select>
                        <FontAwesomeIcon
                          className="ps-3"
                          icon={faTrash}
                          height={30}
                          color="red"
                          role="button"
                          onClick={() => deleteProductCart(product.id)}
                        />
                      </div>
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
                Subtotal ({totalQuantity} cards)
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
                      {product.quantitySelected})
                    </p>
                    <p>
                      ₱{" "}
                      {product.price *
                        (product.quantitySelected)}
                    </p>
                  </div>
                ))}
              </div>
              <hr />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontWeight: "bold" }}>Order Total:</p>
                <p className="fs-4 fw-bold lead">
                  ₱ {Math.ceil(total).toLocaleString()}
                </p>
              </div>
              <hr />

              {loginEmail ? (
                <Form.Group className="mb-3" controlId="formUsername">
                  <div className="py-2">Enter your current shipping address</div>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Please enter your shipping address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="username"
                    isInvalid={invalidAddress}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid address.
                  </Form.Control.Feedback>
                  <div className="text-warning my-5">
                    <h6>
                      Note: If you refresh the page your cart will be cleared.
                    </h6>
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    disabled={cartProducts.length < 1}
                    onClick={cartCheckOut}
                  >
                    CHECKOUT
                  </button>
                </Form.Group>
              ) : (
                <Link href="/login" className="btn position-relative">
                  Login or Register now to checkout
                </Link>
              )}
              <Modal show={showModal}>
                <Modal.Header>
                  <Modal.Title className="text-dark">
                    Congratulations!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-dark">
                  Successful Checkout!
                  <br />
                  Please send us a message on the profile page.
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={closeModal}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
