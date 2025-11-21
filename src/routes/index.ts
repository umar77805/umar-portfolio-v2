import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/aboutMe',
        Component: AboutMe
      }
    ]
  }
]);

export default router;