"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@lib/types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/shop/${product.id}`} className="block group">
      <div className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[#4a5a40]">
        {product.name}
      </h3>
      <p className="text-[#5f6b50]">{product.price}</p>
    </Link>
  );
}
