import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  image: string;
}

export default function TestimonialCard({ name, location, text, image }: TestimonialCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-gradient-to-b from-purple-900/20 to-black border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}