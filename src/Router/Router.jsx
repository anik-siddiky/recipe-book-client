import { createBrowserRouter, RouterProvider, } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    },
])

export default router