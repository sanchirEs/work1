"use client";
import { dashboardMenuItems, adminMenuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  // Change menu items based on the user's role
  const menuItems =
    session?.user?.role === "ADMIN"
      ? [...adminMenuItems]
      : dashboardMenuItems;

  return (
    <div className="col-lg-3">
      <ul className="account-nav">
        {menuItems.map((elm, i) => (
          <li key={i}>
            {elm.title === "Logout" ? (
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                className={`menu-link menu-link_us-s `}
              >
                Logout
              </button>
            ) : (
              <Link
                href={elm.href}
                className={`menu-link menu-link_us-s ${
                  pathname == elm.href ? "menu-link_active" : ""
                } `}
              >
                {elm.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
