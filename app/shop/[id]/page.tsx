"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import { useCartStore } from "@lib/store/cart";
import ToastProductCard from "@components/common/ToastProductCard";
import { Product } from "@lib/types";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [toastProduct, setToastProduct] = useState<Product | null>(null);
  const { addToCart } = useCartStore();

  useEffect(() => {
    async function fetchProduct() {
      if (!id || typeof id !== "string") return;
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProduct({ id: snap.id, ...snap.data() } as Product);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!product) return <p className="p-6 text-red-500">Product not found.</p>;

  return (
    <section className="min-h-screen px-6 py-12 max-w-5xl mx-auto text-[#4a5a40]">
      <Link
        href="/shop"
        className="text-sm text-[#4a5a40] hover:underline mb-6 inline-block"
      >
        ← Back to shop
      </Link>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="relative w-full md:w-1/2 h-64 md:h-80">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg mb-2 font-medium">${product.price}</p>
          {product.description && (
            <p className="text-base text-gray-700 mb-4">
              {product.description}
            </p>
          )}
          <button
            onClick={() => {
              addToCart(product);
              setToastProduct(product);
            }}
            className="bg-[#4a5a40] text-white px-6 py-2 rounded hover:bg-[#3a4a30]"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {toastProduct && <ToastProductCard product={toastProduct} />}
    </section>
  );
}
