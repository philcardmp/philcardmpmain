import Head from "next/head";
import NavigationBar from "../components/NavigationBar";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import Login from "./login";
import { Container, Spinner, Image } from "react-bootstrap";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Container className="loader-container">
        <div className="loader-contents">
          <Image src="/DDbanner.jpeg" alt="" fluid />
          <br />
          <br />
          <Spinner
            animation="border"
            variant="purple"
            className="custom-spinner"
          />
        </div>
      </Container>
    );
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Head>
          <title>Phillipine Card Marketplace</title>
          <link rel="icon" href="/ddicon.jpeg" />
        </Head>

        <main>
          <NavigationBar />
          <Collection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
