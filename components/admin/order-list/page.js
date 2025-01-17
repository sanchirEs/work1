// app/order-list/page.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchOrders(page = 1, search = '') {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/orders?page=${page}&search=${encodeURIComponent(search)}`
        );
        const data = await res.json();
        setOrders(data.orders);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <Layout breadcrumbTitleParent="Order" breadcrumbTitle="Order List"> */}
      <div className="dashboard-wg-box">
        <div className="dashboard-flex items-center justify-between gap10 flex-wrap">
          <div className="dashboard-wg-filter flex-grow">
            <form
              className="dashboard-form-search"
              onSubmit={(e) => {
                e.preventDefault();
                setCurrentPage(1);
              }}
            >
              <fieldset className="dashboard-name">
                <input
                  type="text"
                  placeholder="Search here..."
                  name="name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  tabIndex={2}
                  aria-required="true"
                  required
                />
              </fieldset>
              <div className="dashboard-button-submit">
                <button type="submit">
                  <i className="dashboard-icon-search" />
                </button>
              </div>
            </form>
          </div>
          <Link className="dashboard-tf-button style-1 w208" href="/order-detail">
            <i className="dashboard-icon-file-text" />
            Export all orders
          </Link>
        </div>
        <div className="dashboard-wg-table table-all-category">
          <ul className="dashboard-table-title flex gap20 mb-14">
            {/* Table Headers */}
            <li>
              <div className="dashboard-body-title">Product</div>
            </li>
            <li>
              <div className="dashboard-body-title">Order ID</div>
            </li>
            <li>
              <div className="dashboard-body-title">Price</div>
            </li>
            <li>
              <div className="dashboard-body-title">Quantity</div>
            </li>
            <li>
              <div className="dashboard-body-title">Payment</div>
            </li>
            <li>
              <div className="dashboard-body-title">Status</div>
            </li>
            <li>
              <div className="dashboard-body-title">Tracking</div>
            </li>
            <li>
              <div className="dashboard-body-title">Action</div>
            </li>
          </ul>
          <ul className="dashboard-flex flex-column">
            {orders.map((order) => (
              <li key={order.id} className="dashboard-product-item gap14">
                <div className="dashboard-image no-bg">
                  <img src="/images/products/51.png" alt="" />
                  {/* Replace with dynamic image if available */}
                </div>
                <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                  <div className="dashboard-name">
                    <Link
                      href={`/product/${order.product.id}`}
                      className="dashboard-body-title-2"
                    >
                      {order.product.name}
                    </Link>
                  </div>
                  <div className="dashboard-body-text">#{order.id}</div>
                  <div className="dashboard-body-text">
                    ${order.product.price.toFixed(2)}
                  </div>
                  <div className="dashboard-body-text">{order.quantity}</div>
                  <div className="dashboard-body-text">
                    {order.payment
                      ? `$${order.payment.amount.toFixed(2)}`
                      : 'N/A'}
                  </div>
                  <div>
                    <div
                      className={`dashboard-block-${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </div>
                  </div>
                  <div>
                    <div className="dashboard-block-tracking">Tracking</div>
                  </div>
                  <div className="dashboard-list-icon-function">
                    <div className="dashboard-item eye">
                      <i className="dashboard-icon-eye" />
                    </div>
                    <div className="dashboard-item edit">
                      <i className="dashboard-icon-edit-3" />
                    </div>
                    <div className="dashboard-item trash">
                      <i className="dashboard-icon-trash-2" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-divider" />
        <div className="dashboard-flex items-center justify-between flex-wrap gap10">
          <div className="dashboard-text-tiny">
            Showing page {currentPage} of {totalPages}
          </div>
          <ul className="dashboard-wg-pagination">
            <li>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <i className="dashboard-icon-chevron-left" />
              </button>
            </li>
            {/* You can render page numbers here if needed */}
            <li>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < totalPages ? prev + 1 : prev
                  )
                }
                disabled={currentPage === totalPages}
              >
                <i className="dashboard-icon-chevron-right" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
}
