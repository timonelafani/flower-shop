import Link from "next/link";

import ProductCard from "@sections/ProductCard";
import { products } from "@data/products";

export default function FeaturedProducts() {
  const featured = products.slice(0, 3);

  return (
    <section id="shop" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#4a5a40] mb-4">
          Featured Bouquets
        </h2>
        <p className="text-[#5f6b50] mb-12">
          Lovingly arranged, freshly picked.
        </p>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {featured.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        <Link href="/shop">
          <span className="inline-block bg-[#6a7752] text-white px-6 py-2 rounded-full shadow hover:bg-[#586845] transition-all">
            View All Bouquets
          </span>
        </Link>
      </div>
    </section>
  );
}
