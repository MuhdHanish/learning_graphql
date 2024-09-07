import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const BookType = new GraphQLObjectType({
    name: "BookType",
    fields: () => ({
        id: {
            type: GraphQLString,
        },
        title: {
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
            resolve(parent, args) {
                // Where we fetch the data from database.
                return {
                    id: new Date().getSeconds().toString(),
                    title: 'The Book'
                }
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQueryType
});