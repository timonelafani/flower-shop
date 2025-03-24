"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Product } from "@lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="border rounded shadow-sm hover:shadow-md transition overflow-hidden relative">
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative w-full h-48">
          <Image
            src={imgError ? "/images/placeholder.jpg" : product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setImgError(true)}
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">${product.price}</p>
      </div>
    </div>
  );
}
