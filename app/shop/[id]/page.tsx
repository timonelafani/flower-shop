"use client";

import { useParams } from "next/navigation";
import { products } from "@data/products";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@lib/store/cart";
import { useState, useEffect } from "react";
import ToastProductCard from "@components/common/ToastProductCard";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = Number(params?.id);
  const product = products.find((p) => p.id === id);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-600">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/shop"
          className="text-sm text-[#4a5a40] hover:underline mb-6 inline-block"
        >
          ← Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded shadow"
          />
          <div>
            <h1 className="text-4xl font-bold text-[#4a5a40] mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-[#5f6b50] mb-4">{product.price}</p>
            <p className="text-[#6a7752] mb-6">
              This bouquet is perfect for celebrations, gifts, or simply
              brightening up your day. Lovingly arranged and delivered fresh.
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-[#6a7752] text-white px-6 py-3 rounded hover:bg-[#586845] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {showToast && <ToastProductCard product={product} />}
      </div>
    </section>
  );
}
