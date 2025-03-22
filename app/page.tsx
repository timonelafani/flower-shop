import Header from "../components/common/Header";
import Hero from "../components/products/Hero";
import FeaturedProducts from "../components/products/FeaturedProducts";
import Testimonials from "../components/products/Testimonials";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </main>
  );
}
