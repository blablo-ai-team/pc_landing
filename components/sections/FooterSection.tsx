'use client';

import React from 'react';
import Image from 'next/image';
import AppDownload from '@/components/common/AppDownload';

// Social media links configuration
const socialLinks = [
  {
    name: 'X (Twitter)',
    icon: '/icons/socal/Vector.svg',
    url: 'https://twitter.com/blablo'
  },
  {
    name: 'TikTok',
    icon: '/icons/socal/tiktok.svg',
    url: 'https://tiktok.com/@blablo'
  },
  {
    name: 'YouTube',
    icon: '/icons/socal/Vector-1.svg',
    url: 'https://youtube.com/@blablo'
  },
  {
    name: 'Instagram',
    icon: '/icons/socal/instar.svg',
    url: 'https://instagram.com/blablo'
  },
  {
    name: 'Threads',
    icon: '/icons/socal/Group.svg',
    url: 'https://threads.net/@blablo'
  },
  {
    name: 'Facebook',
    icon: '/icons/socal/fb.svg',
    url: 'https://facebook.com/blablo'
  }
];

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-br from-green-50 via-pink-50 to-blue-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 via-pink-100/40 to-blue-100/30"></div>
      
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Follow us text */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            Follow us for new feature updates
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-3 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={28}
                height={28}
                className="object-contain"
              />
            </a>
          ))}
        </div>

        {/* Blablo Logo */}
        <div className="text-center mb-6">
          <Image
            src="/images/blablo-logo.svg"
            alt="Blablo Logo"
            width={180}
            height={47}
            className="mx-auto"
          />
        </div>

        {/* Tagline */}
        <div className="text-center mb-16">
          <p className="text-gray-700 text-lg font-medium max-w-lg mx-auto leading-relaxed">
            Designed with ❤️ to feel as fast as love moments, by Kazié teamwork.
          </p>
        </div>

        {/* App Download Section */}
        <div className="max-w-lg mx-auto mb-12">
          <AppDownload />
        </div>
      </div>
    </footer>
  );
}
