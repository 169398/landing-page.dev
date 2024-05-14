import React from 'react'
import { Vortex } from './ui/vortex'
import Emoji from 'react-emoji-render'
import { WavyBackground } from './ui/wavy-background'
import Image from 'next/image'
import Link from 'next/link'
import EmailForm from "@/components/EmailFom";


export function Header() {
  return (
    <div
    className="w-full mx-auto rounded-md h-1/2 overflow-hidden"

    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-0
          w-full h-full"
      >
<div className='text-center'>
  <Image
    src='/assets/images/logo.png'
    alt='logo'
    width={200}
    height={200}
    className='inline-block cursor-pointer'
  /> 
 
</div>


        <h2 className="text-white text-1xl md:text-4xl font-bold text-center">
          Sell like a Boss, Buy with confidence🛍️
        </h2>
        <br/>
        <p className="text-white text-sm md:text-2xl font-normal  max-w-xl mt-6 text-center">
        Tired of crowded flea markets and unreliable deals? Swipe is your one-stop shop for a seamless campus buying and selling experience.        </p>
        <br/>
        <EmailForm/>
        <br/>

        <p className=" font-bold text-4xl text-center text-cyan-300"> Swipe offers<Emoji text="👇" /> </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6"></div>

      </Vortex>


    </div>
  )
}
