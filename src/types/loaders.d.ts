type LoaderProps = {
  searchValue?: string;
  nextPage: number;
};

type LoaderResult<T extends { id: string }> = {
  nextPage: number;
  hasMore: boolean;
  items: T[];
};

type LoadFn<T extends { id: string }> = (
  props: LoaderProps
) => Promise<LoaderResult<T>>;
