import React, { useState } from "react";
import { Link } from "react-router-dom";

const qrcode = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const movies = [
    {
      id: 1,
      imageSrc: "/src/assets/QRcode.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      href: "/" 
    },
  ];
 

  return (
    <div className="mt-10 p-5 border w-1/3 w- min-w-[600px] h-auto rounded-[20px] mx-auto text-white shadow-md flex">
      <div>
        {movies.map((product) => (
          <Link key={product.id} to={product.href} className="group">
            <div className="flex gap-5 pb-10 pl-10">
                <p className="text-red-600 font-bold text-2xl mx-44">Mobile ticket</p>
              </div>
              <p className="text-black text-center">Once you buy a movie ticket </p>
              <p className="text-black text-center"> spsimply scan the barcode to </p>
              <p className="text-black text-center"> acces to your movie</p>
            <div className="w-56 mx-44  ">
              <img src={product.imageSrc} alt={product.imageAlt} />
            </div>

            <div className="flex gap-5 pb-3 pl-1 ">
                <p className="text-gray-500 mx-48">Date: Dic 14  Time: 15:30</p>
              </div>
              <div className="flex gap-5 pb-10 pl-1 ">
              <p className="text-gray-500 mx-56 ">Row: 1  Seats: 1,2</p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default qrcode;
