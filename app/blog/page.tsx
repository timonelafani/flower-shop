"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: "flower-care",
    title: "Top 5 Flower Care Tips",
    summary:
      "Learn how to keep your bouquets fresher for longer with these essential flower care techniques.",
    image: "/flowers/flower1.jpg",
  },
  {
    id: "flower-meanings",
    title: "The Secret Meaning of Popular Flowers",
    summary:
      "From roses to tulips, explore what each bloom symbolizes and how to choose the right one.",
    image: "/flowers/flower7.jpg",
  },
  {
    id: "seasonal-flowers",
    title: "Seasonal Flower Guide",
    summary:
      "A breakdown of what flowers are in season and how to style them beautifully year-round.",
    image: "/flowers/flower18.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen px-6 py-12 bg-white text-[#4a5a40]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Botanical Tips & Stories
        </h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="rounded object-cover w-full h-auto max-h-60"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-[#4a5a40] font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
