# Storedat API Starter

Unleash the power of Web3 storage with a single GraphQL API over decentralized storage providers like Arweave and Filecoin.  [Storedat](https://storedat.io) is a GraphQL API built ontop of existing web3 storage providers like Arweave and Filecoin.  We exist to accelerate the adoption of decentralized storage by providing a provider agnostic way to read and write data with those protocols all the while abstracting away web3 from the user.  No dealing with wallets, signing transactions, storing private keys, paying transactions costs, and so on.  Just plug in and storedat

Use this starter template repo to get going with [Storedat](https://storedat.io).  You can use it to give you an example of how to integrate the API into your app or you can even use it as a base for your own project!

## How to get started

1. Pull the code or fork the code to your computer
2. Run `yarn` to download the dependencies
3. Run `yarn generate-gql` to download and create the Storedat GraphQL types
4. Run `yarn dev` to run the app and hit [http://localhost:3000](http://localhost:3000)

## Endpoints to try out

After you run the app successfully, try hitting the following endpoints to get a feel how to work with the API

1. Get Glossary term : [http://localhost:3000/api/get-glossary-term](http://localhost:3000/api/get-glossary-term)
2. Get Data from Filecoin : [http://localhost:3000/api/get-filecoin-data](http://localhost:3000/api/get-filecoin-data)
3. Get Data from Arweave : [http://localhost:3000/api/get-arweave-data](http://localhost:3000/api/get-arweave-data)

# Storedat documentation

You can find all the documentation around the API [here](https://docs.storedat.io) or by inspecting the GraphQL docs in the [playground](https://perma.storedat.io/api/v1/graphql)
