import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GLOSSETA_API_GRAPHQL_URL } from "../../utils/endpoints";
import { GET_GLOSSARY_TERM } from "../../resources/queries/GetGlossaryTerm";

const glossetaClient = new ApolloClient({
    uri: GLOSSETA_API_GRAPHQL_URL,
    cache: new InMemoryCache(),
});

interface GlossaryTerm {
    name: string,
    definition: string,
    category: string,
}

export const getGlossaryTerm = async (name: string, locale: string): Promise<GlossaryTerm> => {
    let glossaryTerm = {} as GlossaryTerm;

    try {
        const { data } = await glossetaClient.query({
            query: GET_GLOSSARY_TERM,
            variables: {
                "name": name,
                "locale": locale
            },
        });

        glossaryTerm.name = data.GetGlossaryTerm.name;
        glossaryTerm.definition = data.GetGlossaryTerm.definition;
        glossaryTerm.category = data.GetGlossaryTerm.category;

    } catch (error) {
        console.log(`[Unable to find term] term=${name}, error=${error.message}`)
        throw new Error(error)
    }

    return glossaryTerm;
}