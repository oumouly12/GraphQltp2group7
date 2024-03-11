import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from "./resolvers.js";
import {GHIBLIAPI} from "./datasources/GHIBLIAPI";
import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000},
  context: async () => {
    const {cache} = server
    return {
      dataSources: {
        ghibliAPI: new GHIBLIAPI()
      }
    }
  }
})

console.log(`🚀  Server ready at: ${url}`)