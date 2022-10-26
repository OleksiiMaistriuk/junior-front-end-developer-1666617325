import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
// import { BusinessContext } from "./app/components/main/context/businessContext/BusinessContext";
// import ErrorPage from "./app/error-page";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/busines-context",
//         element: <BusinessContext />,
//       },
//     ],
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
// <RouterProvider router={router} />{" "}
