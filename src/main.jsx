import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Outlet/Main.jsx'
import Home from './Comp/Home.jsx'
import Login from './Comp/Login.jsx'




const router= createBrowserRouter([

  {


    path:'/',
    element:<Main></Main>,
    children:[

      {

        path:'/',
        element:<Home></Home>
      },
      {

        path:'/login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
