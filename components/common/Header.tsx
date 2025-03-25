"use client";

import Link from "next/link";
import { useAuth } from "@components/admin/AuthProvider";
import { User } from "lucide-react";
import { useCartStore } from "@lib/store/cart";
import { BRAND_NAME } from "@lib/constants";

export default function Header() {
  const { user } = useAuth();
  const { items } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm fixed top-0 left-0 w-full z-50 bg-white shadow">
      <Link href="/" className="text-2xl font-bold text-[#4a5a40]">
        {BRAND_NAME}
      </Link>
      <nav className="flex gap-6 items-center">
        <Link href="/shop" className="text-[#4a5a40] hover:underline">
          Shop
        </Link>
        <Link href="/about" className="text-[#4a5a40] hover:underline">
          About
        </Link>
        <Link href="/blog" className="text-[#4a5a40] hover:underline">
          Blog
        </Link>
        <Link href="/cart" className="text-[#4a5a40] hover:underline relative">
          🛒
          {total > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#4a5a40] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {total}
            </span>
          )}
        </Link>
        <Link
          href={user ? "/admin/products" : "/admin/login"}
          className="text-[#4a5a40] hover:text-[#2f3a28]"
          title={user ? "Admin Dashboard" : "Admin Login"}
        >
          <User className="w-5 h-5" />
        </Link>
      </nav>
    </header>
  );
}
