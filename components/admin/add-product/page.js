"use client";

import { useState } from "react";

export default function AddProduct() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    minBatchQty: 100, // Default value
    images: [], // Holds uploaded image paths
  });
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const uploadedImages = [];

    try {
      setUploading(true);
      for (const file of files) {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          throw new Error("Image upload failed");
        }

        const { url } = await res.json();
        uploadedImages.push(url);
      }

      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...uploadedImages],
      }));
    } catch (err) {
      alert(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productData.images.length) {
      alert("Please upload at least one image");
      return;
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }

      alert("Product added successfully!");
      // Reset form
      setProductData({
        name: "",
        description: "",
        price: "",
        minBatchQty: 100,
        images: [],
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <form
        className="dashboard-tf-section-2 dashboard-form-add-product"
        onSubmit={handleSubmit}
      >
        <div className="dashboard-wg-box">
          <fieldset className="dashboard-name">
            <div className="dashboard-body-title dashboard-mb-10">
              Product name <span className="dashboard-tf-color-1">*</span>
            </div>
            <input
              className="dashboard-mb-10"
              type="text"
              placeholder="Enter product name"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              required
            />
            <div className="dashboard-text-tiny">
              Do not exceed 20 characters when entering the product name.
            </div>
          </fieldset>
          <fieldset className="dashboard-description">
            <div className="dashboard-body-title dashboard-mb-10">
              Description <span className="dashboard-tf-color-1">*</span>
            </div>
            <textarea
              className="dashboard-mb-10"
              name="description"
              placeholder="Description"
              value={productData.description}
              onChange={handleInputChange}
              required
            />
            <div className="dashboard-text-tiny">
              Do not exceed 100 characters when entering the description.
            </div>
          </fieldset>
        </div>

        <div className="dashboard-wg-box">
          <fieldset className="dashboard-price">
            <div className="dashboard-body-title dashboard-mb-10">
              Price <span className="dashboard-tf-color-1">*</span>
            </div>
            <input
              className="dashboard-mb-10"
              type="number"
              placeholder="Enter product price"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <fieldset className="dashboard-minBatchQty">
            <div className="dashboard-body-title dashboard-mb-10">
              Minimum Batch Quantity{" "}
              <span className="dashboard-tf-color-1">*</span>
            </div>
            <input
              className="dashboard-mb-10"
              type="number"
              placeholder="Enter minimum batch quantity"
              name="minBatchQty"
              value={productData.minBatchQty}
              onChange={handleInputChange}
              required
            />
          </fieldset>
          <fieldset>
            <div className="dashboard-body-title dashboard-mb-10">
              Upload images
            </div>
            <div className="dashboard-upload-image dashboard-mb-16">
              <div className="dashboard-item">
                <label className="dashboard-uploadfile" htmlFor="myFile">
                  <span className="dashboard-icon">
                    <i className="dashboard-icon-upload-cloud" />
                  </span>
                  <span className="dashboard-text-tiny">
                    Drop your images here or select{" "}
                    <span className="dashboard-tf-color">click to browse</span>
                  </span>
                  <input
                    type="file"
                    id="myFile"
                    name="images"
                    onChange={handleImageUpload}
                    multiple
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <div className="dashboard-cols dashboard-gap10">
            <button
              className="dashboard-tf-button dashboard-w-full"
              type="submit"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Add product"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
