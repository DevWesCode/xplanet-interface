import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </StrictMode>,
);
