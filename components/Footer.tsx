import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <Link href="/" className="brand text-decoration-none text-white">
              Philippine Card Marketplace
            </Link>
            <p className="text-white mt-3 text-muted">
              We are currently located at Angeles City
              Pampanga. Feel free to browse the card collections!
              Have fun collecting and earning at the same time.
              Please contact us if you want to sell your cards
              on our website. Have fun!
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light">Links</h5>
            <ul className="list-unstyled">
              <li className="my-3">
                <Link
                  href="/"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/about-us"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Contact Us</h5>
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
                Angeles City, Pampanga Philippines
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhone} height={20} />
              </span>
              <span className="fw-light">0997 720 0248</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
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
                  href="https://www.instagram.com/jowel.castaneda"
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
                  href="www.tiktok.com/@philcardmp.breaks"
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
        </div>
      </div>
    </footer>
  );
}
