'use client'

import Image from 'next/image'


const Card3DSection: React.FC = () => {



  return (
    <section className="w-full h-[300px] pt-20 pb-16 section-bg ">
      <div className="max-w-7xl ">
        <div className="flex justify-center items-center w-full ">
            <Image
                    src={'/images/card3d.png'}
                  alt="car3d"
                    fill
                   
                    // priority={index === 0 || index === total - 1}
                    className="object-contain mt-20 translate-y-[600px]"
                  
                  />
        </div>
    
        {/* Cards Container - Elliptical/Curved Layout */}
        {/* <div className="flex justify-center items-center w-full">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"            style={{
              width: '1200px',
              height: '600px',
              perspective: '2000px',
              perspectiveOrigin: 'center center',
            }}
          >
            {galleryCards.map((card, index) => {
            const offset = index - center;
        const rotate = offset * 6; // Góc nghiêng theo vị trí
        const offsetY = Math.abs(offset) * 20; // Dịch xuống theo độ cong
        const zIndex = 100 - Math.abs(offset); // Ưu tiên thẻ giữa
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                // className="absolute group cursor-pointer"
                  style={{
        transform: `rotate(${rotate}deg) translateY(${offsetY}px)`,
        zIndex: zIndex,
      }}
      whileHover={{ scale: 1.1 }}
      className="rounded-2xl shadow-xl overflow-hidden w-[clamp(180px,18vw,240px)] transition-all duration-300"
              >                <div
                  className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20"
                  style={{
                    width: `276px`,
                    height: `400px`,
                    boxShadow: `
                      0 ${15 + zIndex}px ${30 + zIndex}px rgba(0, 0, 0, 0.2),
                      0 0 0 1px rgba(255, 255, 255, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2)
                    `,
                    background: '#D1D1D6',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '16px',
                  }}
                >
                  <Image
                    src={card.imageSrc || ''}
                    alt={card.imageAlt || card.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 300px"
                    // priority={index === 0 || index === total - 1}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    style={{
                      borderRadius: '16px',
                      filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div> */}
      </div>
    </section>
)
}

export default Card3DSection
