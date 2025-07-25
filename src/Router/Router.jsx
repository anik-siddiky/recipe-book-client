import { createBrowserRouter, RouterProvider, } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";
import AddRecipes from "../Pages/AddRecipes";
import AllRecipes from "../Pages/AllRecipes";
import Loading from "../Components/Loading";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import SingleRecipeDetailPage from "../Pages/SingleRecipeDetailPage";
import MyRecipePage from "../Pages/MyRecipePage";
import ErrorPage from "../Pages/ErrorPage";
import ErrorLayout from "../Layouts/ErrorLayout";
import Dashboard from "../Layouts/Dashboard";
import DashboardHome from "../Pages/DashboardPages/DashboardHome";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                path: "/",
                index: true,
                element: <Home></Home>,
                hydrateFallbackElement: <Loading></Loading>
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
                loader: () => fetch('https://recipe-book-server-ten.vercel.app/recipes'),
                hydrateFallbackElement: <Loading></Loading>
            },
            // {
            //     path: "add-recipes",
            //     element:
            //         <PrivateRoute>
            //             <AddRecipes></AddRecipes>
            //         </PrivateRoute>
            // },
            {
                path: "recipe-details/:id",
                loader: ({ params }) => fetch(`https://recipe-book-server-ten.vercel.app/recipes/${params.id}`),
                element:
                    <PrivateRoute>
                        <SingleRecipeDetailPage></SingleRecipeDetailPage>
                    </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            },
            // {
            //     path: "my-recipes",
            //     element:
            //         <PrivateRoute>
            //             <MyRecipePage></MyRecipePage>
            //         </PrivateRoute>,
            //     hydrateFallbackElement: <Loading></Loading>
            // },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/my-recipes',
                element: <MyRecipePage></MyRecipePage>
            },
            {
                path: '/dashboard/add-recipe',
                element: <AddRecipes></AddRecipes>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorLayout></ErrorLayout>,
        children: [
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router