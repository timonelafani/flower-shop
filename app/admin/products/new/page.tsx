"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { addProduct } from "@lib/firebase/products";
import AdminOnly from "@components/admin/AdminOnly";
import AdminHeader from "@components/admin/AdminHeader";
import Link from "next/link";

export default function NewProductPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(
    "This bouquet is perfect for celebrations, gifts, or simply brightening up your day. Lovingly arranged and delivered fresh."
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addProduct({ name, price, image, description });
      router.push("/admin/products");
    } catch (err) {
      console.error("Failed to add product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AdminHeader />
      <AdminOnly>
        <section className="min-h-screen p-8 bg-white text-[#4a5a40]">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Price</label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Image URL</label>
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  required
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
              </div>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border p-2 rounded h-32"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#4a5a40] text-white px-6 py-2 rounded hover:bg-[#3a4a30]"
              >
                {loading ? "Adding..." : "Add Product"}
              </button>
            </form>
          </div>
        </section>
      </AdminOnly>
    </>
  );
}
