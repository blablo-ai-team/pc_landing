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
      pinkStarTopLeft: '/icons/soft_star_pink.svg',
      pinkStarBottomLeft: '/icons/soft_star_pink.svg',
      blueStarRight: '/icons/Soft_star_blue.svg'
    }
  },
  subtext: 'Use your commute, dish-washing, or any spare minute to practice real speaking',
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
