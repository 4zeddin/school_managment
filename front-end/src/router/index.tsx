import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/student/dashboard",
                element: <Users />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
