import React from 'react';
import FooterSection from './FooterSection';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerSections = [
  {
    title: "Products",
    links: [
      { text: "Custom Arcades", href: "#" },
      { text: "Ready to Ship", href: "#" },
      { text: "Parts & Accessories", href: "#" },
      { text: "Gift Cards", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { text: "Contact Us", href: "#" },
      { text: "FAQ", href: "#" },
      { text: "Shipping", href: "#" },
      { text: "Returns", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Press Kit", href: "#" }
    ]
  }
];

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Youtube, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
          
          <div>
            <h3 className="font-orbitron text-lg font-semibold mb-4 text-purple-400">Connect</h3>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} RetroFuture Arcades. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}