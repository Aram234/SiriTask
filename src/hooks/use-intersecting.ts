import { useEffect, useRef } from "react";

type UseIntersectingProps = {
  onIntersecting(): unknown | Promise<unknown>;
};
export function useIntersecting(
  targetRef: React.RefObject<HTMLElement | null>,
  { onIntersecting }: UseIntersectingProps
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersecting();
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (observerRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onIntersecting, targetRef]);
}
