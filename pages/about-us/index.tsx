import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Philippine Card Marketplace</title>
        <link rel="icon" href="/main.png" />
      </Head>

      <NavigationBar />
      <section id="aboutUs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-1 order-lg-1">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block">About Us</h2>
              </div>
              <p className="lead text-muted">Philippine Card Marketplace</p>
              <p className="fs-6">
                We are currently located at Angeles City
                Pampanga. Feel free to browse the card collections!
                Have fun collecting and earning at the same time.
                Please contact us if you want to sell your cards
                on our website. Have fun!
              </p>
            </div>

            <div className="col-lg-6 order-lg-0">
              <Image
                src="/banner.png"
                alt="about-us"
                width="500"
                height="1000"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contactUs">
        <div className="container pb-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mt-3">Let us know how we can help you.</h3>
              <Link href="/" className="brand text-decoration-none text-white">
                Talasulod
              </Link>
              <p className="text-white text-muted">
                Please send us a message, we usually send our reply between 8am
                to 10pm.
              </p>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <FontAwesomeIcon icon={faEnvelope} height={20} />
                </span>
                <span className="fw-light">philcardmp@gmail.com</span>
              </div>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <FontAwesomeIcon icon={faMapMarked} height={20} />
                </span>
                <span className="fw-light">
                  Angeles City, Pampanga, Philippines
                </span>
              </div>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <FontAwesomeIcon icon={faPhone} height={20} />
                </span>
                <span className="fw-light">0997 720 0248</span>
              </div>
              <br />
              <h5 className="fw-light mb-3">Follow Us</h5>
              <ul className="list-unstyled d-flex">
                <li className="text-decoration-none text-muted fs-4 me-4">
                  <Link
                    href="https://www.facebook.com/phcardsmp"
                    target="_blank"
                    className="text-white text-decoration-none text-muted"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      height={20}
                      cursor="pointer"
                    />
                  </Link>
                </li>
                <li className="text-decoration-none text-muted fs-4 me-4">
                  <Link
                    href="https://www.facebook.com/phcardsmp"
                    target="_blank"
                    className="text-white text-decoration-none text-muted"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      height={20}
                      cursor="pointer"
                    />
                  </Link>
                </li>
                <li className="text-decoration-none text-muted fs-4 me-4">
                  <Link
                    href="https://www.tiktok.com/@philcardmp.breaks"
                    target="_blank"
                    className="text-white text-decoration-none text-muted"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      height={20}
                      cursor="pointer"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <Image
                src="/logo2.png"
                alt="contact"
                width="1000"
                height="400"
                className="w-100"
              />
            </div>
          </div>
        </div>
        <br />
      </section>

      <Footer />
    </>
  );
}