"use client";

import { useContextElement } from "@/context/Context";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PetitionsCollection() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [petitions, setPetitions] = useState([]);

  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    slidesPerView: 4,
    slidesPerGroup: 1,
    pagination: false,
    navigation: {
      nextEl: "#product_carousel_4 .products-carousel__next",
      prevEl: "#product_carousel_4 .products-carousel__prev",
    },
    effect: "none",
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 26,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
    },
  };

  useEffect(() => {
    // Fetch live petitions data from the API
    const fetchPetitions = async () => {
      const response = await fetch("/api/petitions"); // Adjust this to your endpoint
      const data = await response.json();
      setPetitions(data);
    };
    fetchPetitions();
  }, []);

  return (
    <section className="product-carousel container">
      <div className="d-flex align-items-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
        <h2 className="h3 fw-bold theme-color text-uppercase">Live Petitions</h2>

        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-semi-bold theme-color-secondary"
          href="/petitions"
        >
          See All Petitions
        </Link>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3 col-xl-20per">
          <div className="position-relative w-100 h-sm-100 border-radius-4 overflow-hidden minh-240 mb-4 mb-sm-0">
            <div
              className="background-img"
              style={{
                backgroundImage: "url(/assets/images/home/demo21/banner-4.jpg)",
              }}
            ></div>
            <div className="content_abs top-0 mx-3 mt-3 mt-xl-4 pt-2 px-2">
              <p className="mb-1 text-uppercase fw-medium">Support Our Causes</p>
              <h3 className="fs-25 fw-bold text-uppercase fw-bold mb-3 theme-color-third">
                Popular Petitions
              </h3>
              <Link
                href="/petitions"
                className="btn btn-outline-primary border-0 fs-12 btn-40 border-circle text-uppercase theme-bg-color-secondary text-white px-4 py-2 fw-semi-bold d-inline-flex align-items-center"
              >
                <span>Explore</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-8 col-lg-9 col-xl-80per">
          <div id="product_carousel_4" className="position-relative">
            <Swiper
              {...swiperOptions}
              className="swiper-container js-swiper-slider"
              data-settings=""
            >
              {petitions.map((petition, i) => (
                <SwiperSlide key={i} className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <Link href={`/product/${petition.product.id}`}>
                      <Image
                        loading="lazy"
                        // src={petition.product.imageUrl} // Replace with actual image field from API
                        src={"/assets/images/home/demo21/product-10.jpg"} // Replace with actual image field from API
                        width="255"
                        height="270"
                        alt={petition.product.name}
                        className="pc__img"
                      />
                    </Link>
                    <button
                      className="pc__atc btn btn-lg anim_appear-bottom btn btn-50 theme-bg-color-secondary text-white position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside d-flex align-items-center justify-content-center gap-2 lh-1 border-circle"
                      onClick={() => addProductToCart(petition.product.id)}
                      title={
                        isAddedToCartProducts(petition.product.id)
                          ? "Already Added"
                          : "Add to Cart"
                      }
                    >
                      <svg
                        className="d-block"
                        width="14"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use
                          href={`${
                            isAddedToCartProducts(petition.product.id)
                              ? "#icon_cart_added"
                              : "#icon_cart"
                          }`}
                        ></use>
                      </svg>
                      <span className="d-block pt-1">
                        {isAddedToCartProducts(petition.product.id)
                          ? "Already Added"
                          : "Add To Cart"}
                      </span>
                    </button>
                    <div className="anim_appear-right position-absolute top-0 mt-2 me-2">
                      <button
                        className="btn btn-round-sm btn-hover-red d-block border-1 text-uppercase mb-2 js-quick-view theme-hover-bg"
                        data-bs-toggle="modal"
                        data-bs-target="#quickView"
                        onClick={() => setQuickViewItem(petition.product)}
                        title="Quick view"
                      >
                        <svg
                          className="d-inline-block"
                          width="14"
                          height="14"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_view" />
                        </svg>
                      </button>
                      <button
                        className={`btn btn-round-sm btn-hover-red d-block border-1 text-uppercase js-add-wishlist ${
                          isAddedtoWishlist(petition.product.id) ? "active" : ""
                        } theme-hover-bg`}
                        onClick={() => toggleWishlist(petition.product.id)}
                        title="Add To Wishlist"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use href="#icon_heart" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="pc__info position-relative text-center">
                    <p className="pc__category">{petition.product.category}</p>
                    <h6 className="pc__title mb-2 fs-15 fw-semi-bold">
                      <a href={`/product/${petition.product.id}`} className="theme-color">
                        {petition.product.name}
                      </a>
                    </h6>
                    <div className="product-card__price d-flex align-items-center justify-content-center">
                      <span className="money price theme-color-secondary fw-bold font-heading">
                        ${petition.product.price}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="cursor-pointer products-carousel__prev position-absolute top-50 left-0 d-flex align-items-center justify-content-center rounded-circle border-1 bg-grey-eeeeee navigation-sm mt-0">
              <svg
                className="w-auto"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_prev_sm"></use>
              </svg>
            </div>
            <div className="cursor-pointer products-carousel__next position-absolute top-50 right-0 d-flex align-items-center justify-content-center rounded-circle border-1 bg-grey-eeeeee navigation-sm mt-0">
              <svg
                className="w-auto"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_next_sm"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
