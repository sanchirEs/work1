"use client";
import { allProducts } from "@/data/products";
import React, { useEffect, useState, useContext } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(allProducts[0]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart and wishlist data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const cartResponse = await fetch("/api/cart");
      const wishlistResponse = await fetch("/api/wishlist");

      if (cartResponse.ok) {
        const cartData = await cartResponse.json();
        setCartProducts(cartData);
      }

      if (wishlistResponse.ok) {
        const wishlistData = await wishlistResponse.json();
        setWishList(wishlistData);
      }
    };

    fetchData();
  }, []);

  // Update total price whenever cart changes
  useEffect(() => {
    const subtotal = cartProducts.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  // Add product to cart
  const addProductToCart = async (id) => {
    const product = allProducts.find((item) => item.id === id);

    if (!cartProducts.find((item) => item.id === id) && product) {
      const updatedProduct = { productId: product.id, quantity: 1 };
      setCartProducts((prev) => [...prev, updatedProduct]);
  
      // Save to the backend
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      // Show the cart drawer UI
      document
        .getElementById("cartDrawerOverlay")
        .classList.add("page-overlay_visible");
      document.getElementById("cartDrawer").classList.add("aside_visible");
    }
  };

  const isAddedToCartProducts = (id) => cartProducts.some((item) => item.id === id);

  // Toggle wishlist items
  const toggleWishlist = async (id) => {
    if (wishList.includes(id)) {
      setWishList((prev) => prev.filter((item) => item !== id));

      // Remove from the backend
      await fetch(`/api/wishlist/${id}`, { method: "DELETE" });
    } else {
      setWishList((prev) => [...prev, id]);

      // Add to the backend
      await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    }
  };

  const isAddedtoWishlist = (id) => wishList.includes(id);

  const contextElement = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    toggleWishlist,
    isAddedtoWishlist, // Renamed here
    quickViewItem,
    wishList,
    setQuickViewItem,
  };

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
