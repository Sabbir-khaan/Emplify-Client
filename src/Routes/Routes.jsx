import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

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
    }
])