"use client";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white text-[#4a5a40]">
      <div className="relative h-[530px] w-full mb-12 overflow-hidden">
        <div className="parallax-bg w-full h-full" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-10">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">
            About Me
          </h1>
        </div>
      </div>

      <div className="px-6 py-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to Botanica Bazaar</h2>
        <p className="text-lg leading-relaxed mb-4">
          Your go-to destination for fresh, handpicked, and beautifully arranged
          floral creations. Whether you're celebrating a special moment or just
          brightening up your day, we’re here to deliver joy — petal by petal.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our story began with a deep-rooted passion for nature and a love for
          design. At Botanica Bazaar, we believe every bouquet tells a story —
          and we are here to help you share it.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for supporting small local artistry and letting us be a part
          of your most cherished memories.
        </p>
      </div>

      <style jsx>{`
        .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          background-image: url("/images/about-banner.jpg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>
    </section>
  );
}
