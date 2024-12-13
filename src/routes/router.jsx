import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";



 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>Route Not Found</h2>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>
        },
        
      ]
    },
  ]);

  export default router