import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { books } from "../lib/contance";

const BookType = new GraphQLObjectType({
    name: "BookType",
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,
        },
        genre: {
            type: GraphQLString,
        }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, { id }) {
                // Where we fetch the data from database.
                return books.filter(book => book.id === id)[0];
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQueryType
});