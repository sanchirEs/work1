// app/add-product/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    minBatchQty: '',
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        alert('Product added successfully!');
        router.push('/product-list');
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while adding the product.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <Layout breadcrumbTitleParent="Ecommerce" breadcrumbTitle="Add product"> */}
      <form
        className="dashboard-tf-section-2 form-add-product"
        onSubmit={handleSubmit}
      >
        <div className="dashboard-wg-box">
          <fieldset className="dashboard-name">
            <div className="dashboard-body-title mb-10">
              Product name <span className="dashboard-tf-color-1">*</span>
            </div>
            <input
              className="dashboard-mb-10"
              type="text"
              placeholder="Enter product name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              tabIndex={0}
              aria-required="true"
              required
            />
            <div className="dashboard-text-tiny">
              Do not exceed 20 characters when entering the product name.
            </div>
          </fieldset>
          <fieldset className="dashboard-description">
            <div className="dashboard-body-title mb-10">
              Description <span className="dashboard-tf-color-1">*</span>
            </div>
            <textarea
              className="dashboard-mb-10"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              tabIndex={0}
              aria-required="true"
              required
            />
            <div className="dashboard-text-tiny">
              Do not exceed 100 characters when entering the product description.
            </div>
          </fieldset>
          <div className="dashboard-gap22 cols">
            <fieldset className="dashboard-name">
              <div className="dashboard-body-title mb-10">
                Price <span className="dashboard-tf-color-1">*</span>
              </div>
              <input
                className="dashboard-mb-10"
                type="number"
                placeholder="Enter price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                tabIndex={0}
                aria-required="true"
                required
                step="0.01"
              />
            </fieldset>
            <fieldset className="dashboard-name">
              <div className="dashboard-body-title mb-10">
                Min Batch Quantity <span className="dashboard-tf-color-1">*</span>
              </div>
              <input
                className="dashboard-mb-10"
                type="number"
                placeholder="Enter min batch quantity"
                name="minBatchQty"
                value={formData.minBatchQty}
                onChange={handleChange}
                tabIndex={0}
                aria-required="true"
                required
              />
            </fieldset>
          </div>
        </div>
        <div className="dashboard-wg-box">
          {/* You can implement the image upload functionality here */}
          <div className="dashboard-cols gap10">
            <button
              className="dashboard-tf-button w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Adding Product...' : 'Add product'}
            </button>
            <Link href="/product-list" className="dashboard-tf-button style-2 w-full">
              Cancel
            </Link>
          </div>
        </div>
      </form>
      {/* </Layout> */}
    </>
  );
}
