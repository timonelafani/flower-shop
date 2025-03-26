import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts: Record<
  string,
  { title: string; content: string; image: string }
> = {
  "flower-care": {
    title: "Top 5 Flower Care Tips",
    content:
      "Learn how to keep your bouquets fresher for longer with these essential flower care techniques. From trimming stems to changing the water regularly, our guide walks you through the most effective practices for prolonging the life and beauty of your floral arrangements. Perfect for home florists and gift-givers alike.",
    image: "/flowers/flower1.jpg",
  },
  "flower-meanings": {
    title: "The Secret Meaning of Popular Flowers",
    content:
      "From roses to tulips, explore what each bloom symbolizes and how to choose the right one. Whether you're sending a bouquet to a friend, a loved one, or even as a corporate gesture, understanding flower meanings helps you make the perfect floral statement with intention and emotion.",
    image: "/flowers/flower7.jpg",
  },
  "seasonal-flowers": {
    title: "Seasonal Flower Guide",
    content:
      "A breakdown of what flowers are in season and how to style them beautifully year-round. This guide helps you embrace nature’s rhythm, with tips on arranging flowers based on seasonality and availability. Create harmonious displays that reflect the time of year and stay budget-friendly.",
    image: "/flowers/flower18.jpg",
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({ id }));
}

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.id];

  if (!post) return notFound();

  return (
    <section className="min-h-screen px-6 py-12 bg-white text-[#4a5a40]">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-[#4a5a40] hover:underline mb-4 inline-block"
        >
          ← Back to Blog
        </Link>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="mb-6">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="rounded shadow"
          />
        </div>
        <p className="text-lg leading-relaxed text-gray-700">{post.content}</p>
      </div>
    </section>
  );
}
