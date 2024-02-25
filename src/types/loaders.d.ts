type LoaderProps = {
  searchValue?: string;
  nextPage: number;
};

type LoaderResult<T extends { id: string }> = {
  nextPage: number;
  items: T[];
};
