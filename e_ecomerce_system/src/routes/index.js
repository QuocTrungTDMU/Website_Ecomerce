import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";

export const routes = [
    {
        path: '/',
        page: HomePage
    },
    {
        path: '/order',
        page: OrderPage
    },
    {
        path: '/order/:id',
        page: OrderPage
    },
    // {
    //     path: '/products',
    //     page: ProductPage
    // }
]