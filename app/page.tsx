import Hero from "@components/products/Hero";
import FeaturedProducts from "@components/products/FeaturedProducts";
import Testimonials from "@components/products/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
    </main>
  );
}
