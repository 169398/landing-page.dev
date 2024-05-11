"use client";

import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Vortex } from "./ui/vortex";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";


export function Action() {
  return (

<LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="text-center">
          <p className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var">
          Start your dream business <br /> with swipe today
          </p>
          <p className="text-base md:text-lg mt-4 font-normal inter-var">
          Ready to be your own boss? Set up your shop on Swipe in minutes and start selling today Share Swipe with your friends and family,together we can build something amazing          </p>
        </div>
        </motion.h1>
    </LampContainer>
     

  );
}
