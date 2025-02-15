import express from 'express';
import { createYoga } from "graphql-yoga";
import { schema } from "./schema.ts";

const yoga = createYoga({ schema });

const app = express();

app.use(yoga.graphqlEndpoint, yoga)

app.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});