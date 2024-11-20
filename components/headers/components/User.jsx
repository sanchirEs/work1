"use client";

import { openModalUserlogin } from "@/utlis/aside";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function User() {
  const { data: session } = useSession(); // Get session data
  const router = useRouter();

  const handleClick = () => {
    if (session) {
      // If the user is logged in, redirect to /account
      router.push("/account_edit");
    } else {
      // If the user is not logged in, open the login modal
      openModalUserlogin();
    }
  };

  return (
    <svg
      onClick={handleClick}
      className="d-block"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href="#icon_user" />
    </svg>
  );
}
