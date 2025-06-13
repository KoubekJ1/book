import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from 'src/pages/home/HomePage.jsx'

import 'lib/bootstrap/css/bootstrap.css';
import SettingPage from './pages/setting/SettingPage'
import CharactersPage from './pages/characters/CharactersPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <Error/>
  },
  {
    path: '/setting',
    element: <SettingPage/>,
    errorElement: <Error/>
  },
  {
    path: '/characters',
    element: <CharactersPage/>,
    errorElement: <Error/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
