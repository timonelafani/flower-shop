"use client";

import Link from "next/link";
import { useAuth } from "@components/admin/AuthProvider";
import { ShieldCheck } from "lucide-react";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm">
      <Link href="/" className="text-2xl font-bold text-[#4a5a40]">
        Botanica Bazaar
      </Link>
      <nav className="flex gap-6 items-center">
        <Link href="/shop" className="text-[#4a5a40] hover:underline">
          Shop
        </Link>
        <Link href="/about" className="text-[#4a5a40] hover:underline">
          About
        </Link>
        <Link href="/cart" className="text-[#4a5a40] hover:underline">
          🛒
        </Link>
        <Link
          href={user ? "/admin/products" : "/admin/login"}
          className="text-[#4a5a40] hover:text-[#2f3a28]"
          title={user ? "Admin Dashboard" : "Admin Login"}
        >
          <ShieldCheck className="w-5 h-5" />
        </Link>
      </nav>
    </header>
  );
}
