import express from 'express';
import { createYoga } from "graphql-yoga";
import { schema } from "./schema.ts";
import {auth, requiredScopes} from 'express-oauth2-jwt-bearer';
import cors from 'cors';

// Authorization middleware - Access Token must exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'http://localhost:4000/graphql',
  issuerBaseURL: `https://dev-vigt6on5fu4xcryn.us.auth0.com/`,
  tokenSigningAlg: 'RS256'
});

// TODO
//const checkScopes = requiredScopes('read:messages');

const yoga = createYoga({ schema });

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(checkJwt);

app.use(yoga.graphqlEndpoint, yoga);

app.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});