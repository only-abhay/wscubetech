import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import All from './all'
import Contact from './contact'

export default function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<All/>,
      children: [
         {
      path:"/",
      element:<Home/>,
    },
     {
      path:"/about",
      element:<About/>,
    },
     {
      path:"/contact",
      element:<Contact/>,
    }
  ]
    }
   
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

{/* <div>header</div>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
</Routes>
<div>footer</div>
    </> */}
