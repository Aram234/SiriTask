import { apolloClient } from "../../../graphql";
import {
  ApplicantIndividualCompanyPositionsDocument,
  QueryApplicantIndividualCompanyPositionsFilterStatic,
  SqlOperator,
} from "../../../graphql/generated";
import { iLike, serializeSelectorData } from "./utils";

export const loadAICPositions = async ({
  searchValue = "",
  nextPage,
}: LoaderProps) => {
  const { data } = await apolloClient.query({
    query: ApplicantIndividualCompanyPositionsDocument,
    variables: {
      first: 10,
      page: nextPage,
      filter: {
        column: QueryApplicantIndividualCompanyPositionsFilterStatic.Name,
        operator: SqlOperator.Ilike,
        value: iLike(searchValue),
      },
    },
  });

  const hasMorePages = data?.result?.paginatorInfo?.hasMorePages || false;
  const currentPage = data?.result?.paginatorInfo?.currentPage || -1;
  const items = data?.result?.data || [];

  return serializeSelectorData({
    hasMorePages,
    currentPage,
    searchValue,
    items,
  });
};
