import { lazy } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '@/views/home'
const ArticleDetail = lazy(() => import('@/views/article-detail'))

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/article-detail',
    element: <ArticleDetail />,
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
