import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: './src/schema/typedefs/*.ts',
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        maybeValue: 'T | null | undefined'
      }
    },
  },
};
export default config