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
                <link rel="icon" href="/DDicon.jpeg" />
            </Head>

            <NavigationBar />
            <section id="seller">
                <div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 text-center text-lg-1 order-lg-1">
                            <div className="title pt-3 pb-5">
                                <h2 className="position-relative d-inline-block">Do you want to sell cards from your awesome collection?</h2>
                            </div>
                            <p className="lead text-muted">FB Page: Mr. PCM</p>
                            <p className="fs-6">
                                Please visit our <Link
                                    href="https://www.facebook.com/doubledribblehub"
                                    target="_blank"
                                    className="text-white text-decoration-none text-muted"
                                >Facebook page </Link>
                                and leave us a message if you want to want to sell and showcase your cards on our
                                website! Feel free to chat us anytime.
                            </p>
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
                                Philippine Card Marketplace
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
                                        href="https://www.facebook.com/doubledribblehub"
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
                                        href="https://www.facebook.com/doubledribblehub"
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
                                src="/cards4sale.png"
                                alt="contact"
                                width="1000"
                                height="500"
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
