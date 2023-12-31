import React, { useEffect, useRef, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db, storage } from "../../firebase";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import ChatInput from "../../components/ChatInput";
import Message from "../../components/Message";
import NavigationBar from "../../components/NavigationBar";
import Head from "next/head";

export default function Chat() {
  const [userId, setUserId] = useState("");
  const [activeOrderId, setActiveOrderId] = useState("");
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

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const storageRef = storage.ref(`orders/${activeOrderId}/screenshot.png`);
      const imageRef = storageRef.child("screenshot.png");

      // Check if there's an existing image URL in Firestore
      const orderRef = db.collection("orders").doc(activeOrderId);
      orderRef
        .get()
        .then((doc) => {
          // Upload the new image
          imageRef.put(file).then(async () => {
            const imageUrl = await imageRef.getDownloadURL();

            // Save image URL in Firestore under "orders" document
            orderRef.set({ image: imageUrl }, { merge: true });
          });
        })
        .catch((error) => {
          console.error("Error getting document:", error);
        });
    }
  };

  const handleButtonClick = (orderId) => {
    setActiveOrderId(orderId);
    document.getElementById("fileInput").click();
  };
  return (
    <div>
      <Head>
        <title>Double Dribble</title>
        <link rel="icon" href="/ddicon.jpeg" />
      </Head>
      <NavigationBar />
      <br />
      <br />
      <br />
      <Row className="justify-content-between border-bottom mt-lg-5 mt-md-0 mt-sm-0 ps-lg-3 ps-sm-2 py-sm-2">
        <Col md={6} className="bg-dark">
          <h4 className="text-light fw-bold pt-lg-3">Order Details: {userDetails?.data().email}</h4>
          <ListGroup
            className="message-container ps-2 pt-2 ps-1 overflow-scroll"
            id="flex-item-left"
            style={{ minHeight: "300px"}}
          >
            {orders?.docs.length > 0 ? (
              orders?.docs
              .filter(
                (order) => order.data().email === localStorage.getItem("email")
              )
              .map((order, index) => (
                <ListGroup.Item key={index}>
                  <div className="checkoutContainer">
                    <div className="m-2" style={{cursor: "pointer"}}>


                      <img
                        src={
                          order.data().image
                            ? order.data().image
                            : "/screenshot.png"
                        }
                        alt="order image"
                        width="120"
                        height="120"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleButtonClick(order.id)}
                      />
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="m-3">
                      <h6>Order Id:{order.id}</h6>
                      <p className="fs-6">
                        Price: ₱{order.data().totalPrice.toLocaleString()}
                      </p>
                      <p className="fs-6">
                        {new Date(
                          order?.data().timestamp?.seconds * 1000
                        ).toLocaleDateString()}
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
                            <br />
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
                        <p>
                          Address:
                          <p className="fw-bold">{order.data().address}</p>
                        </p>
                      </div>
                    </div>
                    <div
                        className="px-2"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                    >
                    <p>
                      Status:{" "}
                      <p className="fw-bold text-danger">
                        {order.data().status}
                      </p>
                    </p>
                    </div>
                  </div>
                </ListGroup.Item>
              ))
            ) : (
                <ListGroup.Item><div className="m-1 text-center">No orders yet</div></ListGroup.Item>
              )}
          </ListGroup>
          <hr />
          <p className="d-flex justify-content-between text-light ">
            <strong>To process your order:</strong>
          </p>
          <div>
            <div>
              <p className="ps-3  d-flex mb-2 text-light">
                1. Submit your payment to
              </p>
              <div className="d-flex mb-2 text-light px-5">
                <strong>Name: Jowel Castañeda</strong>
              </div>
              <div className="d-flex justify-content-between text-light px-5">
                <div className="pe-2"><Image
                    src="/gcash.jpeg"
                    alt="gcash"
                    width="20px"
                    height="20px"
                    className=""
                /> Gcash: 09974722392</div>
                <div className="pe-2"><Image
                    src="/bpi.jpeg"
                    alt="bpi"
                    width="20px"
                    height="20px"
                    className=""
                /> BPI: 9709258327</div>
                <div className="me-1"><Image
                    src="/bdo.png"
                    alt="bdo"
                    width="20px"
                    height="20px"
                    className=""
                /> BDO: 001311177068</div>
              </div>
            </div>
            <div>
              <p className="ps-3 d-flex mb-2 text-light">
                2. Save a screenshot of your payment and attach it to your order details.
              </p>
            </div>
            <div>
              <p className="ps-3 d-flex mb-2 text-light">
                3. We'll send a message in the chatbox to confirm your order.
              </p>
            </div>
            <div>
              <p className="ps-3 d-flex mb-2 text-light">
                4. If you have any questions or concerns, please don't hesitate to chat with us. Thank you.
              </p>
            </div>
          </div>

        </Col>

        <Col md={6}>
          <Container fluid className="d-flex flex-column flex-grow-1 mt-5" id="flex-item-right" style={{ maxHeight: "800px"}}>
            {userDetails?.data()?.email && userMessages && (
              <>
                <Row className="justify-content-between p-3 border-bottom" >
                  <Col className="d-flex align-items-center">
                    <h4 className="m-0">
                      <strong>Chat History</strong>
                    </h4>
                  </Col>
                </Row>

                <div
                  className="messages-container overflow-scroll"
                  style={{ maxHeight: "739px"}} //,height: "500px"
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
                  <ChatInput
                      chatRef={chatRef}
                      email={userDetails?.data().email}
                      userId={userId}
                      image={userDetails?.data().image}
                  />
                </div>

                <div ref={chatRef} className="pb-lg-5 pb-sm-0" style={{ maxHeight: "500px"}}/>
              </>
            )}
          </Container>
        </Col>
      </Row>
    </div>
  );
}
