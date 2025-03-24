"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@lib/types";

interface ToastProps {
  product: Product;
}

export default function ToastProductCard({ product }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white border rounded-lg shadow-lg flex items-center gap-4 p-4 w-72 animate-slide-in">
      <div className="relative w-16 h-16">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <div>
        <p className="text-sm text-[#4a5a40] font-semibold">Added to cart:</p>
        <p className="text-sm">{product.name}</p>
      </div>
    </div>
  );
}
