import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { getDataFromArweave } from '../../src/client/storedat/storedat.api.client'
import { Sort, TagInput } from '../../src/resources/graphql/types/storedat-gql-types'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Run the middleware
    await runMiddleware(req, res, cors)

    //Change these to read/map from req.body in your implementation
    const targetWalletAddress = "FWh7-V_t6BHFNwoTLpQOj3w62TxXE7teHW9opgrCMqE";
    const metadata = [{ name: "category", value: "general" } as TagInput];
    const sort = Sort.Asc
    const limit = 1;

    try {
        const fileCoinData = await getDataFromArweave(targetWalletAddress, metadata, sort, limit);

        res.statusCode = 200;
        res.json({ data: { fileCoinData }, message: 'Filecoin data found' })
    } catch (error) {
        res.statusCode = 404;
        res.json({ data: {}, message: error.message })
    }
}
