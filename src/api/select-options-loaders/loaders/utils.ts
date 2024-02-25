export const iLike = (str = "") => `%${str}%`;

type SerializeSelectorDataProps<T extends { id: string }> = {
  currentPage: number;
  hasMorePages: boolean;
  items: T[];
};

export const serializeSelectorData = <T extends { id: string }>({
  currentPage,
  hasMorePages,
  items,
}: SerializeSelectorDataProps<T>): LoaderResult<T> => ({
  nextPage: hasMorePages ? currentPage + 1 : 0,
  items,
});
