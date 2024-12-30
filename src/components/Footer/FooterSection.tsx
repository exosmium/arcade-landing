import React from 'react';

interface FooterSectionProps {
  title: string;
  links: Array<{ text: string; href: string }>;
}

export default function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="font-orbitron text-lg font-semibold mb-4 text-purple-400">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}