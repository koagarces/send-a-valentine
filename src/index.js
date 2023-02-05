import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Send from "./Components/send";
import Surprise from "./Components/surprise";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Send />} />
      <Route
        path="/surprise/:fromName/:replyEmail/:id"
        element={<Surprise />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
