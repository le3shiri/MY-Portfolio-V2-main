import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
// import Protfolio from "../Pages/Protfolio/Protfolio";
// import ProtfolioDetails from "../Pages/ProtfolioDetails/ProtfolioDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/AudioPlayer",
      //   element:<AudioPlayer />,
      // },
      // {
      //   path: "/protfolio-details",
      //   element: <ProtfolioDetails />,
      // },
    ],
  },
]);
