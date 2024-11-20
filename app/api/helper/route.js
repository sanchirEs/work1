import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    // Array of 20 sample products
    const products = [
      { name: "Eco-friendly Notebook", description: "Recyclable and sustainable notebook.", price: 9.99, minBatchQty: 50 },
      { name: "Organic Cotton T-shirt", description: "Soft, breathable, and eco-friendly.", price: 15.99, minBatchQty: 100 },
      { name: "Reusable Water Bottle", description: "BPA-free, keeps drinks cool.", price: 12.99, minBatchQty: 75 },
      { name: "Wireless Earbuds", description: "High-quality sound and wireless charging.", price: 49.99, minBatchQty: 80 },
      { name: "Adjustable Laptop Stand", description: "Ergonomic and portable.", price: 24.99, minBatchQty: 60 },
      { name: "Portable Solar Charger", description: "Eco-friendly power on the go.", price: 29.99, minBatchQty: 40 },
      { name: "Blue Light Glasses", description: "Protects eyes from screens.", price: 19.99, minBatchQty: 70 },
      { name: "Smart LED Light Bulb", description: "Color-changing and energy-efficient.", price: 15.99, minBatchQty: 55 },
      { name: "Indoor Herb Garden Kit", description: "Grow fresh herbs at home.", price: 22.99, minBatchQty: 65 },
      { name: "Memory Foam Pillow", description: "For restful and comfortable sleep.", price: 25.99, minBatchQty: 90 },
      { name: "Eco Bamboo Toothbrush", description: "Sustainable alternative to plastic.", price: 4.99, minBatchQty: 150 },
      { name: "Compact Power Bank", description: "Portable and fast-charging.", price: 19.99, minBatchQty: 85 },
      { name: "Organic Tea Sampler", description: "Assortment of natural teas.", price: 12.99, minBatchQty: 100 },
      { name: "Eco-Friendly Yoga Mat", description: "Non-toxic and durable.", price: 29.99, minBatchQty: 50 },
      { name: "Portable Blender", description: "Blend smoothies on the go.", price: 39.99, minBatchQty: 45 },
      { name: "Pet Hair Remover Roller", description: "Reusable and effective for pet owners.", price: 14.99, minBatchQty: 70 },
      { name: "Ergonomic Office Chair", description: "Adjustable and comfortable for long hours.", price: 129.99, minBatchQty: 25 },
      { name: "Electric Milk Frother", description: "Create creamy froth at home.", price: 9.99, minBatchQty: 60 },
      { name: "Stainless Steel Travel Mug", description: "Keeps beverages hot or cold.", price: 18.99, minBatchQty: 85 },
      { name: "LED Ring Light", description: "Perfect for video calls and selfies.", price: 16.99, minBatchQty: 90 }
    ];

    // Insert each product into the database
    for (const productData of products) {
      await prisma.product.create({
        data: productData,
      });
    }

    return new Response(JSON.stringify({ message: "Products populated successfully!" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error populating products:", error);
    return new Response(JSON.stringify({ error: "Failed to populate products." }), {
      status: 500,
    });
  }
}
