import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Alex Chen",
    location: "Tokyo, Japan",
    text: "The customization options are incredible! I built my dream arcade with all my favorite retro games. The build quality is outstanding.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sarah Johnson",
    location: "London, UK",
    text: "From order to delivery, the whole process was seamless. The team was incredibly helpful with my custom design requests.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Marcus Rodriguez",
    location: "San Francisco, USA",
    text: "This arcade machine is the centerpiece of my game room. The LED effects and sound quality are phenomenal!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500">
          Customer Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}