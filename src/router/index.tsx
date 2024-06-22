import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/views/home'

const router = createHashRouter([
  {
    path: '/home',
    element: <Home />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}