"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@lib/firebase/products";
import Link from "next/link";
import AdminHeader from "@components/admin/AdminHeader";
import AdminOnly from "@components/admin/AdminOnly";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <AdminOnly>
      <AdminHeader />
      <section className="min-h-screen p-8 bg-white text-[#4a5a40]">
        <div className="max-w-5xl mx-auto">
          <header className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-bold">Product Management</h1>
            <Link
              href="/admin/products/new"
              className="bg-[#4a5a40] text-white px-4 py-2 rounded hover:bg-[#3a4a30]"
            >
              + Add Product
            </Link>
          </header>

          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <li key={product.id} className="border rounded p-4 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                  <h2 className="font-semibold text-lg">{product.name}</h2>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </AdminOnly>
  );
}
