import { faParagraph, faCode } from "@fortawesome/free-solid-svg-icons";
import NodeJsIcon from "/public/assets/icons/node-js-brands.svg";
import PythonIcon from "/public/assets/icons/python-brands.svg";
import ReactIcon from "/public/assets/icons/react-brands.svg";
import JavaScriptIcon from "/public/assets/icons/square-js-brands.svg";
import DjangoIcon from "/public/assets/icons/django.svg";
import TypeScriptIcon from "/public/assets/icons/typescript.svg";

import Avatar from "/public/assets/images/RaphaelAvatar.png";
import LinkedinIcon from "/public/assets/images/linkedin-brands.svg";
import TwitterIcon from "/public/assets/images/twitter-brands.svg";
import GithubIcon from "/public/assets/images/github-brands.svg";
import ContentIcon from "/public/assets/icons/content.svg";
import CodeIcon from "/public/assets/icons/code.svg";
import OgImage from "/public/assets/og.png";

export const userData = {
  meta: {
    title: "<Web Developer />",
    fullname: "Raphael Ehindero",
    greeting: "Hi, am Raphael Ehindero",
    bio: "I'm a software engineer who loves building cool things on the web.",
    imgSrc: Avatar.src,
    socialLinks: [
      {
        title: "Github",
        imgSrc: GithubIcon,
        link: "https://github.com/raph941",
      },
      {
        title: "Linkedin",
        imgSrc: LinkedinIcon,
        link: "https://www.linkedin.com/in/raphaelehindero/",
      },
      {
        title: "Twitter",
        imgSrc: TwitterIcon,
        link: "https://twitter.com/RaphaelEhindero",
      },
    ],
    resumeLink:
      "https://drive.google.com/file/d/1Xz0Js-22dn-Zm4O2hC5_6Qy9Xd98ahAK/view?usp=sharing",
  },
  // SEO details
  og: {
    siteBaseUrl: "https://raph941.com",
    description:
      "Hey, checkout some of my recent projects you might find interesting on my portfolio site.",
    image: OgImage.src,
    authorUrl: "https://twitter.com/RaphaelEhindero",
    twitterHandle: "@RaphaelEhindero",
  },
  whatIDo: [
    {
      icon: CodeIcon,
      title: "Build Software Applications",
      description:
        "With over 4 years of software development experience, On day to day basis I contribute to building rohburst, scalable, and user friendly applications that solves user's problems. Checkout the portfolio section of this site to see some of my projects that are sharable here.",
    },
    {
      icon: ContentIcon,
      title: "Technical Content Writing",
      description:
        "This is a relatively newer area, where I try to share some ideas, knowledge and thoughts on various tech subjects and passionate about. Checkout the blog section of this site to see some of my writeups.",
    },
  ],
  techStack: [
    {
      name: "JavaScript",
      image: JavaScriptIcon,
    },
    {
      name: "TypeScript",
      image: TypeScriptIcon,
    },
    {
      name: "React",
      image: ReactIcon,
    },
    {
      name: "NodeJs",
      image: NodeJsIcon,
    },
    {
      name: "Python",
      image: PythonIcon,
    },
    {
      name: "Django",
      image: DjangoIcon,
    },
  ],
  footer: {
    links: [
      {
        label: "Twitter",
        link: "",
      },
      {
        label: "LinkedIn",
        link: "",
      },
      {
        label: "Github",
        link: "",
      },
    ],
  },
  openSourceContrubutions: {},
  projects: {},
  about: {
    text: "Hello! My name is Raphael and I enjoy building softwares that solves world problems, one little piece at a time. My interests has largly been on the web development eco-system using various available tools, languages and frameworks.",
    recentStack: [
      "JavaScript (Es6+)",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "Django",
    ],
  },
  contact: {
    email: "raph941@gmail.com",
    title: "Let's chat",
    subtitle:
      "My inbox is alway opens, whether you have a question or just want to connect. Feel free to reach out on Linkedin or simply send me mail.",
    actionText: "Say hello",
  },
  portfolio: {
    categories: ["All", "React", "NextJs", "Django/Python", "HTML/CSS/JS"],
    featuredProjects: [
      {
        title: "Portfolio site",
        image:
          "https://res.cloudinary.com/raph941/image/upload/v1666299925/portfolio/portfolio_c8qvtl.gif",
        description:
          "This is my portfolio project, built to show some of my works and also share technical contents that hopefuly would be benefitial to everyone that needs to get some context on the subject of discussion.",
        stacks: ["React", "Typescript", "NextJs", "GraphQl"],
        liveLink: "https://raph941.com",
        codeHost: "https://github.com/raph941/portfolio",
      },
      {
        title: "Dabafinance Landing Page",
        image:
          "https://res.cloudinary.com/raph941/image/upload/v1666299358/portfolio/dabafinance_mec33x.gif",
        description:
          "This is a proprietary landing page I worked on, as part of the dabafinance team, for the dabafinance product.",
        stacks: ["React", "Typescript", "JavaScript", "NextJs"],
        liveLink: "https://dabafinance.com",
        codeHost: "",
      },
      {
        title: "Loan Management System",
        image:
          "https://res.cloudinary.com/raph941/image/upload/v1666300464/portfolio/opulent_m8ab0s.gif",
        description:
          "This is a Loan management enterprise software I built for an organisation, to automate/digitise their manual processes of giving out loans to clients and tracking repayments",
        stacks: ["React", "Typescript", "Django/Python", "JavaScript"],
        liveLink: "https://opulent-systems.netlify.app/login",
        codeHost: "",
      },
      {
        title: "Chat App",
        image:
          "https://res.cloudinary.com/raph941/image/upload/v1666300975/portfolio/chat_wf4qsx.gif",
        description: "This is a fun fullstack project I worked on, to demonstrait building a real time chat application using django and react web socket.",
        stacks: [
          "React",
          "Typescript",
          "Django/Python",
          "fullstack",
          "JavaScript",
          "React",
        ],
        liveLink: "https://chatapp-fullstack.netlify.app",
        codeHost: "https://github.com/raph941/chatApp-FE",
      },
    ],
    otherProjects: [
      {
        title: "Travel Site",
        image:
          "https://res.cloudinary.com/raph941/image/upload/v1666301446/portfolio/travel_zdavtj.gif",
        description:
          "A travel agency template sie.",
        stacks: ["HTML/CSS/JS"],
        liveLink: "https://explorenet.netlify.app",
        codeHost:
          "https://github.com/raph941/project_envato-Team-Fury-Travel.git",
      },
      {
        title: "Artist Portfolio",
        image:
          "https://res.cloudinary.com/raph941/image/upload/v1666301954/portfolio/tariamulani_rjuhbi.gif",
        description:
          "A portfolio templte for an artists to display their work to his online viewers.",
        stacks: ["HTML/CSS/JS"],
        liveLink: "https://artist-portfoliosite.netlify.app/",
        codeHost:
          "https://github.com/raph941/ArtistPortfolio",
      },
      {
        title: "App Landing Page",
        image:
          "https://res.cloudinary.com/raph941/image/upload/v1666302112/portfolio/Screenshot_2022-10-20_at_10.41.36_PM_ocjy2v.png",
        description:
          "A futuristic app landing page, for an app that can determine the age of a person through their picture. using AI",
        stacks: ["HTML/CSS/JS"],
        liveLink: "https://agereal.netlify.app",
        codeHost: "https://github.com/raph941/age_scanner",
      },
      {
        title: "Covid 19 Stats Tracker",
        image:
          "https://res.cloudinary.com/raph941/image/upload/v1666302527/portfolio/covid_oxdym6.gif",
        description:
          "App that plots live data of of covid 19 cases, on chart and map",
        stacks: ["HTML/CSS/JS", "React"],
        liveLink: "https://covid19app-monitor.web.app",
        codeHost: "https://github.com/raph941/Covid-19-Tracker",
      },
    ],
  },
};

export type UserDataType = typeof userData;
