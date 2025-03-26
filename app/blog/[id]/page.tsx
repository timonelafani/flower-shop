import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts = {
  "flower-care": {
    title: "Top 5 Flower Care Tips",
    content:
      "To ensure your flowers last as long as possible, begin by trimming the stems at an angle under running water. This technique helps prevent air from entering the stem and allows for better water intake. Change the water in the vase every day and clean the vase thoroughly to eliminate bacterial buildup. Always remove wilted petals and leaves, especially those that fall below the waterline. Use flower food, often included with bouquets, to nourish the blooms. Keep the arrangement away from direct sunlight, heating vents, and fruit, as these can shorten the flowers' lifespan. Caring for flowers can become a relaxing routine that brings joy to your home environment and helps you appreciate nature's fleeting beauty. Whether you're decorating for an event or just brightening up your living space, fresh flowers can dramatically improve your mood and ambiance.",
    image: "/flowers/flower1.jpg",
  },
  "flower-meanings": {
    title: "The Secret Meaning of Popular Flowers",
    content:
      "Flowers have long been associated with emotions and sentiments. Red roses traditionally symbolize love and romance, while white roses stand for purity and new beginnings. Tulips, depending on their color, can represent deep affection (red), cheerfulness (yellow), or forgiveness (white). Lilies often denote purity and transience, making them popular in both weddings and funerals. Sunflowers represent happiness and positivity, echoing the bright nature of the sun. By learning these symbolic meanings, you can craft floral arrangements that convey deeper emotional resonance. This thoughtful gesture adds another layer of connection to your gifts and decor. It's a beautiful, subtle way to express feelings that words sometimes can't fully capture.",
    image: "/flowers/flower7.jpg",
  },
  "seasonal-flowers": {
    title: "Seasonal Flower Guide",
    content:
      "Each season brings its own floral treasures. Spring offers tulips, daffodils, and hyacinths—bright and uplifting after a long winter. Summer is the time for showy blooms like peonies, zinnias, and sunflowers. Fall arrangements feature warm tones with chrysanthemums, marigolds, and dahlias. In winter, consider elegant amaryllis, poinsettias, and paperwhites. Using seasonal flowers ensures freshness and affordability, as these blooms are more readily available. Moreover, seasonal arrangements help ground your home in the natural world’s rhythm and cycles. They can also add seasonal scents that enhance the atmosphere—think the fresh scent of spring or the spice of winter greens. Decorating this way helps create a cozy, intentional living space.",
    image: "/flowers/flower18.jpg",
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({ id }));
}

export default function BlogPostPage({
  params,
}: {
  params: { id: keyof typeof blogPosts };
}) {
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
