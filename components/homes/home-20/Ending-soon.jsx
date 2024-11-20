"use client";

import { useContextElement } from "@/context/Context";
import { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function EndingSoonCollection() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();

  const [endingSoonProducts, setEndingSoonProducts] = useState([]);

  useEffect(() => {
    // Fetch products that are ending soon
    const fetchEndingSoonProducts = async () => {
      try {
        const response = await fetch("/api/ending-soon");
        if (response.ok) {
          const data = await response.json();
          setEndingSoonProducts(data);
        }
      } catch (error) {
        console.error("Failed to fetch ending soon products:", error);
      }
    };

    fetchEndingSoonProducts();
  }, []);

  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    modules: [Autoplay, Navigation],
    slidesPerView: 4,
    slidesPerGroup: 1,
    pagination: false,
    navigation: {
      nextEl: "#product_carousel_ending_soon .products-carousel__next",
      prevEl: "#product_carousel_ending_soon .products-carousel__prev",
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

  return (
    <section className="product-carousel container">
      <div className="d-flex align-items-center justify-content-md-between flex-wrap mb-3 pb-xl-2 mb-xl-4">
        <h2 className="h3 fw-bold theme-color text-uppercase">
          Ending Soon
        </h2>

        <Link
          className="btn-link btn-link_md default-underline text-uppercase fw-semi-bold theme-color-secondary"
          href="/shop-1"
        >
          See All Products
        </Link>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-12 col-lg-12 col-xl-12">
          <div id="product_carousel_ending_soon" className="position-relative">
            <Swiper
              {...swiperOptions}
              className="swiper-container js-swiper-slider"
            >
              {endingSoonProducts.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide product-card">
                  <div className="pc__img-wrapper">
                    <Link href={`/product1_simple/${elm.product.id}`}>
                      <Image
                        loading="lazy"
                        // src={petition.product.imageUrl} // Replace with actual image field from API
                        src={"/assets/images/home/demo21/product-10.jpg"} // Replace with actual image field from API
                        width="255"
                        height="270"
                        alt="image"
                        className="pc__img"
                      />
                    </Link>
                    <button
                      className="pc__atc btn btn-lg anim_appear-bottom btn btn-50 theme-bg-color-secondary text-white position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside d-flex align-items-center justify-content-center gap-2 lh-1 border-circle"
                      onClick={() => addProductToCart(elm.product.id)}
                      title={
                        isAddedToCartProducts(elm.product.id)
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
                            isAddedToCartProducts(elm.product.id)
                              ? "#icon_cart_added"
                              : "#icon_cart"
                          }`}
                        ></use>
                      </svg>
                      <span className="d-block pt-1">
                        {isAddedToCartProducts(elm.product.id)
                          ? "Already Added"
                          : "Add To Cart"}
                      </span>
                    </button>
                    <div className="anim_appear-right position-absolute top-0 mt-2 me-2">
                      <button
                        className="btn btn-round-sm btn-hover-red d-block border-1 text-uppercase mb-2 js-quick-view theme-hover-bg"
                        data-bs-toggle="modal"
                        data-bs-target="#quickView"
                        onClick={() => setQuickViewItem(elm.product)}
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
                          isAddedtoWishlist(elm.product.id) ? "active" : ""
                        } theme-hover-bg`}
                        onClick={() => toggleWishlist(elm.product.id)}
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
                    <p className="pc__category">{elm.product.category}</p>
                    <h6 className="pc__title mb-2 fs-15 fw-semi-bold">
                      <a
                        href={`/product1_simple/${elm.product.id}`}
                        className="theme-color"
                      >
                        {elm.product.name}
                      </a>
                    </h6>
                    <div className="product-card__price d-flex align-items-center justify-content-center">
                      <span className="money price theme-color-secondary fw-bold font-heading">
                        ${elm.product.price}
                      </span>
                    </div>
                    <div className="product-card__price d-flex align-items-center justify-content-center">
                      <span className="money price theme-color-secondary fw-bold font-heading">
                        {elm.endDate}
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
