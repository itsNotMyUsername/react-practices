import * as ReactDOMClient from "react-dom/client";
import React from "react";
import App from "./components/App";
import { Provider } from "./context/questions";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
