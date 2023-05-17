import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Retro from "./pages/Retro.jsx"
import Four from "./pages/Four.jsx"
import Movie from "./pages/Movie.jsx"
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Favorites from './pages/Favorites.jsx'

const router= createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
     path:"/Retro",
     element:<Retro/>
    },
    {
      path:"/Four",
      element:<Four/>
     },
     {
      path:"/Movie",
      element:<Movie/>
     },
     {
      path:"/Favorites",
      element:<Favorites/>
     }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
