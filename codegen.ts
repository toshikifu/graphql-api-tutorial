import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/gql/*.graphql",
  generates: {
    "src/gql/generated/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./src/graphql-operations.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
