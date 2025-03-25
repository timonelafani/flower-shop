"use client";

import Link from "next/link";
import { useAuth } from "./AuthProvider";

export default function AdminHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#f4f4f4] border-b mt-20">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/products"
          className="text-lg font-semibold text-[#4a5a40] hover:underline"
        >
          Admin Dashboard
        </Link>
        <span className="text-sm text-gray-600">{user?.email}</span>
      </div>
      <button
        onClick={logout}
        className="text-sm text-[#4a5a40] hover:underline"
      >
        Logout
      </button>
    </header>
  );
}
