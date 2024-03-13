import React, { useState } from "react";
import { Link } from "react-router-dom";

const Choose = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const movies = [
    {
      id: 1,
      imageSrc: "/src/assets/ปราณี.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      href: "/booking" 
    },
  ];
  const tables = [
    { number: 14 },
    { number: 14 },
    { number: 14 },
    { number: 14 },
    { number: 14 },
    { number: 14 },
    { number: 14 },
    { number: 14 },
    // { number: 14 },
    // { number: 14 },
    // { number: 14 },
  ];

  return (
    <div className="mt-20 p-5 border w-1/3 min-w-[800px] mx-auto bg-zinc-200 shadow-md flex">
      <div>
        {movies.map((product) => (
          <Link key={product.id} to={product.href} className="group">
            <div>
              <img src={product.imageSrc} alt={product.imageAlt} />
              <div className="flex gap-5">
                <button type="submit" className="btn-info mt-10 text-white py-2 px-5 rounded-[50px] bg-gray-500 transition duration-300">Continue</button>
                <Link to="/showtime"><button type="submit" className="btn-info mt-10 text-white py-2 px-5 rounded-[50px] bg-gray-500 transition duration-300">Showtime</button></Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
  
      <div className="p-7 flex flex-wrap justify-between">
        {tables.map((table, index) => (
          <Link
            key={index}
            to="/booking"
            onClick={() => handleTableSelect(table.number)}
            className={`h-12 bg-gray-400 text-white mx-auto rounded-[10px] shadow-xl mb-24 p-4 text-center ${selectedTable === table.number ? "bg-green-800" : "hover:bg-red-700"}`}
          >
            <p className="font-bold">Wed dic {table.number}</p>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Choose;
