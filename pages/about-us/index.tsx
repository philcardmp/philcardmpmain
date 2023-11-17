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
        <link rel="icon" href="/pcm.png" />
      </Head>

      <NavigationBar />
      <section id="aboutUs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-start text-lg-1 order-lg-1">
              <div className="pt-3 pb-5">
                <h2 className="position-relative d-inline-block">About Us</h2>
              </div>
              <p className="lead text-muted">Welcome to the Philippine Card Marketplace!</p>
              <p className="fs-6">

                Explore diverse card collections, buy NBA cards, and enjoy a seamless,
                secure experience. Engage with our community, benefit from exclusive promotions,
                and learn with our educational resources. Join us in making collecting a fun and
                rewarding experience!
                <br /><br />
                We also have a physical location in Angeles, Pampanga. Feel free to browse our cards
                if you are nearby.
              </p>
            </div>

            <div className="col-lg-6 order-lg-0">
              <Image
                src="/about-us.jpg"
                alt="about-us"
                width="600"
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
              <h3 className="mt-3">Hi, we're pleased to meet you!</h3>
              <Link href="/" className="brand text-decoration-none text-white">
                Philippine Card Marketplace
              </Link>
              <p className="text-black">
                Jowel Castaneda and I are the people behind Philippine Card Marketplace.
                We love basketball and we love to collect cards. We want to share our experience with you
                and we'd love to see you collect and build your personal collection too. Feel free to browse our website
                and explore through all the available cards. Cheers!
                <br />
                <br />
                Gian Cabrera
                <br />
                Owner/Developer
              </p>
            </div>
            <div className="col-lg-6">
              <Image
                src="/owners.jpg"
                alt="contact"
                width="900"
                height="350"
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
