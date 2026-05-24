import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Products from './Components/Products.jsx'
import Cart from './Components/Cart.jsx'
import Profile from './Components/Profile.jsx'
import Home from './Components/Home.jsx'
import ErrorHandling from './Components/ErrorElement'
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorHandling />,
    children: [
      {element:<Home />,
      index: true}
      ,{
        path: "/products",
        element: <Products />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
