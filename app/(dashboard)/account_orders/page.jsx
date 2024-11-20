import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Header20 from "@/components/headers/Header20";
import AccountOrders from "@/components/otherPages/AccountOrders";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import React from "react";

export const metadata = {
  title: "Dashboard Account Orders || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function AccountOrderPage() {
  return (
    <>
      <Header1 />
      {/* <Header20 /> */}
      <main className="page-wrapper">
        <div className="mb-2 pb-2"></div>
        <section className="my-account container">
          {/* <h2 className="page-title">Orders</h2> */}
          <div className="row">
            <DashboardSidebar />
            <AccountOrders />
          </div>
        </section>
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
