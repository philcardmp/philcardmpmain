import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMoon,
  faGem,
  faUser,
  faSearch,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Form, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import Image from "next/image";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const router = useRouter();
  const cartProducts = useSelector((state: any) => state.cartProducts);

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
    localStorage.removeItem('email')
    router.push('/login')
  };

  return (
    <Navbar bg="light" expand="lg" className="bg-black py-0" id="myNavbar">
      <Container>
        <Link
          href="/"
          className="navbar-brand order-lg-0 col-md-6 col-lg-3"
        >
          <Image
            src="/title.png"
            alt="contact"
            width="1000"
            height="90"
          />
          {/*<span id="brand-name2">PCM</span>*/}
        </Link>

        <div className="nav-btns order-lg-2">
          <Link href="/cart" className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faShoppingCart} height={20} />
            <span className="nav-btn-label"> CART </span> (
            {cartProducts ? cartProducts?.length : 0})
          </Link>
          {localStorage.getItem('email') && <>
            <Link href="/profile" className="btn position-relative" type="button">
              <FontAwesomeIcon icon={faUser} height={20} />
              <span className="nav-btn-label"> Profile </span>
            </Link>
            <Link href="/login" className="btn position-relative" onClick={(e) => logout(e)}>
              <FontAwesomeIcon icon={faSignOut} height={20} />
            </Link>
          </>}
        </div>


        <div id="searchbar" className="order-lg-1">
          <Form className="d-flex">
            <Form.Control
              type="search"
              className="w-100"
              placeholder="Search a card"
              aria-label="Search"
            />
            <div className="nav-btns">
              <Link href="/cart" className="btn position-relative m-0" type="button">
                <FontAwesomeIcon icon={faSearch} height={20} />
              </Link>
            </div>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
}
