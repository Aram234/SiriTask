import LinearProgress from "@mui/material/LinearProgress";
import React, { useCallback, useRef } from "react";
import { useIntersecting } from "../hooks";

type InfiniteScrollProps = {
  onLoadMore(): Promise<unknown>;
  hasMore?: boolean;
};

export const InfiniteScroll = ({
  children,
  hasMore,
  onLoadMore,
}: React.PropsWithChildren<InfiniteScrollProps>) => {
  const ref = useRef<HTMLDivElement>(null);
  const isLoading = useRef<boolean>(false);

  const onIntersecting = useCallback(async () => {
    console.log("onIntersecting", isLoading.current);

    if (isLoading.current) return;

    isLoading.current = true;
    await onLoadMore();
    isLoading.current = false;
  }, [onLoadMore]);

  useIntersecting(ref, { onIntersecting });

  return (
    <div>
      {children}
      {hasMore && <LinearProgress ref={ref} />}
    </div>
  );
};
