"use client";

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "@lib/firebase/products";
import Link from "next/link";
import { Product } from "@lib/types";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#4a5a40]">Manage Products</h1>
        <Link
          href="/admin/products/new"
          className="bg-[#4a5a40] text-white px-4 py-2 rounded hover:bg-[#3a4a30]"
        >
          + Add New
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded shadow-sm overflow-hidden bg-white flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#4a5a40] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">${product.price}</p>
              </div>
              <div className="flex justify-end gap-4">
                <Link
                  href={`/admin/products/edit/${product.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
