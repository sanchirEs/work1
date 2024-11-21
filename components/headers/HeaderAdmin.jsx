"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { openCart } from "@/utlis/openCart";
import CartLength from "./components/CartLength";
import Image from "next/image";
import User from "./components/User";
import SearchPopup from "./components/SearchPopup";
import NavAdmin from "./components/NavAdmin";

export default function HeaderAdmin() {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className={`header header_sticky ${
        scrollDirection == "up" ? "header_sticky-active" : "position-absolute"
      } `}
    >
      <div className="container">
        <div className="header-desk header-desk_type_1">
          <div className="logo">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                width={112}
                height={28}
                alt="Uomo"
                className="logo__image d-block"
              />
            </Link>
          </div>
          {/* <!-- /.logo --> */}

          <nav className="navigation">
            <ul className="navigation__list list-unstyled d-flex">
              <NavAdmin />
            </ul>
            {/* <!-- /.navigation__list --> */}
          </nav>
          {/* <!-- /.navigation --> */}

          <div className="header-tools d-flex align-items-center">
            {/* <SearchPopup /> */}

            {/* <!-- /.header-tools__item hover-container --> */}

            <div className="header-tools__item hover-container">
              <a className="header-tools__item js-open-aside" href="#">
                <User />
              </a>
            </div>
          </div>
          {/* <!-- /.header__tools --> */}
        </div>
        {/* <!-- /.header-desk header-desk_type_1 --> */}
      </div>
      {/* <!-- /.container --> */}
    </header>
  );
}
