"use client";
import Svgs from "@/components/common/Svgs";
import "react-tooltip/dist/react-tooltip.css";
import "../public/assets/css/plugins/swiper.min.css";
import "../public/assets/sass/style.scss";
import "rc-slider/assets/index.css";
import "tippy.js/dist/tippy.css";
import LoginFormPopup from "@/components/common/LoginFormPopup";
import { useEffect } from "react";
import ScrollTop from "@/components/common/ScrollTop";
import Context from "@/context/Context";
import QuickView from "@/components/modals/QuickView";
import CartDrawer from "@/components/shopCartandCheckout/CartDrawer";
import SiteMap from "@/components/modals/SiteMap";
import NewsLetter from "@/components/modals/NewsLetter";
import CookieContainer from "@/components/common/CookieContainer";
import MobileHeader from "@/components/headers/MobileHeader";
import SizeGuide from "@/components/modals/SizeGuide";
import Delivery from "@/components/modals/Delivery";
import CustomerLogin from "@/components/asides/CustomerLogin";
import ShopFilter from "@/components/asides/ShopFilter";
import ProductDescription from "@/components/asides/ProductDescription";
import ProductAdditionalInformation from "@/components/asides/ProductAdditionalInformation";
import ProductReviews from "@/components/asides/ProductReviews";
import MobileFooter1 from "@/components/footers/MobileFooter1";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  
  return (
    <html lang="en">
      <head>
        {/* Head links and styles */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
        {/* Add other font links here */}
      </head>
      <body>
        <SessionProvider> {/* Wrap the entire application */}
          <Svgs />
          <Context>
            <MobileHeader />
            {children}
            <MobileFooter1 />
            {/* Modals and Asides */}
            <LoginFormPopup />
            <QuickView />
            {/* <NewsLetter /> */}
            {/* <CookieContainer /> */}
            <SizeGuide />
            <Delivery />
            <CartDrawer />
            <SiteMap />
            <CustomerLogin />
            <ShopFilter />
            <ProductDescription />
            <ProductAdditionalInformation />
            <ProductReviews />
          </Context>
          <div className="page-overlay" id="pageOverlay"></div>
          <ScrollTop />
        </SessionProvider>
      </body>
    </html>
  );
}
