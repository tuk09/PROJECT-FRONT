import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [selectedEditCart, setSelectedEditCart] = useState(null);

  const showModal = (booking) => {
    setSelectedEditCart(booking);
  };

  const closeModal = () => {
    setSelectedEditCart(null);
  };

  const carts = [
    {
      id: 1,
      name: 'Avatar 2: El camino del agua',
      location: "Cinema+",
      date: '14/2567/15:00',
      dubbed: 'Dubbed',
      imageSrc: '/src/assets/Frozen.jpg',
    },
    {
      id: 2,
      name: 'Avatar 2: El camino del agua',
      location: "Cinema+",
      date: '14/2567/15:00',
      dubbed: 'Dubbed',
      imageSrc: '/src/assets/Ryman’s.jpg',
    },
  ];

  return (
    <div className="flex">
      <div className="p-4 border w-2/3 min-w-full mx-auto h-full mt-16 bg-white border-white relative">
        {carts.map((product) => (
          <div key={product.id} className="w-1/2 border mb-8 p-4 flex items-center rounded-[10px] bg-gray-300 h-56 mx-auto">
            <div className="w-48">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="cursor-pointer"
              />
            </div>
            <div className="ml-4 flex-1 flex-col">
              <h6 className="mt-4 text-[12px] text-gray-700">{product.name}</h6>
              <h6 className="mt-4 text-[12px] text-gray-700">{product.location}</h6>
              <h6 className="mt-4 text-[12px] text-gray-700">{product.date}</h6>
              <h6 className="mt-4 text-[12px] text-gray-700">{product.dubbed}</h6>
              <div className="card-actions">
                <p className="mt-1 flex lg:flex-1 text-lg font-medium text-orange-400">{product.price}</p>
                <button className="btn" onClick={() => showModal(product)}>แก้ไขรายการ</button>
                <button className="btn">ลบรายการ</button>
                {selectedEditCart && (
                  <dialog open className="modal">
                    <div className="modal-box max-w-3xl">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                      </form>
                      <h3 className="pb-4 font-bold text-lg"> </h3>
                      <div className="flex">
                        <img src={selectedEditCart.imageSrc} alt={selectedEditCart.imageAlt} />
                        <div className="ml-4 flex-1 flex-col">
                          <p>{selectedEditCart.name}</p>
                          <p className="mt-1 flex lg:flex-1 text-lg font-medium text-orange-400">{selectedEditCart.price}</p>
                        </div>
                      </div>
                    </div>
                  </dialog>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
