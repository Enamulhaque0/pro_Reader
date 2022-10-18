import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SingUp from "./components/SingUp";
import PrivetRoutes from "./components/PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Root> </Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",

        element: <Home></Home>,
      },
      {
        path: "home",

        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "books",
        loader: () => fetch("https://api.itbook.store/1.0/new"),
        element: <Books></Books>,
      },
      {
        path: "login",

        element: <Login></Login>,
      },
      {
        path: "singup",

        element:<SingUp></SingUp> 
      },
      {
        path: "book/:id",
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        element:<PrivetRoutes> <BookDetails></BookDetails></PrivetRoutes>,
      },
      {
        path: "dashboard",
        loader: () => fetch("Dashboard.json"),

        element: <PrivetRoutes> <Dashboard></Dashboard> </PrivetRoutes>
      }
    ],
  },
]);

export default router;
