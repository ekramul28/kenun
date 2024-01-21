import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Collection from "../Page/Collection/Collection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/collection",
                element: <Collection></Collection>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router;