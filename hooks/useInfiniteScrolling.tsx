import { useEffect, useState, MutableRefObject } from "react";

interface UseInfiniteScrollingProps {
  target: MutableRefObject<HTMLElement | null>;
  fetchMore: () => Promise<any>;
  hasMore: boolean;
}

const useInfiniteScrolling = ({ target, fetchMore, hasMore }: UseInfiniteScrollingProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!hasMore || isLoading) {
      return;
    }

    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);
          await fetchMore();
          setIsLoading(false);
        }
      },
      { threshold: 1.0 }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target, fetchMore, hasMore, isLoading]);

  return { isLoading };
};

export default useInfiniteScrolling;
