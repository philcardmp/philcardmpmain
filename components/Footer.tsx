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
    <footer className="footer-bg py-3">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-4">
            <h6 className="fw-light text-black text-decoration-none"><Link href="/" className=" text-decoration-none text-black">
              DOUBLE DRIBBLE
            </Link></h6>
            <hr />
            <ul className="list-unstyled">
              <p className="my-2">
                <Link
                  href="/"
                  className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> Home
                </Link>
              </p>
              <p className="my-2">
                <Link
                  href="/about-us"
                  className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> About Us
                </Link>
              </p>
              <p className="my-2">
                <Link
                    href="/seller"
                    className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon icon={faChevronRight} height={20} /> Sell with Us
                </Link>
              </p>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4">
            <h6 className="fw-light text-black mb-3">CONTACT US</h6>
            <hr />
            <p className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faEnvelope} height={20} />
              </span>
              <span className="fw-light text-black">philcardmp@gmail.com</span>
            </p>
            <p className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faMapMarked} height={20} />
              </span>
              <span className="fw-light text-black">
                Angeles City, Pampanga Philippines
              </span>
            </p>
            <p className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhone} height={20} />
              </span>
              <span className="fw-light text-black">0997 720 0248</span>
            </p>
          </div>
          <div className="col-md-6 col-lg-4 ">
            <h6 className="fw-light mb-3 text-black">FOLLOW US</h6>
            <hr />
            <ul className="list-unstyled d-flex">
              <li className="text-decoration-none text-muted fs-4 me-4">
                <Link
                  href="https://www.facebook.com/doubledribblehub"
                  target="_blank"
                  className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    height={20}
                    cursor="pointer"
                  />
                </Link>
              </li>
              <li className="text-decoration-none fs-4 me-4">
                <Link
                  href="https://www.instagram.com/jowel.castaneda"
                  target="_blank"
                  className="text-black text-decoration-none"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    height={20}
                    cursor="pointer"
                  />
                </Link>
              </li>
              <li className="text-decoration-none fs-4 me-4">
                <Link
                  href="www.tiktok.com/@philcardmp.breaks"
                  target="_blank"
                  className="text-black text-decoration-none"
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
