import { gql } from "@apollo/client";

export const GET_GLOSSARY_TERM = gql`
query getGlossaryTerm ($name: String!, $locale: Locale) {
  GetGlossaryTerm(name: $name, locale: $locale) {
    definition
    category
    name
  }
}
`;