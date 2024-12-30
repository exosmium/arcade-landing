import React from 'react';
import { Users } from 'lucide-react';

export default function About() {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
                alt="Arcade Workshop"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-xl"></div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <Users className="w-12 h-12 text-purple-500" />
            
            <h2 className="text-4xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500">
              Who We Are
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We're a team of retro-futuristic dreamers dedicated to keeping the spirit of classic arcade gaming alive. 
              Our machines are handcrafted to combine the nostalgia of the past with the tech of tomorrow.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-500">500+</div>
                <div className="text-gray-400">Machines Built</div>
              </div>
              <div className="p-4 rounded-lg bg-teal-900/20 border border-teal-500/20">
                <div className="text-3xl font-bold text-teal-500">50+</div>
                <div className="text-gray-400">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}