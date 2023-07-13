import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../page/Home";
import Login from "../page/Login";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <div><App/></div>,
  },
  {
    path: "/home",
    element: <div><Home/></div>,
  },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "*",
    element: <div><NotFound/></div>,
  },
]);

export default routes;