import React from 'react';
import { ChevronRight, Gamepad2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#000_1px),_linear-gradient(90deg,transparent_1px,_#000_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(255,0,255,0.2),transparent_100%)]">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-teal-500/10 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-8">
          <Gamepad2 className="w-16 h-16 mx-auto text-fuchsia-500 animate-pulse" />
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-500 to-teal-500 font-orbitron">
            Unleash Your Inner Gamer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Fully customizable arcade machines designed for the ultimate retro-futuristic gaming experience
          </p>

          <button className="group relative px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,0,255,0.5)] overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Design Yours Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
}