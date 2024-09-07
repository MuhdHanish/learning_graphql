import { config } from "dotenv";
import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";

config();
const port = process.env.PORT || 3000;

const app = express();

app.use(`/graphql`, graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => console.log(`Server listening on port:${port}...`));