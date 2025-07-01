export interface HeroContent {
  branding: {
    logoSrc: string
    logoAlt: string
    ctaButton: {
      text: string
      iconSrc: string
      iconAlt: string
      iconSticky :string,
    }
  }
  headline: {
    mainText: string
    highlightText: string
    decorativeIcons: {
      pinkStarTopLeft: string
      pinkStarBottomLeft: string
      blueStarRight: string
    }
  }
  subtext: string
  callToAction: {
    boostText: string
    downloadText: string
  }
  appStores: {
    googlePlay: {
      url: string
      buttonImage: string
      qrCode: string
      alt: string
    }
    appStore: {
      url: string
      buttonImage: string
      qrCode: string
      alt: string
    }
  }

}
export interface heroImage  {
  id : Number
      src : string
      alt : string,
        width: number,
      height : number
}

export const heroImage : heroImage [] = [
  {
    id : 1,
      src : '/images/herosection/1.png',
      alt : 'Hero Image 1',
      width : 276.09,
      height :  510,

  },
  {
    id : 2,
      src : '/images/herosection/2.png',
      alt : 'Hero Image 2',
   width : 276.09,
      height :  420.53,
  },
  {
    id : 3,
      src : '/images/herosection/3.png',
      alt : 'Hero Image 3',
      width : 232.63,
      height :  366.84,
  },
  {
    id : 4,
      src : '/images/herosection/4.png',
      alt : 'Hero Image 4',
      width : 232.63,
      height :  352.78,
  },
  {
    id : 5,
      src : '/images/herosection/5.png',
      alt : 'Hero Image 5',
      width : 232.63,
      height :  366.84,
  },
  {
    id : 6,
      src : '/images/herosection/6.png',
      alt : 'Hero Image 6',
     width : 276.09,
      height :  420.53,
  },
  {
    id : 7,
      src : '/images/herosection/7.png',
      alt : 'Hero Image 7',
      width : 276.09,
      height :  510,
  },

]
export const heroContent: HeroContent = {
  branding: {
    logoSrc: '/images/blablo-logo.svg',
    logoAlt: 'BlaBló',
    ctaButton: {
      text: 'Get BlaBlo',
      iconSrc: '/icons/arrow_forward.svg',
      iconAlt: 'App shortcut',
       iconSticky : '/icons/arrow_forward_pink.svg',
    }
  },
  headline: {
    mainText: 'Turn Dead Time into',
    highlightText: 'Fluent English',
    decorativeIcons: {
      pinkStarTopLeft: '/icons/Soft_star_pink.svg',
      pinkStarBottomLeft: '/icons/Soft_star_pink.svg',
      blueStarRight: '/icons/Soft_star_blue.svg'
    }
  },
  subtext: 'Use your commute, dish-washing, or any spare time to practice speaking.',
  callToAction: {
    boostText: 'Boost your speaking NOW',
    downloadText: 'Download the app:'
  },
  appStores: {
    googlePlay: {
      url: 'https://play.google.com/store/apps',
      buttonImage: '/images/app_button_google.png',
      qrCode: '/images/qr-google-play.svg',
      alt: 'Get it on Google Play'
    },
    appStore: {
      url: 'https://apps.apple.com',
      buttonImage: '/images/app_button_apple.png', 
      qrCode: '/images/qr-app-store.svg',
      alt: 'Download on the App Store'
    }
  }
}

// Animation variants for framer motion
export const heroAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeInUpDelay: (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay }
  }),
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  fadeInDelay: (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay }
  })
}
