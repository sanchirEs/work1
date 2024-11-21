import React from "react";
import Link from "next/link";
import OrderList from "../admin/order-list/page";

export default function Dashboard() {
  return (
    <div className="col-lg-12">
      {/* <div className="page-content my-account__dashboard"> */}
        <OrderList />
      </div>
    // </div>
  );
}
