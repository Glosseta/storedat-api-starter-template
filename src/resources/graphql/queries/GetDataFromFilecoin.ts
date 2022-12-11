import { gql } from "@apollo/client";

export const GET_DATA_FROM_FILECOIN = gql`
query GetDataFromFilecoin($cid: String!) {
  GetDataFromFilecoin(cid: $cid) {
    providerId
    url
    data
    metadata {
      name
      value
    }
    provider
    creationTimestamp
  }
}
`;