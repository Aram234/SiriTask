import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import { apolloClient } from "./graphql";
import { SelectOptionsLoadersProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <SelectOptionsLoadersProvider>
        <App />
      </SelectOptionsLoadersProvider>
    </ApolloProvider>
  </React.StrictMode>
);
