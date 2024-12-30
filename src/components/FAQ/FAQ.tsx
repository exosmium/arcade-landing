import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "How long does it take to build a custom arcade?",
    answer: "Each custom arcade takes 2-3 weeks to build, test, and perfect. This includes the customization process, assembly, and quality assurance."
  },
  {
    question: "What games come pre-installed?",
    answer: "Our arcades come with a curated selection of classic games. We can also customize the game library based on your preferences and licensing requirements."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location."
  },
  {
    question: "What's your warranty policy?",
    answer: "All our arcade machines come with a 2-year warranty covering manufacturing defects and hardware issues. Extended warranty options are available."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}