"use client";

import { useCartStore } from "@lib/store/cart";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, clearCart, addToCart, decreaseQuantity } = useCartStore();

  const total = items.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-3xl font-bold text-[#4a5a40] mb-4">
          Your Cart is Empty
        </h1>
        <Link
          href="/shop"
          className="text-[#4a5a40] underline hover:no-underline"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4a5a40] mb-8">Your Cart</h1>
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border-b pb-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded shadow"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[#4a5a40]">
                  {item.name}
                </h2>
                <p className="text-[#5f6b50]">
                  {item.price} × {item.quantity}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 bg-[#cdd5c1] text-[#4a5a40] rounded hover:bg-[#bfcbb2]"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-[#e5bcbc] text-red-700 rounded hover:bg-[#dbabab]"
                  >
                    −
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-xl font-bold text-[#4a5a40]">
            Total: €{total.toFixed(2)}
          </p>
          <button
            onClick={clearCart}
            className="bg-[#4a5a40] text-white px-6 py-2 rounded hover:bg-[#3a4a30]"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}
