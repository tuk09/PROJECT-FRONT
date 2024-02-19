import axios from 'axios'
import {useState} from "react";
import useAuth from '../hooks/useAuth'

export default function LoginForm() {
  const { setUser } = useAuth()
  const [input, setInput] = useState({
    username : '', 
    password : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      
      const rs = await axios.post('http://localhost:8000/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8000/auth/me', {
        headers : { Authorization : `Bearer ${rs.data.token}` }
      })
      console.log(rs1.data)
      setUser(rs1.data)
      
    }catch(err) {
      console.log( err.message)
    }
  }

  return (
    <div className="p-5 border w-1/3 min-w-[300px] mx-auto rounded-[15px] mt-8 bg-zinc-200 shadow-md">
      <div className="font-bold text-2xl mb-5 text-center">Enter your data</div>

      <form className="flex flex-col gap-4 items-center" onSubmit={hdlSubmit}>
        <label className="w-full max-w-xs">
          <span className="text-gray-500">username</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>

        <label className="w-full max-w-xs">
          <span className="text-gray-500">Password</span>
          <input
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>

        <div className="flex gap-5 ">
          <button type="submit" className=" btn-info mt-7 text-white py-2 px-4 rounded-[50px] bg-gray-400 transition duration-300" >Log in</button>
        </div>
      </form>
    </div>
  );
}