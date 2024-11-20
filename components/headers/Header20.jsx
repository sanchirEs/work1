"use client";
import Link from "next/link";
import CartLength from "./components/CartLength";
import Nav from "./components/Nav";
import { openCart } from "@/utlis/openCart";
import Image from "next/image";
import User from "./components/User";
import { currencyOptions, languageOptions2 } from "@/data/footer";
import { socialLinks } from "@/data/socials";
import SearchPopup from "./components/SearchPopup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header20() {
  const { data: session } = useSession(); // Check if the user is logged in
  const router = useRouter();

  const handleCartClick = () => {
    if (!session) {
      // Redirect to login if the user is not logged in
      router.push("/login");
    } else {
      // Open the cart if the user is logged in
      openCart();
    }
  };

  const handleWishlistClick = () => {
    if (!session) {
      // Redirect to login if the user is not logged in
      router.push("/login");
    } else {
      // Redirect to wishlist if the user is logged in
      router.push("/account_wishlist");
    }
  };

  return (
    <header id="header" className="header header_sticky">
      <div className="header-desk header-desk_type_2 container">
        <nav className="navigation d-flex no-underline">
          <ul className="navigation__list nav-20 list-unstyled d-flex theme-color">
            <Nav />
          </ul>
        </nav>

        <div className="logo">
          <Link href="/">
            {/* <Image
              src="/assets/images/logo-baby.png"
              width={112}
              height={28}
              alt="Uomo"
              className="logo__image d-block"
            /> */}
            <h2>
              LOGO
            </h2>
          </Link>
        </div>

        <div className="header-tools d-flex align-items-center pe-4">
          <SearchPopup />

          <div className="header-tools__item hover-container">
            <a
              className="js-open-aside theme-color theme-hover-color-secondary"
              href="#"
            >
              <User />
            </a>
          </div>

          {/* Conditionally render wishlist based on session */}
          {session && (
            <a
              onClick={handleWishlistClick}
              className="header-tools__item theme-color theme-hover-color-secondary"
            >
              <svg
                className="d-block"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_heart" />
              </svg>
            </a>
          )}

          {/* Conditionally render cart based on session */}
          {session && (
            <a
              onClick={handleCartClick}
              className="header-tools__item header-tools__cart js-open-aside theme-color theme-hover-color-secondary"
            >
              <svg
                className="d-block"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_cart" />
              </svg>
              <span className="cart-amount d-block position-absolute js-cart-items-count">
                <CartLength />
              </span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
