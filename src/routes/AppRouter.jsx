import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import LoginForm from '../layout/LoginForm'
import RegisterForm from '../layout/RegisterForm'
import useAuth from '../hooks/useAuth'
import Header from '../layout/Header'
import UserHome from '../layout/UserHome'
import Homepage from '../layout/Homepage'
import AdminDashboard from '../admin/AdminDashboard'
import AdminMovie from '../admin/AdminMovie'
import AdminAnime from '../admin/AdminAnime'
import AdminMenu from '../admin/AdminMenu'
import Movie from '../layout/Movie'
import Anime from '../layout/Anime'
import Choose from '../layout/choose'
import Booking from '../layout/Booking'
import Seats from '../layout/Seats'
import Showtime from '../layout/Showtime'
import Payment from '../layout/Payment'
import Qrcode from '../layout/Qrcode'
import Sittingnumbe from '../layout/Sittingnumbe'
import Delete from '../layout/Delete'




const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children: [
      { index: true, element: <LoginForm /> },
      { path: '/register', element: <RegisterForm />},
    ]
  }
])

const userRouter = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Outlet />
    </>,
    children : [
      { index: true, element: <> <UserHome/> <Movie/> <Anime/> </> },
      { path: '/new', element: <Homepage />}, 
      { path: '/movie', element: <Movie />},
      { path: '/anime', element: <Anime />},
      { path: '/choose', element: <Choose />},
      { path: '/booking', element: <Booking/>},
      { path: '/seats', element: <Seats/>},
      { path: '/showtime', element: <Showtime/>},
      { path: '/payment', element: <Payment/>},
      { path: '/qrcode', element: <Qrcode/>},
      { path: '/sittingnumbe', element: <Sittingnumbe/>},
      { path: '/Delete', element: <Delete/>}
    ]
  }
])

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <div className='flex flex-row px-4 py-6 gap-x-4'>
      <AdminMenu/>
      <Outlet />
    </div>,
    children: [
      { index: true, element: <AdminMenu /> },
      { path: '/AdminMenu', element: <AdminMenu /> },
      { path: '/AdminDashboard', element: <AdminDashboard to='/' /> },
      { path: '/AdminMovie', element: <AdminMovie to='/' /> },
      { path: '/AdminAnime', element: <AdminAnime to='/' /> },
    ]
  }
])


export default function AppRouter() {
  const { user } = useAuth()
  const finalRouter = !user?.id ? guestRouter : user.role === 'ADMIN' ? adminRouter : userRouter
  return (
    <>
      <RouterProvider router={finalRouter} />
    </>
  )
}