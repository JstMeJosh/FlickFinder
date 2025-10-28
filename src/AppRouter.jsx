import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from './Pages/Home';
import MovieDetails from './Pages/MovieDetails';
import NotFound from './Pages/NotFound';
export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'movie/:id',
      element: <MovieDetails/>
    },
    {
      path: '/not-found',
      element: <NotFound/>
    }
  ])
  return (
  <RouterProvider router ={router}/>

  )
}
