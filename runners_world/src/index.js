import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Shoes from "./routes/Shoes";
import Root from "./routes/Root";
import Abc from "./Abc";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Abc />
      <App>
        <Root />
      </App>
    ),
  },
  // {
  //   path: "shoes",
  //   element: (
  //     <App>
  //       <Shoes />
  //     </App>
  //   ),
  // },
  // {
  //   path: "training",
  //   element: <Training />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
