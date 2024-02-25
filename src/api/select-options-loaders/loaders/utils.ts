export const iLike = (str = "") => `%${str}%`;

type SerializeSelectorDataProps<T extends { id: string }> = {
  currentPage: number;
  hasMorePages: boolean;
  items: T[];
  searchValue: string;
};

export const serializeSelectorData = <T extends { id: string }>({
  currentPage,
  hasMorePages,
  searchValue,
  items,
}: SerializeSelectorDataProps<T>): LoaderResult<T> => ({
  hasMore: hasMorePages,
  nextPage: hasMorePages ? currentPage + 1 : 0,
  searchValue,
  items,
});
