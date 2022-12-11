import { gql } from "@apollo/client";

export const GET_DATA_FROM_ARWEAVE = gql`
query GetContentFromArweave($targetWalletAddress: String!, $metadata: [TagInput!], $sort: Sort, $limit: Int){
  GetContentFromArweave(
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