import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const movies = [
    {
        id: 1,
        name: 'Avatar (2566)',
        imageSrc: '/src/assets/Avatar.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'Frozen (2566)',
        href: '#',
        imageSrc: '/src/assets/Frozen.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'บ้านเช่าบูชายัญ (2566)',
        imageSrc: '/src/assets/บ้านเช่าบูชายัญ.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'Long live love (2566)',
        imageSrc: '/src/assets/Long live love .jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    {
        id: 1,
        name: 'Man Suang (2566)',
        imageSrc: '/src/assets/Man Suang.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 2,
        name: 'ธี่หยด (2566)',
        imageSrc: '/src/assets/ธี่หยด.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 3,
        name: 'ปราณี (2566)',
        imageSrc: '/src/assets/ปราณี.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 4,
        name: 'สัปเหร่อ  (2566)',
        imageSrc: '/src/assets/สัปเหร่อ.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 4,
        name: 'Aquaman  (2566)',
        imageSrc: '/src/assets/Aquaman.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
  ]
  
  export default function Movie() {
    return (
        <div className="bg-white">
          <h2 className="mt-8 px-16 font-bold text-xl">Movie</h2>
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {movies.map((product) => (
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