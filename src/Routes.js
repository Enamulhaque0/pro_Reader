import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";
import Home from "./components/Home";
import About from "./components/About";
import Books from "./components/Books"
import BookDetails from "./components/BookDetails"

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
          loader: ()=> fetch("https://api.itbook.store/1.0/new"),
          element: <Books></Books>,
        },
        {
          path: "book/:id",
          loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`),
          element: <BookDetails></BookDetails>
        }
      ],
    },
  ]);

  export default router