"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@lib/types";

interface ToastProductCardProps {
  product: Product;
}

export default function ToastProductCard({ product }: ToastProductCardProps) {
  return (
    <div className="fixed bottom-6 right-6 bg-white border border-[#4a5a40] shadow-lg px-6 py-4 rounded-lg z-50 flex items-center gap-4 animate-fade-in">
      <Image
        src={product.image}
        alt={product.name}
        width={50}
        height={50}
        className="rounded shadow"
      />
      <div className="text-[#4a5a40]">
        <p className="font-semibold">{product.name}</p>
        <p className="text-sm">added to cart</p>
      </div>
      <Link
        href="/cart"
        className="ml-auto text-sm underline text-[#4a5a40] hover:text-[#2f382a]"
      >
        View Cart
      </Link>
    </div>
  );
}
