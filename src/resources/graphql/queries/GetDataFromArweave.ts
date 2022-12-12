import { gql } from "@apollo/client";

export const GET_DATA_FROM_ARWEAVE = gql`
query GetDataFromArweave($targetWalletAddress: String!, $metadata: [TagInput!], $sort: Sort, $limit: Int){
  GetDataFromArweave(
    targetWalletAddress: $targetWalletAddress
    metadata: $metadata
    sort: $sort
    limit: $limit
  ) {
    providerId
    provider
    data
    url
    metadata {
      name
      value
    }
    creationTimestamp
  }
}
`;