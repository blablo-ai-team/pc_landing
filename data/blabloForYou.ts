export interface BlabloForYouData {
  title: string;
  subtitle: string;
  hiromsg: {
    msg: string;
  }[];
  chatai: {
    msg: string;
  }[];
  imageHiro: {
    src: string;
    alt: string;
  };
  imagechat: {
    icon: {
      src: string;
      alt: string;
    };
    phone: {
      src: string;
      alt: string;
    }[];
  };
  arrayrandom: {
    msg: string[];
  }[];
}
export const blabloForYouData: BlabloForYouData = {
  title: "BlaBlo is for ",
  subtitle: "Master what you want with an AI-powered learning path, designed just for you!",
  hiromsg: [
    { msg: "I’m a Hotel receptionist" },
    { msg: "My English is okay... I can handle simple topics" },
    { msg: "I want smoother guest chats!" }
  ],
  chatai: [
    { msg: "Hi Hiro! By the end of this week, you’ll <b>handle guest complaints smoothly</b>" },
    { msg: "First quest: ‘Apologising Professionally’" },
    { msg: "Let’s begin!" }
  ],
  imageHiro: {
    src: "/images/blablo-for-you.svg",
    alt: "BlaBló App Interface"
  },
  imagechat: {
    icon: {
      src: "/images/blablo-for-you.svg",
      alt: "BlaBló App Interface"
    },
    phone: [
      {
        src: "/images/blablo-for-you.svg",
        alt: "BlaBló App Interface"
      },
      {
        src: "/images/blablo-for-you.svg",
        alt: "BlaBló App Interface"
      }
    ]
  },
  arrayrandom: [
    { msg: ["Receptionist", "Fashion designer", "Accountant", "Administrator"] },
    { msg: ["Data Analyst", "Software Developer", "UI/UX Designer"] },
    { msg: ["Travel Consultant", "Retail Store Owner", "Sales Executive"] },
    { msg: ["HR Coordinator", "IT Helpdesk", "Digital Marketer", "Social Media Manager"] }
  ]
};
