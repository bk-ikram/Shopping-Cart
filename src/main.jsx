import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root/Root.jsx"
import Home from "./components/Home/Home.jsx"
import ErrorPage from "./components/Error/Error.jsx"
import Shop from "./components/Shop/Shop.jsx"
import Cart from "./components/Cart/Cart.jsx"
import './index.css'
import './styles/theme.css' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ]
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
