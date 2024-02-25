import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://152.228.215.94:83/api",
  documents: "src/graphql/queries",
  generates: {
    "src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node",
        "typescript-apollo-client-helpers",
      ],
    },
  },
};

export default config;
