import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { FirstSeasonPage } from '../pages/FirstSeason'
import { SecondSeasonPage } from '../pages/SecondSeason'
import { ThirdSeasonPage } from '../pages/ThirdSeason'
import { FourthSeasonPage } from '../pages/FourthSeason'
import { LandingPage } from '../pages/LandingPage'
import { NotFoundPage } from '../pages/NotFoundPage'

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
