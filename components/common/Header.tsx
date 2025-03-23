"use client";

import Link from "next/link";
import { useCartStore } from "@lib/store/cart";

export default function Header() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full px-6 py-4 shadow bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#4a5a40]">
          Botanica Bazaar
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/shop" className="text-[#4a5a40] hover:underline">
            Shop
          </Link>
          <Link href="/cart" className="relative text-[#4a5a40]">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#4a5a40] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
