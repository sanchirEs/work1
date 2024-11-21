import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  additionalShopPageitems,
  homePages,
  shopDetails,
  shopList,
} from "@/data/menu";

export default function Nav() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isMenuActive = (menuHref) => {
    return menuHref.split("/")[1] === pathname.split("/")[1];
  };

  const isActiveParentMenu = (menus) => {
    return menus.some((menu) => isMenuActive(menu.href));
  };

  // If the DOM manipulation in useEffect isn't necessary, consider removing it
  useEffect(() => {
    function setBoxMenuPosition(menu) {
      const scrollBarWidth = 17; // Adjust if necessary
      const limitR = window.innerWidth - menu.offsetWidth - scrollBarWidth;
      const limitL = 0;
      const menuPaddingLeft = parseInt(
        window.getComputedStyle(menu, null).getPropertyValue("padding-left")
      );
      const parentPaddingLeft = parseInt(
        window
          .getComputedStyle(menu.previousElementSibling, null)
          .getPropertyValue("padding-left")
      );
      const centerPos =
        menu.previousElementSibling.offsetLeft -
        menuPaddingLeft +
        parentPaddingLeft;

      let menuPos = centerPos;
      if (centerPos < limitL) {
        menuPos = limitL;
      } else if (centerPos > limitR) {
        menuPos = limitR;
      }

      menu.style.left = `${menuPos}px`;
    }
    document.querySelectorAll(".box-menu").forEach((el) => {
      setBoxMenuPosition(el);
    });
  }, []);

  const isAdmin = session?.user?.role === "ADMIN";

  const adminMenuItems = [
    { id: 1, href: "/admin/order_management", title: "Order Management" },
    { id: 2, href: "/admin/user_management", title: "User Management" },
    { id: 3, href: "/admin/product_management", title: "Product Management" },
    { id: 4, href: "/account_edit", title: "Account Details" },
  ];

  const regularMenuItems = [
    {
      id: 1,
      href: "/",
      title: "Home",
      isActive: () => isActiveParentMenu(homePages),
    },
    {
      id: 2,
      href: "#",
      title: "Shop",
      isActive: () =>
        isActiveParentMenu(shopList) ||
        isActiveParentMenu(shopDetails) ||
        isActiveParentMenu(additionalShopPageitems),
      hasSubmenu: true,
    },
    {
      id: 3,
      href: "/about",
      title: "About",
      isActive: () => pathname === "/about",
    },
    {
      id: 4,
      href: "/contact",
      title: "Contact",
      isActive: () => pathname === "/contact",
    },
  ];

  const renderMenuItems = (items) => {
    return items.map((item) => (
      <li className="navigation__item" key={item.id}>
        <Link
          href={item.href}
          className={`navigation__link ${
            item.isActive && item.isActive() ? "menu-active" : ""
          }`}
        >
          {item.title}
        </Link>
        {/* Render submenu if necessary */}
        {item.hasSubmenu && (
          <ul className="submenu">
            {/* Render submenu items here */}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <>
      {isAdmin ? (
        <>
          {renderMenuItems(adminMenuItems)}
          <li className="navigation__item">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              className="navigation__link"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          {renderMenuItems(regularMenuItems)}
          {session && (
            <li className="navigation__item">
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                className="navigation__link"
              >
                Logout
              </button>
            </li>
          )}
        </>
      )}
    </>
  );
}
