"use client";

import { useEffect } from "react";
import ProductCard from "@sections/ProductCard";
import useLazyLoadProducts from "@lib/hooks/useLazyLoadProducts";

export default function ShopPage() {
  const { products, loading, hasMore, observerRef, clearProducts } =
    useLazyLoadProducts();

  useEffect(() => {
    return () => {
      clearProducts(); // clear when component unmounts
    };
  }, [clearProducts]);

  return (
    <section className="min-h-screen px-6 py-12 bg-white text-[#4a5a40]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Bouquets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Loader sentinel */}
        {hasMore && (
          <div
            ref={observerRef}
            className="h-12 flex items-center justify-center"
          >
            <span className="text-sm text-gray-500">Loading more...</span>
          </div>
        )}

        {!loading && !hasMore && (
          <p className="text-center text-sm text-gray-400 mt-6">
            You&apos;ve reached the end 🌸
          </p>
        )}
      </div>
    </section>
  );
}
