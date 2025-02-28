import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import dotenv from "dotenv";

dotenv.config();

// Access Token must exist and be verified against the Auth0 JSON Web Key Set.
export const validateAccessToken  = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
});

// Checks for the "access:graphiql" scope
export const checkScopes = requiredScopes('access:graphiql');

// TODO
// Add proper error handling