type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "Web3.0",
    icon: "https://reebaal-hussain.vercel.app/icons8-web-64.png",
  },
  {
    title: "Metaverse",
    icon: "https://reebaal-hussain.vercel.app/icons8-metaverse-64.png",
  },
  {
    title: "Blockchain",
    icon: "https://reebaal-hussain.vercel.app/icons8-blockchain-64.png",
    style: { filter: "invert(1)" },
  },
  {
    title: "Web2.0",
    icon: "https://reebaal-hussain.vercel.app/icons8-web2.0-64.png",
    style: { filter: "invert(1)" },
  },
  {
    title: "AI",
    icon: "https://reebaal-hussain.vercel.app/icons8-ai-100.png",
  },
  {
    title: "AWS",
    icon: "https://img.icons8.com/color/48/amazon-web-services.png",
    style: { filter: "invert(1)" },
  },
  {
    title: "Rest",
    icon: "https://reebaal-hussain.vercel.app/rest.png",
  },
  {
    title: "Graphql",
    icon: "https://reebaal-hussain.vercel.app/graphe.png",
  },
  {
    title: "ServerLess",
    icon: "https://reebaal-hussain.vercel.app/server.png",
  },
  {
    title: "Web",
    icon: "https://reebaal-hussain.vercel.app/icons8-website-64.png",
  },
  {
    title: "App",
    icon: "https://reebaal-hussain.vercel.app/icons8-social-media-64.png",
  },
  {
    title: "Game",
    icon: "https://reebaal-hussain.vercel.app/icons8-gamer-64.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Rana Amir",
    job: "Co-Founder of RanaVerse",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Reebaal Hussain",
    job: "CEO of NWOIT",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Adeema Amir",
    job: "Founder of RBASCON",
  },
];
