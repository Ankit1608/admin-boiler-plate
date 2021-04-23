import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { icons } from "./assets/icons";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
React.icons = icons;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
