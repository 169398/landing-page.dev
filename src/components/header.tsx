import React from 'react'
import { Vortex } from './ui/vortex'

export function Header() {
  return (
    <div
    className="w-full mx-auto rounded-md  h-screen overflow-hidden"

    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-0
          w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Sell like a Boss😎 Buy with confidence🛍️
        </h2>
        <p className="text-white text-sm md:text-2xl  max-w-xl mt-6 text-center">
         Tired with flea market drama ,join swipe ,the easiest way for to buy and sell on cumpus hassle free and secure transactions
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6"></div>
      </Vortex>


    </div>
  )
}
