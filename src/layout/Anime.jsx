import React from 'react'
import {Link} from 'react-router-dom'

const anime = [
    {
        id: 1,
        name: 'Ryman’s (2566)',
        imageSrc: '/src/assets/Ryman’s.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Black Clover  (2566)',
        // href: '#',
        imageSrc: '/src/assets/Black Clover .jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'Jujutsu Kaisen  (2566)',
        imageSrc: '/src/assets/Jujutsu Kaisen .jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'Haikyuu (2566)',
        imageSrc: '/src/assets/Haikyuu.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    {
        id: 1,
        name: 'Horimiya  (2566)',
        imageSrc: '/src/assets/Horimiya.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Vinland Saga (2566)',
        imageSrc: '/src/assets/Vinland Saga.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'The Record of Ragnarok  (2566)',
        imageSrc: '/src/assets/The Record of Ragnarok .jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'Spy Kyoushitsu  (2566)',
        // href: '#',
        imageSrc: '/src/assets/Spy Kyoushitsu.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 4,
        name: 'ผ่าพิภพไททัน  (2566)',
        // href: '#',
        imageSrc: '/src/assets/ผ่าพิภพไททัน.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
  ]
  
  export default function Anime() {
    return (
        <div className="bg-white">
        <h2 className="mt-8 px-16 font-bold text-xl">Anime</h2>
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {anime.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Link to="/choose"><img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  /></Link>
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-orange-400">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
        </div>
        
    )
  }