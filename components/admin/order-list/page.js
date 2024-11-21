import Link from "next/link";
export default function OrderList() {
  return (
    <>
      {/* <Layout breadcrumbTitleParent="Order" breadcrumbTitle="Order List"> */}
      <div className="dashboard-wg-box">
        <div className="dashboard-flex items-center justify-between gap10 flex-wrap">
          <div className="dashboard-wg-filter flex-grow">
            <form className="dashboard-form-search">
              <fieldset className="dashboard-name">
                <input
                  type="text"
                  placeholder="Search here..."
                  name="name"
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
          <Link className="dashboard-tf-button style-1 w208" href="/oder-detail">
            <i className="dashboard-icon-file-text" />
            Export all orderss
          </Link>
        </div>
        <div className="dashboard-wg-table table-all-category">
          <ul className="dashboard-table-title flex gap20 mb-14">
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                 <img src="/images/products/51.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-available">Success</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/52.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-pending">Pending</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/53.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-available">Success</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/54.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-available">Success</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/55.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-not-available">Cancel</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/56.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-not-available">Cancel</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/57.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-available">Success</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/58.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-available">Success</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/59.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-available">Success</div>
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
            <li className="dashboard-product-item gap14">
              <div className="dashboard-image no-bg">
                // <img src="/images/products/60.png" alt="" />
              </div>
              <div className="dashboard-flex items-center justify-between gap20 flex-grow">
                <div className="dashboard-name">
                  <Link href="/product-list" className="dashboard-body-title-2">
                    Kristin Watson
                  </Link>
                </div>
                <div className="dashboard-body-text">#7712309</div>
                <div className="dashboard-body-text">$1,452.500</div>
                <div className="dashboard-body-text">1,638</div>
                <div className="dashboard-body-text">20</div>
                <div>
                  <div className="dashboard-block-available">Success</div>
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
          </ul>
        </div>
        <div className="dashboard-divider" />
        <div className="dashboard-flex items-center justify-between flex-wrap gap10">
          <div className="dashboard-text-tiny">Showing 10 entries</div>
          <ul className="dashboard-wg-pagination">
            <li>
              <Link href="#">
                <i className="dashboard-icon-chevron-left" />
              </Link>
            </li>
            <li>
              <Link href="#">1</Link>
            </li>
            <li className="dashboard-active">
              <Link href="#">2</Link>
            </li>
            <li>
              <Link href="#">3</Link>
            </li>
            <li>
              <Link href="#">
                <i className="dashboard-icon-chevron-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* </Layout> */}
    </>
  );
}
