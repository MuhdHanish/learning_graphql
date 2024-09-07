import { GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { authors, books } from "../lib/contance";

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
        },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return authors.find(author => author.id === parent.author);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "AuthorType",
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        rating: {
            type: GraphQLInt,
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
                return books.find(book => book.id === id);
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, { id }) {
                return authors.find(book => book.id === id);
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQueryType
});