import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GLOSSETA_API_GRAPHQL_URL } from "../../utils/endpoints";
import { GET_GLOSSARY_TERM } from "../../resources/graphql/queries/GetGlossaryTerm";
import { Content, GlossaryTerm, Sort, TagInput } from "../../resources/graphql/types/storedat-gql-types";
import { GET_DATA_FROM_FILECOIN } from "../../resources/graphql/queries/GetDataFromFilecoin";
import { GET_DATA_FROM_ARWEAVE } from "../../resources/graphql/queries/GetDataFromArweave";

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

export const getDataFromFilecoin = async (cid: string): Promise<Content[]> => {
    let content: Content[] = [];

    try {
        const { data } = await glossetaClient.query({
            query: GET_DATA_FROM_FILECOIN,
            variables: {
                "cid": cid,
            },
        });

        content = data.GetDataFromFilecoin;
    } catch (error) {
        console.log(`[Unable to find data from Filecoin] cid=${cid}, error=${error.message}`)
        throw new Error(error)
    }

    return content;
}

export const getDataFromArweave = async (targetWalletAddress: string, metadata: TagInput[], sort: Sort, limit: number): Promise<Content[]> => {
    let content: Content[] = [];

    try {
        const { data } = await glossetaClient.query({
            query: GET_DATA_FROM_ARWEAVE,
            variables: {
                "targetWalletAddress": targetWalletAddress,
                "metadata": metadata,
                "sort": sort,
                "limit": limit
            },
        });

        content = data.GetDataFromArweave;
    } catch (error) {
        console.log(`[Unable to find data from Arweave] targetWalletAdress=${targetWalletAddress}, metadata=${metadata}, error=${error.message}`)
        throw new Error(error)
    }

    return content;
}