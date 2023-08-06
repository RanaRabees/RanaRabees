import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Achieve With Me",
    desc: "Achieve With Me is a beautiful website that is designed to help people achieve their dreams.",
    img: "/static/projects/achieve-with-me.png",
    link: "https://achieve-with-me.vercel.app/",
    github: "https://github.com/RanaReebaal/achieve-with-me",
    tags: ["NextJS", "ReactJs", "TailwindCSS Ui", "Shadcn Ui", "Typescript", "Vercel"],
  },
  {
    id: 1,
    title: "Ecommerce Store",
    desc: "Fully-featured e-commerce platform with Stripe integration and a headless CMS built with Sanity and Drizzle.",
    img: "/static/projects/ecommercestore.png",
    link: "https://rana-reebaal-hackathon.vercel.app/",
    github: "https://github.com/RanaReebaal/Rana-Reebaal-Hackathon",
    tags: ["NextJs", "ReactJs", "TailwindCSS Ui", "Stripe", "Sanity", "Drizzle"],
  },
  {
    id: 2,
    title: "O Dine Market",
    desc: "Next.js e-commerce website with a user-friendly interface built with many latest libraries and frameworks",
    img: "/static/projects/fullstack-ecommerce-site.png",
    link: "https://fullstack-ecommerce-site.vercel.app/",
    github: "https://github.com/RanaRabees/Fullstack-Ecommerce-Site",
    tags: ["NextJS", "ReactJs", "TailwindCSS Ui", "Shadcn Ui", "Chakra", "Vercel", "TypeScript", "Javascript"],
  },
  {
    id: 3,
    title: "Al Madinah Motors Rent A Car",
    desc: "Figma website for Al Madinah Motors Rent A Car, a comprehensive resource for car rental customers.",
    img: "/static/projects/AlMadinah MotorsRentACar.png",
    link: "https://al-madina-motors-rent-a-car.vercel.app",
    github: "https://github.com/RanaRabees/Al-Madina-Motors-Rent-A-Car",
    tags: ["Figma", "Plasmic", "NextJS", "TailwindCSS Ui"],
  },
  {
    id: 4,
    title: "Computers Shop",
    desc: "A modern and stylish computers shop website with a focus on user experience.",
    img: "/static/projects/ComputersShop.png",
    link: "https://react-full-project.vercel.app/",
    github: "https://github.com/RanaRabees/react-full-project",
    tags: ["ReactJs", "NextJS", "TailwindCSS Ui"],
  },
  {
    id: 5,
    title: "Ice Cream Shop",
    desc: "Figma and Plasmic based ice cream shop website with a responsive design",
    img: "/static/projects/IceCreamShop.png",
    link: "https://ice-creams-shop.vercel.app/",
    github: "https://github.com/RanaRabees/Ice-Creams-Shop",
    tags: ["Figma", "Plasmic", "NextJS", "TailwindCSS Ui"],
  },
  {
    id: 6,
    title: "All In One Shopping Mart",
    desc: "Responsive e-commerce website with a modern UI built with Next.js, React.js, and TailwindCSS.",
    img: "/static/projects/AllInOneShoppingMart.png",
    link: "https://a-i-o-shopping-mart.vercel.app/",
    github: "https://github.com/RanaRabees/All-In-One-Shopping-Mart",
    tags: ["NextJS", "ReactJs", "TailwindCSS Ui", "Shadcn Ui", "Typescript", "Vercel"],
  },
  {
    id: 7,
    title: "Rabees Bishu",
    desc: "A responsive and user-friendly UI built with the latest web technologies, showcasing my creativity and technical skills...",
    img: "/static/projects/RabeesBishu.png",
    link: "https://rabees-bishu.vercel.app/",
    github: "https://github.com/RanaRabees/RabeesBishu",
    tags: ["Figma", "Plasmic", "NextJS", "TailwindCSS Ui"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects