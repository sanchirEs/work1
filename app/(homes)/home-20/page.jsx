import Header20 from "@/components/headers/Header20";
import Testimonials from "@/components/homes/home-20/Testimonials";
import BestSeller from "@/components/homes/home-20/BestSeller";
import Categories from "@/components/homes/home-20/Categories";
import Campaigns from "@/components/homes/home-20/Campaigns";
import Collections from "@/components/homes/home-20/Collections";
import Features from "@/components/homes/home-20/Features";
import Hero from "@/components/homes/home-20/Hero";
import EndingSoonCollection from "@/components/homes/home-20/Ending-soon";
import PetitionsCollection from "@/components/homes/home-20/Petitions";
import React from "react";
import Instagram from "@/components/homes/home-20/Instagram";
import Footer20 from "@/components/footers/Footer20";

export const metadata = {
  title: "Home 20 || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function HomePage20() {
  return (
    <>
      <div className="theme-21">
        <Header20 />
        <main>
          <Hero />
          <Features />
          <div className="container">
            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          <Campaigns />
          <div className="container">
            <div
              className=" mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          {/* <Categories /> */}
          <div className="container">
            <div className="mb-3 mb-xl-4 pt-3 pb-4"></div>

            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          {/* <BestSeller /> */}
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          {/* <Collections />
          <div className="container">
            <div className="mb-3 mb-xl-4 pt-3 pb-4"></div>
            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
           */}
          {/* <div className="container">
            <div className="mb-3 mb-xl-4 pt-3 pb-4"></div>
            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div> */}
          <PetitionsCollection />
          <div className="container">
            <div className="mb-3 mb-xl-4 pt-3 pb-4"></div>
            <div
              className="border-top-1-dashed mb-3 pb-3 pt-1 pb-xl-5"
              style={{ color: "#b1a8cd" }}
            ></div>
          </div>
          <EndingSoonCollection />
          <div className="mb-3 mb-xl-5 pb-3 pt-1"></div>
          <div className="bg-grey-faf9f8">
            {/* <Testimonials /> */}
          </div>
          <div className="mb-3 mb-xl-5 pb-3 pt-1 pb-xl-5"></div>
          {/* <Instagram /> */}
        </main>
        <Footer20 />
      </div>
    </>
  );
}
