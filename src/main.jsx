import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { Login } from "./containers/login";
import GlobalStyles from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme="colored" />
  </StrictMode>,
);
