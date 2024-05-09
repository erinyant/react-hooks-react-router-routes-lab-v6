import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />
    },
    {
        path: "/movie",
        element: <Movie />
    },
    {
        path:"/directors",
        element: <Directors />
    },
    {
        path:"/actors",
        element: <Actors />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
