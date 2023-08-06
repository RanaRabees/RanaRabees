type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Designs",
    path: "/designs",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "About",
          link: "/about",
          leavesWebsite: false,
        },
        {
          name: "Skills",
          link: "/skills",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Designs",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Email",
          link: "mailto:rrabeeshussain@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
        {
          name: "GitHub",
          link: "https://github.com/RanaRabees",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/rana-rabees-064830251/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/RanaRabees",
          icon: "/static/icons/dribbble-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Twitter",
          link: "https://twitter.com/RanaRabees",
          icon: "/static/icons/twitter-f.svg",
          leavesWebsite: true,
        }
      ],
    },
  ],
  support: {
    buymeacoffee: "RanaRabees",
    message: "I appreciate your support very much! 💙",
  },
};
