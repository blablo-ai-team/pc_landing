'use client';

import React from 'react';
import Image from 'next/image';
import AppDownload from '@/components/common/AppDownload';
import SocalButton from '@/components/common/SocalButton';



export default function FooterSection() {
  return (
    <footer className="relative section-bg py-0 md:pt-20 overflow-hidden">
     

      <div className="relative max-w-4xl mx-auto px-4">

        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">
            <span className='text-black font-bold'>Follow us </span>for new feature updates
          </p>
           
        </div>

       {/* <SocalButton
         widthSS="168px"
       heightBT='100px'
         iconSize="lg" 
  variant="default"
       className=' hidden sm:block'
       /> */}
       <div className=' hidden sm:block'>
 <SocalButton 
   customWidth={168}
 customHeight={100}  
  iconSize="lg"
  variant="large"
  className="mb-12"
  borderRadius='16px'
 gapContent={4}
/>
       </div>
    
  

      
      </div>
        <div className='relative h-[700px] max-w-[1128px]  mx-auto   rounded-4xl'>
          <Image
            src="/images/test_banner.png"
            alt={'banner'}
            fill
            // width={1128}
            // height={700}

            className="object-cover rounded-4xl z-10  "
          />          
     
          <div className="relative z-20 text-center mb-6 mt-20 pt-[100px]">
            <Image
              src="/images/blablo-logo.svg"
              alt="Blablo Logo"
              width={180}
              height={47}
              className="mx-auto "
            />
          </div>
       
          {/* Tagline */}
          <div className="relative z-20 text-center ">
            <p className="text-black text-lg font-medium max-w-lg mx-auto leading-relaxed drop-shadow-lg">
              Designed and built for busy learners, by busy learners.
            </p>
            <p className="text-gray-500 mt-2 mb-16">© 2025 BlaBlo, Inc. All rights reserved</p>
          </div>

          {/* App Download Section */}
          <div className="relative z-20 max-w-lg mx-auto ">
            <AppDownload />
          </div>


        </div>

    </footer>
  );
}
