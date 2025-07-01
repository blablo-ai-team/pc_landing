'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AppDownload from '@/components/common/AppDownload';
import SocalButton from '@/components/common/SocalButton';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-3xl p-8 mx-4  max-w-2xl w-full shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#F2F2F7] hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Title */}
            <div className="text-center mt-10 ">
              <h2 className="text-2xl text-nowrap  sm:text-5xl font-medium text-black mb-2">
                Turn Dead Time into
              </h2>
              <div className="relative inline-block mb-8">
                {/* Star icon - top left */}
                <Image
                  src="/icons/Soft_star_pink.svg"
                  alt=""
                  width={19}
                  height={21}
                  className="absolute -top-2 -left-3"
                />
                {/* Star icon - bottom left */}
                <Image
                  src="/icons/Soft_star_pink.svg"
                  alt=""
                  width={11}
                  height={12}
                  className="absolute -bottom-1 left-12"
                />
                {/* Main text with gradient */}
                <span
                  className="text-[36px] max-w-[249px] text-nowrap   sm:text-[50px] font-bold text-transparent bg-clip-text a"
                  style={{
                    background: 'linear-gradient(90deg, #FF4BA0 0%, #CE6CFF 45%, #3260FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: '#FF4BA0',
                    lineHeight: 1,
                  }}
                >
                  Fluent English
                </span>
                {/* Star icon - right */}
                <Image
                  src="/icons/Soft_star_blue.svg"
                  alt=""
                  width={13}
                  height={14}
                  className="absolute top-0 -right-2"
                />
              </div>
              {/* Social Media Links */}
              <AppDownload

              />
              <div className=' hidden sm:block'>
                <SocalButton
                  iconSize="sm"
                  variant="compact"
                  customWidth={125}
                  customHeight={32}
                  borderRadius="4px"
                  className="mt-5 mx-[90px]"
                />
              </div>

              <Image
                src="/images/blablo-logo.svg"
                alt="Blablo Logo"
                width={180}
                height={47}
                className="block sm:hidden pt-40 mx-auto"
              />

            </div>




          </motion.div>

        </div>

      )}
    </AnimatePresence>
  );
};

export default AppDownloadModal;
