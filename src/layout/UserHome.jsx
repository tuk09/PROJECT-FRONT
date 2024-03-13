import React from 'react'
import { Carousel } from 'flowbite-react';

export default function UserHome() {
  return (
    <div className="mt-8 h-64 sm:h-96 xl:h-96 2xl:h-96 ">
      <Carousel pauseOnHover>
        <img src="/src/assets/Maleficent.jpg" alt="..." className="h-full w-full object-cover"/>
        <img src="/src/assets/Frozenn.jpg" alt="..." className="h-full w-full object-cover"/>
        <img src="/src/assets/Spy Kyoushitsu1.jpg" alt="..." className="h-full w-full object-cover"/>
        <img src="/src/assets/Avatar1.jpg" alt="..." className="h-full w-full object-cover"/>
      </Carousel>
    </div>
  );
}