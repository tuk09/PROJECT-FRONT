import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sittingnumbe = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const movies = [
    {
      id: 1,
      imageSrc: "/src/assets/Long live love .jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      href: "/booking" 
    },
  ];
  const tables = [
    { number: 10},
    { number: 15 },
    { number: 20},
    { number: 30},
    { number: 40 },
    { number: 50 },
    { number: 55 },
    { number: 59 },
  ];

  return (
    <div className="mt-20 p-4 border w-1/3 min-w-[800px] mx-auto bg-zinc-100 shadow-md flex">
      <div>
      <div>
          <p className="text-red-600 font-semibold mt-10 mx-24">เลือกรอบฉายภาพยนตร์</p>
      </div>
        {movies.map((product) => (
          <Link key={product.id} to={product.href} className="group">
            <div className="flex gap-5 pb-5 pl-5">
            <Link to="/seats"><button type="submit"  className="btn-info mt-10 mx-20 text-white py-2 px-10 rounded-[50px] bg-gray-500 transition ">Continue</button></Link>
              </div>
            <div className="w-60 mx-14">
              <img src={product.imageSrc} alt={product.imageAlt} />
            </div>
          </Link>
        ))}
      </div>
  
      <div className="p-10 flex flex-wrap justify-between">
        {tables.map((table, index) => (
          <Link
            key={index}
            to="/seats"
            onClick={() => handleTableSelect(table.number)}
            className={`h-10 bg-gray-500 text-white mx-8 rounded-[3px] shadow-xl mb-10 p-3 text-center ${selectedTable === table.number ? "bg-green-800" : "hover:bg-red-700"}`}
          >
            <p className="font-bold">19: {table.number}</p>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Sittingnumbe;
