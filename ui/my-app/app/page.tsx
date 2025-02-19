import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex grow flex-col my-7 mr-7">
      <div className="flex w-full items-center justify-center">
        <p className="text-4xl mb-7">GraphQL POC</p>
      </div>
      <Separator />
      <div className="flex w-full h-1/6 items-center justify-center">
        <p className="text-2xl text-center p-10">
          The purpose of this application is to explore the OAuth 2.0 framework
          and OpenID Connect protocol and how they integrate with a GraphQL API.
          Under the hood, the Authorization Code Flow with PKCE is used to
          implement Authentication and Authorization.
        </p>
      </div>
      <Separator />
      <div className="flex w-full h-1/6 items-center justify-center">
        <p className="text-xl text-center px-20 pt-5">
          <b>Authentication</b>: In the frontend, the user is authenticated
          through Auth0's Universal Login feature. Under the hood, the
          application receives an ID Token (OIDC) and an Access Token (OAuth
          2.0) from the Authorization Server. The ID Token is used to
          authenticate the user and provide access control through the use of
          middleware, requiring authentication for protected routes.
        </p>
      </div>
      <div className="w-full items-center justify-center px-20">
        <p className="text-xl text-center">
          — <b>Try it yourself</b> —
        </p>
        <p className="text-xl text-center p-10">
          You can't access the GraphiQL page without login in!
        </p>
      </div>
      <Separator />
      <div className="flex w-full h-1/6 items-center justify-center">
        <p className="text-xl text-center px-20 pt-5">
          <b>Authorization</b>: The Access token, a JWT in this case, is used
          for authorization in the API. When the application sends an HTTP
          request to the API, it includes the Access token as Bearer token in
          the authorization header of the request. The API attempts to verify
          the Access token with middleware, and if successful, can use different
          middleware to protect endpoints. Protecting endpoints is done by
          checking the scope claim in the Access token's payload and using the
          provided scopes to control access to protected routes.
        </p>
      </div>
      <div className="w-full items-center justify-center px-20">
        <p className="text-xl text-center">
          — <b>Try it yourself</b> —
        </p>
        <p className="text-xl text-center p-10">
          Login with{" "}
          <b>&#123;email: test@test.com, password: test123!@#&#125;</b> and
          visit the GraphiQL page. Those credentials have the "access:graphiql"
          scope, authorizing the application to access the API.
        </p>
        <p className="text-xl text-center">
          Now try logging in with{" "}
          <b>&#123;email: none@none.com, password: none123!@#&#125;</b> and
          visit the GraphiQL page. Those credentials have the "access:none"
          scope and a "404: Unauthorized Access" response is returned by the
          API.
        </p>
      </div>
    </main>
  );
}
