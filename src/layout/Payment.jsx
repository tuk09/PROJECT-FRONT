import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {
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
    <div className="p-20 border w-1/3 min-w-[600px] mx-auto rounded-[15px] mt-8 bg-gray-100 shadow-md">
      <div className="font-bold text-2xl mb-5 text-center">Paymentt</div>
      <div className="font-bold text-2xl mb-5 text-center">เครดิตการ์ด/เดบิตการ์ด</div>
      <p className="pb-10 mx-28">กรุณากรอกรายละเอียดของบัตร</p>

      <form className="flex flex-col gap-4 items-center" onSubmit={hdlSubmit}>
        <label className="w-full max-w-xs">
          <span className="text-gray-500">Card number</span>
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
        </label>

        <div className="flex justify-end pr-5">
        <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-10 mt-10 me-2 mb-2">ยอดที่ต้อง   $300.00</button>
        </div>

        <div>
        <Link to="/qrcode" type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 mt-2 me-2 mb-2">ชำระเงิน</Link>
        </div>
        
      </form>
    </div>
  );
}
