import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import WorkSheet from "../Pages/Dashboard/WorkSheet/WorkSheet";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component:Home,
            }
        ]
    },
    {
        path:"/",
        Component:AuthLayout,
        children:[
            {
                path:"/login",
                Component:Login
            },
            {
                path:"register",
                Component:Register,
            }
        ]
    },
    {
        path:"/dashboard",
        element:<PrivetRoutes><DashboardLayout></DashboardLayout></PrivetRoutes>,
        children:[
            {
                path:"worksheet",
                Component:WorkSheet,
            }
        ]
    }

])