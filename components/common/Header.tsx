import Link from "next/link";
import Image from "next/image";

import { BRAND_NAME, COLORS } from "@lib/constants";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/logo.JPG" alt="..." width={40} height={40} />
          </Link>
          <span className={`text-xl font-bold text-[${COLORS.primary}]`}>
            {BRAND_NAME}
          </span>
        </div>
        <nav>
          <Link
            href="/shop"
            className="text-[#4a5a40] hover:text-[#586845] transition font-medium"
          >
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}
