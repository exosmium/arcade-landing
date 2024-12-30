import React from 'react';
import { Settings, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Infinite Customization',
    description: 'Choose from countless options to create your perfect arcade setup'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Premium Build Quality',
    description: 'Built to last with premium materials and expert craftsmanship'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Seamless Setup',
    description: 'Easy assembly with our step-by-step guide and support team'
  }
];

export default function Features() {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-gradient-to-b from-purple-900/20 to-black border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}