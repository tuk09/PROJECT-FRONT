import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username : '',
    password : '', 
    confirmPassword : '',
     email : '', 
     otheruserdetails : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm password')
      }
      const rs = await axios.post('http://localhost:8000/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
    <div className="p-5 border w-1/3 min-w-[300px] mx-auto rounded-[15px] mt-8 bg-zinc-200 shadow-md">
    <div className="font-bold text-2xl mb-5 text-center">Enter your data</div>
    <form className="flex flex-col gap-4 items-center" onSubmit={hdlSubmit}>
      <label className="w-full max-w-xs">
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-opacity-50"
          name="username"
          value={input.username}
          onChange={hdlChange}
        />
      </label>
      <label className="w-full max-w-xs">
        <div className="label">
          <span className="label-text">E-mail</span>
        </div>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-opacity-50"
          name="email"
          value={input.email}
          onChange={hdlChange}
        />
      </label>
      <label className="w-full max-w-xs">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-opacity-50"
          name="password"
          value={input.password}
          onChange={hdlChange}
        />
      </label>
      <label className="w-full max-w-xs">
        <div className="label">
          <span className="label-text">Confirm Password</span>
        </div>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-opacity-50"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={hdlChange}
        />
      </label>
      <label className="w-full max-w-xs">
        <div className="label">
          <span className="label-text">otheruserdetails</span>
        </div>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-opacity-50"
          name="otheruserdetails"
          value={input.otheruserdetails}
          onChange={hdlChange}
        />
      </label>
        <div className="flex gap-5 ">
          <button type="submit" className=" btn-info mt-7 text-white py-2 px-4 rounded-[50px] bg-gray-400 transition duration-300" >Sign up</button>
        </div>
      </form>
    </div>
  );
}
