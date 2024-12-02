import ProductList from "@/components/admin/product-list/page";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import HeaderAdmin from "@/components/headers/HeaderAdmin";
import Dashboard from "@/components/otherPages/Dashboard";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import React from "react";

export const metadata = {
  title: "Dashboard-account || Uomo eCommerce React Nextjs Template",
  description: "Uomo eCommerce React Nextjs Template",
};
export default function AccountPage() {
  return (
    <>
      <HeaderAdmin />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="my-account container"><ProductList />
          {/* <h2 className="page-title">My Account</h2> */}
          <div className="row">
            {/* <DashboardSidebar /> */}
            {/* <Dashboard /> */}
            
          </div>
        </section>
        
      </main>
      
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
