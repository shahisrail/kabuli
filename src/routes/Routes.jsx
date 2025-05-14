import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
import Menus from "../pages/menus";
import Contact from "../pages/Conatct";
import Gallery from "../pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/OurStory",
        element: <OurStory></OurStory>,
      },
      {
        path: "/menus",
        element: <Menus></Menus>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
]);
export default router;
