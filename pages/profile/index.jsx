import React, { useEffect, useRef, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import ChatInput from "../../components/ChatInput";
import Message from "../../components/Message";
import NavigationBar from "../../components/NavigationBar";
import Head from "next/head";

export default function Chat() {
  const [userId, setUserId] = useState("");
  const chatRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [userDetails] = useDocument(
    userId && db.collection("users").doc(userId)
  );
  const [userMessages, loading] = useCollection(
    userId &&
      db
        .collection("users")
        .doc(userId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  const [orders] = useCollection(
    db.collection("orders").orderBy("timestamp", "asc")
  );

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [userMessages]);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [userId, loading]);

  return (
    <div>
      <Head>
        <title>Phillipine Card Marketplace</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      <NavigationBar />
      <br />
      <br />
      <br />
      <Row className="justify-content-between p-3 border-bottom mt-5">
        <Col md={6} className="bg-dark">
          <div className="d-flex justify-content-between text-warning">
            <h4>Name: Jowel Castañeda</h4>
          </div>
          <div className="d-flex justify-content-between text-warning">
            <h4>Gcash: 09974722392</h4>
            <h4>BPI: 9709258327</h4>
            <h4>BDO: 001311177068</h4>
          </div>
          <h4 className="text-light fw-bold">Order History:</h4>
          <ListGroup
            className="messages-container overflow-auto"
            style={{ maxHeight: "600px" }}
          >
            {orders?.docs.map((order, index) => (
              <ListGroup.Item key={index}>
                <div className="cartContainer">
                  <div className="m-2" style={{ cursor: "pointer" }}>
                    <Image
                      src="/screenshot.png"
                      alt="order image"
                      width="120"
                      height="120"
                      // onClick={() => selectCard(product)}
                    />
                  </div>
                  <div className="m-3">
                    <h6>Order Id:{order.id}</h6>
                    <p className="fs-6">
                      Price: ₱{order.data().totalPrice.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    {order?.data().order.map((product, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>
                          {product.productName} (
                          {product.quantitySelected
                            ? product.quantitySelected
                            : 1}
                          )
                        </p>
                      </div>
                    ))}
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
                      <p>Status: {order.data().status}</p>
                    </div>

                    <p className="fw-bold">
                      {new Date(
                        order.data().timestamp.seconds * 1000
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="RemoveCartItem"></div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={6}>
          <Container fluid className="d-flex flex-column flex-grow-1 mt-5">
            {userDetails?.data().email && userMessages && (
              <>
                <Row className="justify-content-between p-3 border-bottom">
                  <Col className="d-flex align-items-center">
                    <h4 className="m-0">
                      <strong>#{userDetails?.data().email}</strong>
                    </h4>
                  </Col>
                </Row>

                <div
                  className="messages-container overflow-auto"
                  style={{ maxHeight: "500px" }}
                  ref={messagesContainerRef}
                >
                  {userMessages?.docs.map((doc) => {
                    const { message, timestamp, user, userImage } = doc.data();
                    return (
                      <Message
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                      />
                    );
                  })}
                </div>

                <div ref={chatRef} className="pb-5" />

                <ChatInput
                  chatRef={chatRef}
                  email={userDetails?.data().email}
                  userId={userId}
                  image={userDetails?.data().image}
                />
              </>
            )}
          </Container>
        </Col>
      </Row>
    </div>
  );
}
