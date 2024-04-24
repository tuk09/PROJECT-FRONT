
import axios from "axios";
import { useState } from "react";

export default function Reservation() {
  const [input, setInput] = useState({
    date: "",
    userId: "",
    showtimeId: "",
    movieId: "",
    numberoftickets: "",
   
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      
      const token = localStorage.getItem("token");
      const dateTime = new Date(input.date).toISOString();
      const rs = await axios.post("http://localhost:8000/booking/bookings", {
        userId: parseInt(input.userId),
        showtimeId: parseInt(input.showtimeId),
        movieId: parseInt(input.movieId),
        date: dateTime,
        numberoftickets: parseInt(input.numberoftickets),
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Create new OK");
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-10 border w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto rounded-lg mt-10  bg-gray-50/95">
      <h1 className="text-3xl mb-6 font-bold text-center text-blue-500">
      กรุณากรอกหมายเลขที่นั่ง
      </h1>
      <form className="flex flex-col gap-4" onSubmit={hdlSubmit}>
        <span className="text-sm font-semibold text-gray-600 mb-1">
        userId
        </span>
        <label className="input input-bordered flex items-center gap-2 text-sm font-semibold text-gray-600 mb-1">
          
          <input
            type="number"
            id="userId"
            className="grow"
            name="userId"
            placeholder=" | userId"
            value={input.userId}
            onChange={hdlChange}
          />
        </label>
        

        <span className="text-sm font-semibold text-gray-600 mb-1">
        showtimeId
        </span>
        <label className="input input-bordered flex items-center gap-2 text-sm font-semibold text-gray-600 mb-1">
          
          <input
            type="number"
            id="showtimeId"
            className="grow"
            name="showtimeId"
            placeholder=" | โต๊ะที่"
            value={input.showtimeId}
            onChange={hdlChange}
          />
        </label>

        <span className="text-sm font-semibold text-gray-600 mb-1">
        movieId
        </span>
        <label className="input input-bordered flex items-center gap-2 text-sm font-semibold text-gray-600 mb-1">
          <input
            type="number"
            id="movieId"
            className="grow"
            name="movieId"
            placeholder=" | ร้านที่"
            value={input.movieId}
            onChange={hdlChange}
          />
        </label>

        <span className="text-sm font-semibold text-gray-600 mb-1">
        เวลาจอง
        </span>
        <label  className="input input-bordered flex items-center gap-2 text-sm font-semibold text-gray-600 mb-1">
          <input
           type="date" 
           id="date"
            className="grow"
            name="date"
           value={input.date} 
           onChange={hdlChange} />
        </label>

        <span className="text-sm font-semibold text-gray-600 mb-1">
        numberoftickets
        </span>
        <label className="input input-bordered flex items-center gap-2 text-sm font-semibold text-gray-600 mb-1">
          <input
            type="number"
            id="numberoftickets"
            className="grow"
            name="numberoftickets"
            placeholder=" | tableId"
            value={input.numberoftickets}
            onChange={hdlChange}
          />
        </label>

        <button
          type="submit"
          className="btn btn-info bg-gray-500 text-sm font-semibold text-gray-600 mb-1"
        >
            ยืนยัน
        </button>
      </form>
    </div>
  );
}



