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
    name: 'Threads',
    icon: '/icons/socal/Vector-1.svg',
    url: 'https://youtube.com/@blablo'
  },
  {
    name: 'Instagram',
    icon: '/icons/socal/instar.svg',
    url: 'https://instagram.com/blablo'
  },
  {
    name: 'YouTube',
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
     <footer className="relative bg-neutral-50 py-20 overflow-hidden">
   
      
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Follow us text */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            <span className='text-black font-bold'>Follow us </span>for new feature updates
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[168px] h-[100px] bg-[hsl(240,24%,96%)] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={social.name == "YouTube" || social.name =="Facebook" ? 100 :30}
                height={50}
                className="object-contain"
              />
            </a>
          ))}
        </div>

      <div>

      </div >

      <div    
        className='mt-30'
        style={{
          position:"relative",
          backgroundImage: 'url(/images/footer-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
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
Designed and built for busy learners, by busy learners.          </p>
<p>© 2025 BlaBlo, Inc. All rights reserved</p>
        </div>

        {/* App Download Section */}
        <div className="max-w-lg mx-auto mb-12">
          <AppDownload />
        </div>
      </div>
      
      </div>
    </footer>
  );
}
