import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { FirstSeasonPage } from '../pages/FirstSeason'
import { SecondSeasonPage } from '../pages/SecondSeason'
import { ThirdSeasonPage } from '../pages/ThirdSeason'
import { FourthSeasonPage } from '../pages/FourthSeason'
import { LandingPage } from '../pages/LandingPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { FirstSeasonStoryPage } from '../pages/FirstSeason/Story'
import { FirstSeasonNewsPage } from '../pages/FirstSeason/News'
import { FirstSeasonStreamingPage } from '../pages/FirstSeason/Streaming'
import { FirstSeasonBluRayPage } from '../pages/FirstSeason/BluRay'
import { FirstSeasonCharacterPage } from '../pages/FirstSeason/Character'

const router = createBrowserRouter([
   {
      path: '/',
      element: <LandingPage />,
   },
   {
      path: '/1st',
      element: <FirstSeasonPage />,
   },
   {
      path: '/1st/story/',
      element: <FirstSeasonStoryPage />,
   },
   {
      path: '/1st/news/',
      element: <FirstSeasonNewsPage />,
   },
   {
      path: '/1st/streaming/',
      element: <FirstSeasonStreamingPage />,
   },
   {
      path: '/1st/bd/',
      element: <FirstSeasonBluRayPage />,
   },
   {
      path: '/1st/character/',
      element: <FirstSeasonCharacterPage />,
   },
   {
      path: '/2nd',
      element: <SecondSeasonPage />,
   },
   {
      path: '/3rd',
      element: <ThirdSeasonPage />,
   },
   {
      path: '/movie',
      element: <FourthSeasonPage />,
   },
   {
      path: '*',
      element: <NotFoundPage />,
   },
])

export const AppRouter = () => {
   return <RouterProvider router={router}></RouterProvider>
}
