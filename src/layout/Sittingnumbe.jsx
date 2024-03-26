import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function sittingnumbe() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  const hdlChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-20 border w-1/3 min-w-[600px] mx-auto rounded-[15px] mt-8 bg-gray-200 shadow-md">
      <p className="pb-10 mx-32 text-red-600">กรุณากรอกหมายเลขที่นั่ง</p>
      <form className="flex flex-col gap-4 items-center" onSubmit={hdlSubmit}>
        <label className="w-full max-w-xs">
          <span className="text-gray-500">seat</span>
          <input
            type="text"
            className="mt-5 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>
        
        <label className="w-full max-w-xs">
          <span className="text-gray-500">Name</span>
          <input
            type="text"
            className="mt-5 block w-full h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="name"
            value={input.name}
            onChange={hdlChange}
          />
           <div className="flex gap-5 ">
          <Link to="/seats" type="submit" className=" btn-info mt-10 text-white py-2 px-4 mx-auto rounded-[50px] bg-gray-400 transition duration-300" >ตกลง</Link>
        </div>
        </label>
      </form>
    </div>
  );
}
