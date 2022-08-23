import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const footerLinks = [
  {
    title: "Features",
    links: [
      {
        name: "Link Shortening",
      },
      {
        name: "Branded Links",
      },
      {
        name: "Analytics",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
      },
      {
        name: "Developers",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About",
      },
      {
        name: "Our Team",
      },
      {
        name: "Careers",
      },
      {
        name: "Contact",
      },
    ],
  },
];

const socialIcons = [
  {
    id: "icon-1",
    icon: facebook,
  },
  {
    id: "icon-2",
    icon: twitter,
  },
  {
    id: "icon-3",
    icon: pinterest,
  },
  {
    id: "icon-4",
    icon: instagram,
  },
];

export { footerLinks, socialIcons };
