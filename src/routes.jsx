import App from '@/app';
import { createBrowserRouter } from "react-router";

import Home from '@/pages/Home/Home.jsx'
import Shop from '@/pages/Shop/Shop.jsx'
import Error from '@/pages/Error/Error';
import Basket from '@/pages/Basket/Basket'
import ProductModal from '@/components/Product/ProductModal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", 
        element: <Home /> },
      { path: "/shop", 
        element: <Shop />,
        children: [
            { path: ':id',
            element: <ProductModal /> },
        ],
      },
      { path: "/basket", 
        element: <Basket /> },
    ]
  }
])

export default router