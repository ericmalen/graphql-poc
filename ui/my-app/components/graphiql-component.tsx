"use client";

import { useEffect, useState } from "react";
import { createGraphiQLFetcher } from "@graphiql/toolkit";
import GraphiQL from "graphiql";
import "graphiql/graphiql.css";
import { getAccessToken } from "@auth0/nextjs-auth0";

const GRAPHQL_API_URL = "http://localhost:4000/graphql";

export default function GraphiQLComponent() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      const token = await getAccessToken();
      setAccessToken(token);
    }
    fetchToken();
  }, []);

  if (!accessToken) {
    return <p>Loading authentication...</p>;
  }

  const fetcher = createGraphiQLFetcher({
    url: GRAPHQL_API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(accessToken);

  return <GraphiQL fetcher={fetcher} />;
}
