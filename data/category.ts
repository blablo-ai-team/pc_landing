export interface Region {
  name: string;
  subname: string;
  image: {
    src: string;
    alt: string;
  };
  content: string;
  id : Number,
}

export const RegionData: Region[] = [
  {
    id :1,
    name: "Yuki",
    subname: "Finance Officer",
    image: {
      src: "/images/category/🇯🇵.png",
      alt: "description of image"
    },
    content: "Metro rides became speaking time; BlaBlo’s adaptive scenarios helped me master my quarterly budget talk in English. My boss (and even me) was really impressed!",
  },
   {
    id:2,
    name: "Ji-yeon",
    subname: "Customer Support Agent",
    image: {
      src: "/images/category/🇰🇷.png",
      alt: "description of image"
    },
    content: "I used to memorize scripts. BlaBlo taught me to think in English. In six weeks my call-resolution score topped the team!",
  },
  {
    id:3,
    name: "Naree K.",
    subname: "Finance Officer",
    image: {
      src: "/images/category/🇹🇭.png",
      alt: "description of image"
    },
    content: "I practiced BlaBlo’s 5-minute greeting drills during laundry duty—after two weeks guests noticed, tips went up.",
  },
  {
    id:4,
    name: "Arjun Rao",
    subname: "Data Analyst",
    image: {
      src: "/images/category/🇮🇩.png",
      alt: "description of image"
    },
    content: "I wash dishes while my kids finish homework. 10 mins voice drills sound simple, but they pushed me from A2 to solid B1 in three months.",
  },
  {
    id:5,
    name: "Thảo",
    subname: "Sales Engineer",
    image: {
      src: "/images/category/🇻🇳.png",
      alt: "description of image"
    },
    content: "My product demos are full of technical words, so I created some demo scenarios in BlaBlo and got a tailored lesson that drilled every tricky term.",
  },
  {
    id:6,
    name: "Faisal",
    subname: "Sales Executive",
    image: {
      src: "/images/category/🇸🇦.png",
      alt: "description of image"
    },
    content: "I echoed BlaBlo scripts on my 40-minute Riyadh commute—last month I closed a deal fully in English.",
  },
  {
    id:7,
    name: "Intan Rahayu",
    subname: "Startup Founder",
    image: {
      src: "/images/category/🇮🇳.png",
      alt: "description of image"
    },
    content: "I practise investor pitches while jogging. Investors in Singapore said my delivery felt ‘global’—BlaBlo gets credit for that.",
  },
];
