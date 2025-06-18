import { StrictMode, useEffect, useRef, useState } from 'react'
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
import TestPage from './pages/test/TestPage';
import { TestContext } from './pages/test/TestContext';
import Buy from './pages/buy/Buy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage showTitle={true} />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <HomePage showTitle={false} />,
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
  },
  {
    path: '/test',
    element: <TestComponent />,
    errorElement: <ErrorPage />
  },
  {
    path: '/buy',
    element: <Buy/>,
    errorElement: <ErrorPage/>
  }
])

function playAudio(ref) {
  ref.current.play();
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
  const setVolume = (volume) => {
    audioRef.current.volume = volume;
  }
  return (
    <>
      <audio ref={audioRef} src={ambianceSound}></audio>
      <AudioContext value={{ setVolumeCallback: setVolume, volume: 0.5 }}>
        <RouterProvider router={router}></RouterProvider>
      </AudioContext>
    </>
  )
}

function TestComponent() {
  const [answers, setAnswers] = useState(new Array(11));
  const [answerIndexes, setAnswerIndexes] = useState(new Array(11));
  
  useEffect(() => {
    answerIndexes[10] = [];
  }, [])

  return (
    <TestContext.Provider value={{ answers, setAnswers, answerIndexes, setAnswerIndexes }}>
      <TestPage />
    </TestContext.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayComponent />
  </StrictMode>,
)