import express from 'express';
import { createYoga } from "graphql-yoga";
import { schema } from "./schema.ts";
import cors from 'cors';
import {validateAccessToken, checkScopes} from "./middleware/auth0.middleware.ts"
import dotenv from "dotenv";

dotenv.config();

const yoga = createYoga({ schema });

const app = express();

app.use(cors({
  origin: process.env.AUTH0_BASE_URL,
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(validateAccessToken, checkScopes);

app.use(yoga.graphqlEndpoint, yoga);

app.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});