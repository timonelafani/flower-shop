const products = [
    {
        id: 1,
        name: 'Sunshine Bouquet',
        price: '$29.99',
        image: '/flowers/flower1.jpg',
    },
    {
        id: 2,
        name: 'Romantic Roses',
        price: '$39.99',
        image: '/flowers/flower2.jpg',
    },
    {
        id: 3,
        name: 'Spring Bliss',
        price: '$24.99',
        image: '/flowers/flower3.jpg',
    },
]

export default function FeaturedProducts() {
    return (
        <section id="shop" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#4a5a40] mb-4">Featured Bouquets</h2>
                <p className="text-[#5f6b50] mb-12">Lovingly arranged, freshly picked.</p>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((item) => (
                        <div key={item.id} className="bg-[#f4f3ef] p-6 rounded-xl shadow hover:scale-105 transition">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-40 w-full object-cover rounded mb-4"
                            />
                            <h3 className="text-xl font-semibold text-[#4a5a40]">{item.name}</h3>
                            <p className="text-[#5f6b50]">{item.price}</p>
                            <button className="mt-4 bg-[#6a7752] text-white px-4 py-2 rounded hover:bg-[#586845]">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
