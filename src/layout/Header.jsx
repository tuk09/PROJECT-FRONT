import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: <b>Login</b> },
  { to : '/register', text: <b>Sign Up</b> },

]

const userNav = [
  // { to : '/', text: 'Home' },
  // { to : '/movie', text: 'Movie' },
  // { to : '/anime', text: 'Anime' },
]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100 border-b-2 border-solid border-gray-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">The Movie
        {/* {user?.id ? user.username : ''} */}
        </a>
      </div>
      <div className="">
        <Link to={user?.id? "/" : "/"} className="btn btn-ghost text-sm">
        Home
        </Link>
      </div>
      <div className="">
        <Link to={user?.id? "/movie" : "/"} className="btn btn-ghost text-sm">
        Movie
        </Link>
      </div>
      <div className="flex-1">
        <Link to={user?.id? "/anime" : "/"} className="btn btn-ghost text-sm">
        Anime
        </Link>
      </div>
      <div class="relative overflow-x-auto ">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-600"/>
        <div>
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li className='btn btn-ghost text-sm'>
              <Link to='#' onClick={hdlLogout}>Logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
    </div>
  );
}