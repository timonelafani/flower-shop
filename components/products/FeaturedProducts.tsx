"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getProducts } from "@lib/firebase/products";
import ProductCard from "@components/sections/ProductCard";
import { Product } from "@lib/types";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchFeatured() {
      const all = await getProducts();
      const topThree = all.slice(0, 3);
      setProducts(topThree);
    }
    fetchFeatured();
  }, []);

  if (!products.length) return null;

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto text-[#4a5a40]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Featured Bouquets</h2>
        <Link href="/shop" className="text-sm underline hover:text-[#3a4a30]">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
