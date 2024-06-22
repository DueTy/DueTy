import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/views/home'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}