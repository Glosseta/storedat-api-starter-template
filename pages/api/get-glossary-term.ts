import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { getGlossaryTerm } from '../../src/client/storedat/storedat.api.client'

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
  const searchTerm = "web3";
  const locale = "EN";

  try {
    const glossaryTermResult = await getGlossaryTerm(searchTerm, locale);

    res.statusCode = 200;
    res.json({data: {term: glossaryTermResult.term, definition: glossaryTermResult.definition, category: glossaryTermResult.category, providerId: glossaryTermResult.providerId },  message: 'Term found'})
  } catch (error) {
    res.statusCode = 404;
    res.json({data: {},  message: error.message})
  }
}
