import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { auth, googleProvider, db, getAuth } from "../../firebase";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useCollection } from "react-firebase-hooks/firestore";

const Login = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [forgotEmail, setForgotEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [users] = useCollection(db.collection("users"));

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      router.push("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem("email", email);
        router.push("/");
      })
      .catch((error) => {
        setInvalidUser(true);
      });
  };

  const submitForgotPassword = (e) => {
    e.preventDefault();
    users?.docs.forEach((item) => {
      if (item.data().email == forgotEmail) {
        setInvalidEmail(false);
        auth
          .sendPasswordResetEmail(forgotEmail)
          .then(() => {
            alert("Your password has been sent to your email!");
            setShowModal(false);
          })
          .catch((error) => {
            const errorMessage = error.message;
            alert(
              "Email sending failed. Please try again later.",
              errorMessage
            );
          });
      } else {
        setInvalidEmail(true);
      }
    });
  };

  const loginProcess = (user) => {
    localStorage.setItem("email", user.additionalUserInfo.profile.given_name);
    router.push("/");
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(googleProvider)
      .catch((error) => alert(error.message))
      .then((user) => loginProcess(user));
  };

  return (
    <div className="auth">
      <div className={`page-content${darkMode} d-flex align-items-center`}>
        <div className="container d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div className={`auth-card${darkMode}`}>
              <div className="p-3 mt-3 d-flex justify-content-center">
                <Link href="/">
                  <Image
                    src="/title.png"
                    alt="contact"
                    width={250}
                    height={150}
                  />
                </Link>
              </div>
              <button
                className={`btn my-3 service-btn${darkMode}`}
                onClick={googleSignIn}
              >
                <FontAwesomeIcon icon={faGoogle} height={20} cursor="pointer" />
                <span> Login with Google</span>
              </button>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Control
                    type="email"
                    className={`form-control auth-input${darkMode}`}
                    size="sm"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={invalidUser}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Invalid User
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Control
                    type="password"
                    className={`form-control auth-input${darkMode}`}
                    size="sm"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={invalidUser}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Invalid User
                  </Form.Control.Feedback>
                </Form.Group>

                <button
                  className="btn auth-btn mt-2 mb-4 bg-secondary w-100 text-white"
                  type="submit"
                >
                  Login
                </button>
              </Form>

              <p
                className="text-center mb-1 text-decoration-underline"
                style={{ cursor: "pointer" }}
                onClick={() => setShowModal(true)}
              >
                Forgot Password?
              </p>
              <Modal show={showModal}>
                <Modal.Header>
                  <Modal.Title className="text-dark">
                    Please enter your email where we will send your password.
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-dark">
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="email"
                      className={`form-control auth-input${darkMode}`}
                      placeholder="Email Address"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      isInvalid={invalidEmail}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Please enter a registered email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={submitForgotPassword}>Send</button>
                  <button onClick={() => setShowModal(false)}>Close</button>
                </Modal.Footer>
              </Modal>

              <p className="text-center mb-4">
                Don't have an account?
                <Link href="/register" className="text-muted">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        className={`btn btn-theme${darkMode}`}
        onClick={() => setDarkMode(darkMode ? "" : "-dark")}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </div>
  );
};

export default Login;
