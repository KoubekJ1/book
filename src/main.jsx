import { StrictMode, useEffect, useRef } from 'react'
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
import OpinionPage from './pages/opinion/OpinionPage';
import ReactAudioPlayer from 'react-audio-player';

import { SiteContext } from './SiteContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/setting',
    element: <SettingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/story',
    element: <StoryPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/characters',
    element: <CharactersPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/theater',
    element: <TheaterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/opinion',
    element: <OpinionPage />,
    errorElement: <ErrorPage />
  }
])

function playAudio(ref)
{
  ref.current.audioEl.current.play();
}

function DisplayComponent() {
  const audioRef = useRef(null);
  const clickCallback = () => {
    playAudio(audioRef);
    document.removeEventListener('click', clickCallback);
  }
  document.addEventListener('click', clickCallback);

  /*useEffect(() => {
    console.log(audioRef.current.audioEl.current);
    audioRef.current.audioEl.current.play();
  }, []);*/

  /*setTimeout(() => {
    //audioRef.current.audioEl.current.play();
  }, 500)*/

  return (
    <SiteContext.Provider value={{entered: false}}>
      <ReactAudioPlayer ref={audioRef} src={ambianceSound} />
      <RouterProvider router={router}></RouterProvider>
    </SiteContext.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayComponent />
  </StrictMode>,
)