import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-purple-500/20 rounded-lg overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center bg-purple-900/20 hover:bg-purple-900/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-white">{question}</span>
        {isOpen ? <ChevronUp className="text-purple-500" /> : <ChevronDown className="text-purple-500" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-black/50">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}