import React, { useEffect, useState } from "react";
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
import {faEnvelope, faMapMarked, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase";
import * as actionCart from "../../redux/actions/actionCart";
import Image from "next/image";

export default function Cart() {
    const [total, setTotal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [facebook, setFacebook] = useState("");
    const [invalidFacebook, setinvalidFacebook] = useState(false);
    const dispatch = useDispatch();
    const cartProducts = useSelector((state: any) => state.cartProducts);
    const { deleteProductCart } = bindActionCreators(actionCart, dispatch);

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
                <link rel="icon" href="/logo.png" />
            </Head>

            <NavigationBar />

            <Container fluid style={{ marginTop: "140px" }}>
                <div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 text-center text-lg-1 order-lg-1">
                            <div className="pt-2 pb-1">
                                <h3 className="position-relative d-inline-block">My Account</h3>
                            </div>
                            <hr />

                        </div>
                    </div>
                </div>
                <Row className="justify-content-center" style={{ marginTop: "30px" }}>
                    <Col>
                        <div className="ps-5">
                            <div>
                                <div className="lead fw-bold">Ros Gian Cabrera</div>
                                {/*<p className="fs-6">Email: {localStorage.getItem("name")}</p>*/}
                                <p className="text-muted pt-2">Edit Profile</p>
                            </div>

                            {/*test*/}
                            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <div style={{fontSize: "15px"}}>Username</div>
                </span>
                                <span className="text-black" style={{fontSize: "15px"}}>rgiancabrera25</span>
                                {/*<p className="fs-6">Email: {localStorage.getItem("phone")}</p>*/}
                            </div>

                            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <div style={{fontSize: "15px"}}>Email</div>
                </span>
                                <span className="text-black" style={{fontSize: "15px"}}>rgiancabrera@gmail.com</span>
                                {/*<p className="fs-6">Email: {localStorage.getItem("phone")}</p>*/}
                            </div>

                            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <div style={{fontSize: "15px"}}>Phone</div>
                </span>
                                <span className="text-black" style={{fontSize: "15px"}}>09982922622</span>
                                {/*<p className="fs-6">Email: {localStorage.getItem("phone")}</p>*/}
                            </div>

                            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <div style={{fontSize: "15px"}}>Address</div>
                </span>
                                <span className="text-black" style={{fontSize: "15px"}}>B11 L8, Emerald St., Mansfield Residences, Sto. Domingo, Angeles City, Pampanga, 2009</span>
                                {/*<p className="fs-6">Email: {localStorage.getItem("phone")}</p>*/}
                            </div>
                            {/*test end*/}
                        </div>
                    </Col>
                    <Col xs={12} md={9}>
                        <div className="pe-5">
                            <div className="Cart-total">
                                <div className="text-center fs-6">
                                    <p>Order Details</p>
                                </div>
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
