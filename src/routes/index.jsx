import { createBrowserRouter, Router } from "react-router-dom";

import { Login } from "../containers/login";
import { Register } from "../containers/Register";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
]);
