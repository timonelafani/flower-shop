import { Product } from "../../data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-[#f4f3ef] p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold text-[#4a5a40]">{product.name}</h3>
      <p className="text-[#5f6b50]">{product.price}</p>
      <button className="mt-4 bg-[#6a7752] text-white px-4 py-2 rounded hover:bg-[#586845]">
        Add to Cart
      </button>
    </div>
  );
}
