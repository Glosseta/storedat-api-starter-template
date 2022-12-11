import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GLOSSETA_API_GRAPHQL_URL } from "../../utils/endpoints";
import { GET_GLOSSARY_TERM } from "../../resources/graphql/queries/GetGlossaryTerm";
import { GlossaryTerm } from "../../resources/graphql/types/storedat-gql-types";

const glossetaClient = new ApolloClient({
    uri: GLOSSETA_API_GRAPHQL_URL,
    cache: new InMemoryCache(),
});

export const getGlossaryTerm = async (term: string, locale: string): Promise<GlossaryTerm> => {
    let glossaryTerm = {} as GlossaryTerm;

    try {
        const { data } = await glossetaClient.query({
            query: GET_GLOSSARY_TERM,
            variables: {
                "term": term,
                "locale": locale
            },
        });

        glossaryTerm.term = data.GetGlossaryTerm.term;
        glossaryTerm.definition = data.GetGlossaryTerm.definition;
        glossaryTerm.category = data.GetGlossaryTerm.category;
        glossaryTerm.providerId = data.GetGlossaryTerm.providerId;

    } catch (error) {
        console.log(`[Unable to find term] term=${term}, error=${error.message}`)
        throw new Error(error)
    }

    return glossaryTerm;
}