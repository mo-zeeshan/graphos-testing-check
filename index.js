import express from 'express';
// import { gql } from 'apollo-server-lambda';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServerPluginUsageReporting } from '@apollo/server/plugin/usageReporting';
import { typeDefs } from './schema.js';
import { book } from './books.js';
import { ApolloServerPluginSchemaReporting } from '@apollo/server/plugin/schemaReporting';
dotenv.config();

const app = express();

let books  = book

const resolvers = {
  Query: {
    books: () => books,
  },

  Mutation:{
    createBook:(_,{title,author,id})=> {
      books = [...books,{title,author,id}]
      return {
        id,
        title,
        author
      }
    }
    
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginSchemaReporting({
      initialDelayMaxMs: 5000, // Optionally delay reporting the schema to Apollo Studio
    }),
    ApolloServerPluginUsageReporting({
      sendHeaders: { all: true },
      // logger:customLogger
    }),
  ],
});

// Start the server
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});