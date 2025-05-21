import { createBrowserRouter, RouterProvider, } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";
import AddRecipes from "../Pages/AddRecipes";
import AllRecipes from "../Pages/AllRecipes";
import Loading from "../Components/Loading";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "all-recipes",
                element: <AllRecipes></AllRecipes>,
                loader: () => fetch('http://localhost:3000/recipes'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "add-recipes",
                element:
                    <PrivateRoute>
                        <AddRecipes></AddRecipes>
                    </PrivateRoute>
            },
            {
                path: "my-recipes",
                element: <h1>My Recipes</h1>
            }
        ]
    },
])

export default router