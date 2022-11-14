import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NetWorks from "./pages/Networks";
import Error from "./pages/Error";

import Private from "./routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/admin/social",
    element: (
      <Private>
        <NetWorks />
      </Private>
    ),
  },
  {
    path: "*", //qualquer outro link dos que não estejam já listados acima
    element: <Error />,
  },
]);

export { router };
