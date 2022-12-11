import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import { getDataFromFilecoin } from '../../src/client/storedat/storedat.api.client'

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

  //Change this to read/map from req.body in your implementation
  const cid = "bafybeiblwid4hiku2irzabbc6xrri2njpfkt7e4w5ubwpvbzrguugfthze";

  try {
    const fileCoinData = await getDataFromFilecoin(cid);

    res.statusCode = 200;
    res.json({ data: { fileCoinData }, message: 'Filecoin data found' })
  } catch (error) {
    res.statusCode = 404;
    res.json({ data: {}, message: error.message })
  }
}
