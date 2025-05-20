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
            {
                path: "all-recipes",
                element: <h1>All Recipes</h1>
            },
            {
                path: "add-recipes",
                element: <h1>Add Recipes</h1>
            },
            {
                path: "my-recipes",
                element: <h1>My Recipes</h1>
            }
        ]
    },
])

export default router