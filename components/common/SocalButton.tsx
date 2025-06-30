import Image from 'next/image';

interface SocalButtonProps {
  className?: string;
  widthSS?: string;
  heightSS?: number;
  iconSize?: 'sm' | 'md' | 'lg';
   variant?: 'compact' | 'default' | 'large';
  buttonradius?:string;
  heightBT?:string;
    customWidth?: number;
  customHeight?: number;
    borderRadius?:string;
    gapContent?: number
}

// Social media links configuration
const socialLinks = [
  {
     iconSize: { sm: 20, md: 24, lg: 32 },
    name: 'X (Twitter)',
    icon: '/icons/socal/Vector.svg',
    url: 'https://twitter.com/blablo'
  },
  {
      iconSize: { sm: 20, md: 24, lg: 32 },
    name: 'TikTok',
    icon: '/icons/socal/tiktok.svg',
    url: 'https://tiktok.com/@blablo'
  },
  {
    iconSize: { sm: 20, md: 24, lg: 32 },
    name: 'Threads',
    icon: '/icons/socal/Vector-1.svg',
    url: 'https://youtube.com/@blablo'
  },
  {
   iconSize: { sm: 20, md: 34, lg: 40 },
    name: 'Instagram',
    icon: '/icons/socal/instar.svg',
    url: 'https://instagram.com/blablo'
  },
  {
     iconSize: { sm: 45, md: 28, lg:80 } ,
    name: 'YouTube',
    icon: '/icons/socal/Group.svg',
    url: 'https://threads.net/@blablo'
  },
  {
      iconSize: { sm: 45, md: 28, lg: 80 } ,
    name: 'Facebook',
    icon: '/icons/socal/fb.svg',
    url: 'https://facebook.com/blablo'
  }
];

const containerConfig = {
  sm: 'w-10 h-10 p-2',
  md: 'w-12 h-12 p-2.5',
  lg: 'w-16 h-16 p-3'
};



export default function SocalButton({ 
  className = "", 

   iconSize = 'md',
gapContent = 3,
      customWidth,
  customHeight,
    borderRadius = '12px'
}: SocalButtonProps) {
  
  return (
    <div className={`grid grid-cols-3 gap-${gapContent}   md:flex md:justify-center md:items-center   ${className}`}>
              {socialLinks.map((social, index) => {
         const iconDimension = social.iconSize[iconSize];
        const containerClasses = containerConfig[iconSize];
            // Custom sizing if provided
        const containerStyle = customWidth && customHeight ? {
          width: `${customWidth}px`,
          height: `${customHeight}px`,
          borderRadius: borderRadius
        } : {};
             return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
         
              // ${customWidth && customHeight ? '' : containerClasses}
              mx-auto bg-red sm:bg-[#F2F2F7] rounded-xl
              flex items-center justify-center 
             hover:shadow-md
              transition-all duration-300 
               hover:bg-white
              focus:outline-none focus:ring-2 focus:ring-[#EE33DF] focus:ring-offset-2
              ${className}
            `}
            style={containerStyle}
            aria-label={`Follow us on ${social.name}`}
          >
            <Image
              src={social.icon}
              alt={`${social.name} icon`}
              width={iconDimension}
              height={iconDimension}
              className="object-contain"
              loading="lazy"
            />
          </a>
        );
                
              }
              
              )}
            </div>
    )
}
