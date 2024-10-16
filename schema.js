import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`

type Book {
    id:Int
    title: String
    author: String
  }

type Query {
    books: [Book]
  }

  type Mutation{
    createBook(title:String,author:String,id:Int):Book
  }

`