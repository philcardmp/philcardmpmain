import React, { useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { auth, facebookProvider, googleProvider } from '../../firebase';
import Image from "next/image";
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      router.push('/');
    }
  }, []);

  const googleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleProvider)
      .catch((error) => alert(error.message))
      .then(user => localStorage.setItem("email", user.additionalUserInfo.profile.email))
  };

  const facebookSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(facebookProvider)
      .catch((error) => alert(error.message))
      .then(user => localStorage.setItem("email", user.additionalUserInfo.profile.email))
  };

  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-center align-items-center full-height">
          <Col md={6}>
            <div className="login-card">
              <Image
                src="/title.png"
                alt="contact"
                width={350}
                height={250}
              />
              <br />
              <Row className="button-container">
                <div className="col-md-12">
                  <Button
                    type="submit"
                    onClick={facebookSignIn}
                    className="login-button w-100 m-2"
                  >
                    Sign in with Facebook
                  </Button>
                </div>
                <div className="col-md-12">
                  <Button
                    type="submit"
                    onClick={googleSignIn}
                    variant="success"
                    className="login-button w-100 m-2"
                  >
                    Sign in with Google
                  </Button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
