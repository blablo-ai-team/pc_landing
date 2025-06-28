export interface FeatureCard {
  id: number
  type: 'feature' | 'gallery'
  title: string
  subtitle: string
  description: string
  duration: string
  status: 'available' | 'launching-soon'
  timeTag: string
  timeTagColor: 'green' | 'blue' | 'purple' | 'red'
  icon: string
  iconAlt: string
  imageSrc?: string
  imageAlt?: string
  width?: number
  height?: number
}

// Main feature cards for the app activities
export const featureCards: FeatureCard[] = [
  {
    id: 1,
    type: 'feature',
    title: 'Listen',
    subtitle: '& Repeat',
    description: 'Explore new vocab, train your mouth and brain on the go.',
    duration: '10 mins activity',
    status: 'available',
    timeTag: 'Morning commute',
    timeTagColor: 'green',
    icon: '/icons/headphones.svg',
    iconAlt: 'Headphones icon',
    imageSrc: '/images/features/listen-repeat.png',
    imageAlt: 'Listen and repeat feature illustration',
    width: 320,
    height: 400
  },
  {
    id: 2,
    type: 'feature',
    title: 'Flash',
    subtitle: 'Cards',
    description: 'Tap, swipe, and store new words fast.',
    duration: '3 mins',
    status: 'launching-soon',
    timeTag: 'Mid-day break',
    timeTagColor: 'blue',
    icon: '/icons/flashcards.svg',
    iconAlt: 'Flash cards icon',
    imageSrc: '/images/features/flash-cards.png',
    imageAlt: 'Flash cards feature illustration',
    width: 320,
    height: 500
  },
  {
    id: 3,
    type: 'feature',
    title: 'Joyful',
    subtitle: 'Role play',
    description: 'Act out a scenario, sleep on it and wake up sounding natural.',
    duration: '8 mins',
    status: 'launching-soon',
    timeTag: 'Before bedtime',
    timeTagColor: 'purple',
    icon: '/icons/chat-bubbles.svg',
    iconAlt: 'Chat bubbles icon',
    imageSrc: '/images/features/role-play.png',
    imageAlt: 'Joyful role play feature illustration',
    width: 320,
    height: 400
  },
  {
    id: 4,
    type: 'feature',
    title: 'Speed',
    subtitle: 'Challenge',
    description: 'Beat the timer, train instant recall and smoother speech.',
    duration: '5 mins',
    status: 'launching-soon',
    timeTag: 'Later days',
    timeTagColor: 'red',
    icon: '/icons/timer.svg',
    iconAlt: 'Timer icon',
    imageSrc: '/images/features/speed-challenge.png',
    imageAlt: 'Speed challenge feature illustration',
    width: 320,
    height: 400
  }
]

// Gallery cards for the curved card section
export const galleryCards: FeatureCard[] = [
  {
    id: 1,
    type: 'gallery',
    title: 'Character with headphones shopping',
    subtitle: '',
    description: '',
    duration: '',
    status: 'available',
    timeTag: '',
    timeTagColor: 'green',
    icon: '',
    iconAlt: '',
    imageSrc: '/images/cards/card-1.jpg',
    imageAlt: 'Character with headphones shopping',
    width: 276.09,
    height: 510
  },
  {
    id: 2,
    type: 'gallery',
    title: 'Character gardening',
    subtitle: '',
    description: '',
    duration: '',
    status: 'available',
    timeTag: '',
    timeTagColor: 'green',
    icon: '',
    iconAlt: '',
    imageSrc: '/images/cards/card-2.jpg',
    imageAlt: 'Character gardening',
    width: 276.09,
    height: 420.526
  },
  {
    id: 3,
    type: 'gallery',
    title: 'Character playing outdoors',
    subtitle: '',
    description: '',
    duration: '',
    status: 'available',
    timeTag: '',
    timeTagColor: 'green',
    icon: '',
    iconAlt: '',
    imageSrc: '/images/cards/card-3.jpg',
    imageAlt: 'Character playing outdoors',
    width: 232.632,
    height: 366.842
  },
  {
    id: 4,
    type: 'gallery',
    title: 'Character washing dishes',
    subtitle: '',
    description: '',
    duration: '',
    status: 'available',
    timeTag: '',
    timeTagColor: 'green',
    icon: '',
    iconAlt: '',
    imageSrc: '/images/cards/card-4.jpg',
    imageAlt: 'Character washing dishes',
    width: 232.632,
    height: 352.782
  },
  {
    id: 5,
    type: 'gallery',
    title: 'Character exercising',
    subtitle: '',
    description: '',
    duration: '',
    status: 'available',
    timeTag: '',
    timeTagColor: 'green',
    icon: '',
    iconAlt: '',
    imageSrc: '/images/cards/card-5.jpg',
    imageAlt: 'Character exercising',
    width: 232.632,
    height: 366.842
  },
  {
    id: 6,
    type: 'gallery',
    title: 'Character driving',
    subtitle: '',
    description: '',
    duration: '',
    status: 'available',
    timeTag: '',
    timeTagColor: 'green',
    icon: '',
    iconAlt: '',
    imageSrc: '/images/cards/card-6.jpg',
    imageAlt: 'Character driving',
    width: 276.09,
    height: 420.526
  },
  {
    id: 7,
    type: 'gallery',
    title: 'Character working',
    subtitle: '',
    description: '',
    duration: '',
    status: 'available',
    timeTag: '',
    timeTagColor: 'green',
    icon: '',
    iconAlt: '',
    imageSrc: '/images/cards/card-7.jpg',
    imageAlt: 'Character working',
    width: 276.09,
    height: 510
  }
]

// Color mappings for time tags
export const timeTagColors = {
  green: 'bg-green-500 text-white',
  blue: 'bg-blue-400 text-white', 
  purple: 'bg-purple-500 text-white',
  red: 'bg-red-500 text-white'
}

// Status mappings
export const statusStyles = {
  available: 'text-green-600',
  'launching-soon': 'text-orange-500'
}
