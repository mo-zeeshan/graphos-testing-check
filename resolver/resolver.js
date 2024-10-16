import { books } from "../books";

export const resolver = {
    Query: {
      books: () => books,
    },
  
    Mutation:{
      createBook:(_,{title,author})=> {
        books = [...books,{title,author}]
        return {
          title,
          author
        }
      }
      
    },
  };