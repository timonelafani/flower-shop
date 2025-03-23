"use client";

import { products } from "@data/products";
import ProductCard from "@sections/ProductCard";
import { useLazyLoad } from "@lib/hooks/useLazyLoadProducts";
import Loader from "@components/common/Loader";
import { useEffect, useState, useRef } from "react";

export default function ShopPage() {
  const { visibleItems, hasMore, loadMoreRef } = useLazyLoad(products, 6);
  const [isLoading, setIsLoading] = useState(false);
  const prevLengthRef = useRef(visibleItems.length);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (visibleItems.length > prevLengthRef.current) {
      setIsLoading(false);
      prevLengthRef.current = visibleItems.length;
    }
  }, [visibleItems.length]);

  useEffect(() => {
    const currentEl = loadMoreRef.current;
    if (!currentEl || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        if (isVisible && hasMore) {
          setIsLoading(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(currentEl);

    return () => {
      observer.unobserve(currentEl);
    };
  }, [hasMore, visibleItems.length, loadMoreRef]);

  const filteredItems = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, visibleItems.length);

  return (
    <section className="min-h-screen px-6 py-20 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#4a5a40] mb-8">All Bouquets</h1>

        <input
          type="text"
          placeholder="Search bouquets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-8 w-full max-w-md px-4 py-2 border border-[#cdd5c1] rounded focus:outline-none focus:ring-2 focus:ring-[#4a5a40]"
        />

        <div className="relative">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {isLoading && <Loader />}
        </div>
        <div ref={loadMoreRef} className="h-12 mt-12" />
      </div>
    </section>
  );
}
