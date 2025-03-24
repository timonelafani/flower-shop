import { useState, useEffect, useRef } from "react";
import { getProductsPaginated } from "@lib/firebase/products";
import { Product } from "@lib/types";

export default function useLazyLoadProducts(limit = 6) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const lastDocRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );
    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasMore, loading]);

  const loadMore = async () => {
    setLoading(true);
    const { data, lastDoc } = await getProductsPaginated(
      limit,
      lastDocRef.current
    );
    setProducts((prev) => [...prev, ...data]);
    lastDocRef.current = lastDoc;
    if (!lastDoc || data.length < limit) setHasMore(false);
    setLoading(false);
  };

  const clearProducts = () => {
    setProducts([]);
    lastDocRef.current = null;
    setHasMore(true);
  };

  return { products, loading, hasMore, observerRef, clearProducts };
}
