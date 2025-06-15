import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'lib/bootstrap/css/bootstrap.css';
import './index.css'
import HomePage from 'src/pages/home/HomePage.jsx'
import ErrorPage from 'pages/error/ErrorPage.jsx'

import SettingPage from './pages/setting/SettingPage'
import CharactersPage from './pages/characters/CharactersPage'
import StoryPage from './pages/story/StoryPage'
import TheaterPage from './pages/theater/TheaterPage';

import ambianceSound from 'assets/audio/ambiance.opus';
import AboutPage from './pages/about/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/setting',
    element: <SettingPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/story',
    element: <StoryPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/characters',
    element: <CharactersPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/theater',
    element: <TheaterPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/about',
    element: <AboutPage/>,
    errorElement: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
