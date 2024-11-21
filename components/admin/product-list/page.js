// app/product-list/page.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    async function fetchProducts(page = 1, search = '', size = 10) {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/products?page=${page}&search=${encodeURIComponent(
            search
          )}&pageSize=${size}`
        );
        const data = await res.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setCurrentPage(data.currentPage);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts(currentPage, searchQuery, pageSize);
  }, [currentPage, searchQuery, pageSize]);

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <Layout breadcrumbTitleParent="Ecommerce" breadcrumbTitle="Product List"> */}
      <div className="dashboard-wg-box">
        <div className="dashboard-title-box">
          <i className="dashboard-icon-coffee" />
          <div className="dashboard-body-text">
            Tip search by Product ID: Each product is provided with a unique ID,
            which you can rely on to find the exact product you need.
          </div>
        </div>
        <div className="dashboard-flex items-center justify-between gap10 flex-wrap">
          <div className="dashboard-wg-filter flex-grow">
            <div className="dashboard-show">
              <div className="dashboard-text-tiny">Showing</div>
              <div className="dashboard-select">
                <select value={pageSize} onChange={handlePageSizeChange}>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div className="dashboard-text-tiny">entries</div>
            </div>
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
          <Link
            className="dashboard-tf-button style-1 w208"
            href="/add-product"
          >
            <i className="dashboard-icon-plus" />
            Add new
          </Link>
        </div>
        <div className="dashboard-wg-table table-product-list">
          <ul className="dashboard-table-title flex gap20 mb-14">
            <li>
              <div className="dashboard-body-title">Product</div>
            </li>
            <li>
              <div className="dashboard-body-title">Product ID</div>
            </li>
            <li>
              <div className="dashboard-body-title">Price</div>
            </li>
            <li>
              <div className="dashboard-body-title">Min Batch Qty</div>
            </li>
            <li>
              <div className="dashboard-body-title">Order Count</div>
            </li>
            <li>
              <div className="dashboard-body-title">Stock</div>
            </li>
            <li>
              <div className="dashboard-body-title">Action</div>
            </li>
          </ul>
          <ul className="dashboard-flex flex-column">
            {products.map((product) => (
              <li key={product.id} className="dashboard-product-item gap14">
                <div className="dashboard-image no-bg">
                  <img src="/images/products/41.png" alt="" />
                  {/* Replace with dynamic image if available */}
                </div>
                <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                  <div className="dashboard-name">
                    <Link
                      href={`/product/${product.id}`}
                      className="dashboard-body-title-2"
                    >
                      {product.name}
                    </Link>
                  </div>
                  <div className="dashboard-body-text">#{product.id}</div>
                  <div className="dashboard-body-text">
                    ${parseFloat(product.price).toFixed(2)}
                  </div>
                  <div className="dashboard-body-text">
                    {product.minBatchQty}
                  </div>
                  <div className="dashboard-body-text">
                    {product.orderCount}
                  </div>
                  <div>
                    <div
                      className={
                        product.inventory && product.inventory.quantity > 0
                          ? 'dashboard-block-available'
                          : 'dashboard-block-not-available'
                      }
                    >
                      {product.inventory && product.inventory.quantity > 0
                        ? 'In stock'
                        : 'Out of stock'}
                    </div>
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
