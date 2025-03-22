import { useState, useEffect, useRef } from "react";

export function useLazyLoad<T>(items: T[], batchSize: number = 6) {
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + batchSize, items.length));
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [items.length, batchSize]);

  return {
    visibleItems: items.slice(0, visibleCount),
    hasMore: visibleCount < items.length,
    loadMoreRef,
  };
}
