"use client";

import Link from "next/link";

import AdminOnly from "@components/admin/AdminOnly";
import AdminHeader from "@components/admin/AdminHeader";

export default function AdminProductsPage() {
  return (
    <>
      <AdminHeader />
      <AdminOnly>
        <section className="min-h-screen p-8 bg-white text-[#4a5a40]">
          <div className="max-w-5xl mx-auto">
            <header className="flex justify-between items-center mb-10">
              <h1 className="text-3xl font-bold">Product Management</h1>
              <Link
                href="/admin/products/new"
                className="bg-[#4a5a40] text-white px-4 py-2 rounded hover:bg-[#3a4a30]"
              >
                + Add Product
              </Link>
            </header>

            <div className="border rounded-lg p-4 shadow-sm bg-gray-50 text-center">
              <p className="text-gray-500">
                No products loaded yet. Coming soon...
              </p>
            </div>
          </div>
        </section>
      </AdminOnly>
    </>
  );
}
