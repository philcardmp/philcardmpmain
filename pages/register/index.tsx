import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Form, Modal } from "react-bootstrap";
import { auth, db } from '../../firebase';
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Register() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Validation
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidEmailMessage, setInvalidEmailMessages] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      router.push('/');
    }
  }, []);

  const checkIfValid = () => {
    let isValid = true;

    // Check if password is same with confirmPassword
    if (password !== confirmPassword || !password) {
      setInvalidPassword(true);
      isValid = false;
    } else {
      setInvalidPassword(false);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection("users").add({ email: email, password: password })
          setInvalidEmail(false);
          setShowModal(true);
        })
        .catch((error) => {
          setInvalidEmail(true);
          setInvalidEmailMessages(error.message)
        });
    }
  };

  const closeRegistration = () => {
    setShowModal(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Double Dribble</title>
        <link rel="icon" href="/DDiconname.jpeg" />
      </Head>

      <div className="auth">
        <div className={`page-content${darkMode} d-flex align-items-center`}>
          <div className="container d-flex justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              <div className={`auth-card${darkMode}`}>
                <div className="p-3 mt-3 d-flex justify-content-center">
                  <Link href="/">
                    <Image
                      src="/DDbanner.png"
                      alt="contact"
                      width={250}
                      height={150}
                    />
                  </Link>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="email"
                      className={`form-control auth-input${darkMode}`}
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      isInvalid={invalidEmail}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {invalidEmailMessage.replace("Firebase:", "").split('(')[0]}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Control
                      type="password"
                      className={`form-control auth-input${darkMode}`}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      isInvalid={invalidPassword}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      The password confirmation does not match
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Control
                      type="password"
                      className={`form-control auth-input${darkMode}`}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      isInvalid={invalidPassword}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      The password confirmation does not match
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Modal show={showModal}>
                    <Modal.Header>
                      <Modal.Title className="text-dark">
                        Congratulation!
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-dark">
                      Successful Registration!
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        // variant="secondary"
                        onClick={() => closeRegistration()}
                      >
                        Close
                      </button>
                    </Modal.Footer>
                  </Modal>

                  <button
                    className="btn auth-btn mt-2 mb-4 bg-secondary w-100 text-white"
                    type="submit"
                  >
                    Register
                  </button>
                </Form>

                <p className="text-center mb-4">
                  Already have an account?
                  <Link href="/login" className="text-muted">
                    Login now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          id="theme-button"
          className={`btn btn-theme${darkMode}`}
          onClick={() => setDarkMode(darkMode ? "" : "-dark")}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>
    </>

  );
}
