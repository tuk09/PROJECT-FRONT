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
          <span className="text-gray-500">Email</span>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="text-gray-500">password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
            name="password"
            value={ input.password }
            onChange={ hdlChange }
          />
        </label>

        <div className="flex gap-5 ">
          <button type="submit" className=" btn-info mt-7 text-white py-2 px-4 rounded-[50px] bg-gray-400 transition duration-300" >Log in</button>
        </div>
      </form>
    </div>
  );
}
