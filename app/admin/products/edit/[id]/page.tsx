"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getProduct, updateProduct } from "@lib/firebase/products";
import Link from "next/link";
import AdminHeader from "@components/admin/AdminHeader";
import AdminOnly from "@components/admin/AdminOnly";

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id || typeof id !== "string") return;
      const data = await getProduct(id);
      if (data) {
        setName(data.name);
        setPrice(data.price);
        setImage(data.image);
        setDescription(data.description || "");
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || typeof id !== "string") return;
    await updateProduct(id, { name, price, image, description });
    router.push("/admin/products");
  };

  return (
    <>
      <AdminHeader />
      <AdminOnly>
        <div className="max-w-2xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-[#4a5a40] mb-6">
            Edit Product
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
            <div className="mt-3">
              NOTE: You can get your pictures from
              <Link
                href="https://www.pexels.com/search/flower%20bouquet/?orientation=landscape"
                target="_blank"
                className="text-[#4a5a40] font-medium hover:underline ml-2"
              >
                Pexels →
              </Link>
            </div>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded h-32"
            />
            <button
              type="submit"
              className="bg-[#4a5a40] text-white px-6 py-2 rounded hover:bg-[#3a4a30]"
            >
              Update Product
            </button>
          </form>
        </div>
      </AdminOnly>
    </>
  );
}
