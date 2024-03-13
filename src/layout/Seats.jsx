import React, { useState } from "react";
import { Link } from "react-router-dom";

const seats = () => {
  const [selectedChoose, setSelectedTable, selectedTable] = useState(null);

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const movies = [
    {
      id: 1,
      imageSrc: "/src/assets/Avatar.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
  ];
  const tables = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
    { number: 11 },
    { number: 12 },
    { number: 13 },
    { number: 14 },
    { number: 15 },
    { number: 16 },
  ];

  return (
    <div className="mt-20 p-5 border w-1/3 min-w-[800px]  mx-auto rounded-[10px] bg-zinc-100 shadow-md flex">
      <div>
        {movies.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div>

              <p className="btn-info mx-20 pb-8">Choose seats</p>
            </div>
            <div>
              <img src={product.imageSrc} alt={product.imageAlt} />
            </div>
            <div className="flex justify-end pr-10">
              <Link to="/payment">
                <button
                  type="submit"
                  className="btn-info mt-20 text-white px-20 rounded-[50px] bg-red-700 transition duration-300"> Bs 45.00 Continue</button>
              </Link>
            </div>
          </a>
        ))}
      </div>

      <div>
      <div className="p-2  flex flex-wrap justify-between">
         <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-52 me-2 mb-5 ">Screen</button>
        </div>
      <div className="p-4 flex flex-wrap justify-between">
        {tables.map((table) => (
          <Link
            to="/sittingnumbe"
            key={table.number}
            onClick={() => handleTableSelect(table.number)}
            className={` h-12 bg-blue-500 text-white mx-auto rounded-full shadow-xl mb-24 p-4  text-center ${
              selectedTable === table.number
                ? "bg-green-800"
                : "hover:bg-red-700"
            } `}
          >
            <p className="font-bold">ที่นั่ง {table.number}</p>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
};

export default seats;
