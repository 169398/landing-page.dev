"use client";
import React from "react";
import Link from "next/link";
import { FloatingNav } from './ui/floating-navbar'


const Hero = () => {
 
  const navbar={
    name: 'Swipe',
    link: '/',
  }

  return (
    <div className="fixed top-0 inset-x-0 h-fit cursor-pointer bg-zinc-400 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex  items-center justify-between gap-2">
       
        <Link href="/">
        <div className="text-pink-700   text-3xl font-bold text-right   md:block">

          <FloatingNav navItems={[navbar]} />
        </div>

         
        </Link>
      </div>
    </div>
  );
};

export default Hero;
