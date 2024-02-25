import { gql } from "@apollo/client";

export const GET_ALL_AIC_POSITIONS = gql`
  query ApplicantIndividualCompanyPositions(
    $page: Int
    $first: Int
    $filter: QueryApplicantIndividualCompanyPositionsFilterFilterConditions
    $orderBy: [QueryApplicantIndividualCompanyPositionsOrderByOrderByClause!]
  ) {
    result: applicantIndividualCompanyPositions(
      page: $page
      first: $first
      filter: $filter
      orderBy: $orderBy
    ) {
      data {
        id
        name
      }
      paginatorInfo {
        hasMorePages
        currentPage
      }
    }
  }
`;
