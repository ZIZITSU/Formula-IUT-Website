import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Sponsors from "../pages/Sponsors/Sponsors";
import Events from "../pages/Events/Events";
import Donate from "../pages/Donate/Donate";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [{
      index: true,
      path: "/",
      Component: Home
    },
    {
      path: "/about",
      Component: About
    },
    {
      path: "/team",
      Component: Team
    },
    {
      path: "/contact",
      Component: Contact
    },
    {
      path: "/sponsors",
      Component: Sponsors
    },
    {
      path: "/events",
      Component: Events
    },
    {
      path: "/donate",
      Component: Donate
    }
  ],
  },
  {
    path: "/*",
    Component: Error
  }
]);

export default router;