"use client";

import { useEffect, useState } from "react";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { GraphiQLSqueleton } from "./graphiql-squeleton";
import AccessDenied from "./access-denied";

const GRAPHQL_API_URL = "http://localhost:4000/graphql";

// TODO
// Fix graphiql flash when access is denied

export default function GraphiQLComponent() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isForbidden, setIsForbidden] = useState(false);

  useEffect(() => {
    async function fetchToken() {
      const token = await getAccessToken();
      setAccessToken(token);
    }
    fetchToken();
  }, []);

  if (!accessToken) {
    return <GraphiQLSqueleton />;
  }

  // Custom fetcher with error handling
  const fetcher = async (graphQLParams: any) => {
    try {
      const res = await fetch(GRAPHQL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(graphQLParams),
      });

      if (res.status === 403) {
        setIsForbidden(true);
        return null; // Stop execution and prevent GraphiQL from loading
      }

      return res.json();
    } catch (error) {
      console.error("Error fetching GraphQL data:", error);
      return {
        errors: [{ message: "An error occurred while fetching data." }],
      };
    }
  };

  if (isForbidden) {
    return <AccessDenied />;
  }

  return <GraphiQL fetcher={fetcher} />;
}
