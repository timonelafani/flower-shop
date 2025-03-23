import Image from "next/image";
import Link from "next/link";
import { Product } from "@data/products";
interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/shop/${product.id}`} className="block group">
      <div className="bg-[#f4f3ef] p-6 rounded-xl shadow hover:scale-105 transition">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded"
        />
        <h3 className="text-xl font-semibold text-[#4a5a40]">{product.name}</h3>
        <p className="text-[#5f6b50]">{product.price}</p>
        <button className="mt-4 bg-[#6a7752] text-white px-4 py-2 rounded hover:bg-[#586845]">
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
