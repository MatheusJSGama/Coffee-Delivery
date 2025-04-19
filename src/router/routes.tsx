import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { Order } from "../pages/Cart";
import { OrderPlaced } from "../pages/OrderSuccess";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/Order', element: <Order /> },
            { path: '/Order/Order-Placed', element: <OrderPlaced /> }
        ]
    }
])