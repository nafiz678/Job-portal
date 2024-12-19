import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import JobDetails from "../pages/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "@/pages/JobApply";
import MyApplication from "@/pages/MyApplication";
import AddJob from "@/pages/AddJob/AddJob";
import MyPostedJobs from "@/pages/AddJob/MyPostedJobs";
import ViewApplication from "@/pages/ViewApplication";



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
          path: "/jobs/:id",
          element: <PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
          loader: ({params})=> fetch(`https://job-portal-server-sigma-seven.vercel.app/jobs/${params.id}`)
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
          path: "/jobApply/:id",
          element: <PrivetRoute> <JobApply></JobApply> </PrivetRoute>,
          loader: ({params})=> fetch(`https://job-portal-server-sigma-seven.vercel.app/jobs/${params.id}`)
        },
        {
          path: "/myApplications",
          element: <PrivetRoute> <MyApplication></MyApplication> </PrivetRoute>,
        },
        {
          path: "/addJob",
          element: <PrivetRoute> <AddJob></AddJob> </PrivetRoute>,
        },
        {
          path: "/myPostedJobs",
          element: <PrivetRoute> <MyPostedJobs></MyPostedJobs> </PrivetRoute>,
        },
        {
          path: "/viewApplications/:job_id",
          element: <PrivetRoute> <ViewApplication></ViewApplication> </PrivetRoute>,
          loader: ({params})=> fetch(`https://job-portal-server-sigma-seven.vercel.app/job-applications/jobs/${params.job_id}`)
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>
        },
      ]
    },
  ]);

  export default router