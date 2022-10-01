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

export const userData = {
  meta: {
    title: "<Web Developer />",
    name: "Hi, am Raphael Ehindero",
    bio: "I'm the software engineer that loves building cool things on the web.",
    imgSrc: Avatar.src,
    socialLinks: [
      {
        title: "Github",
        imgSrc: GithubIcon.src,
        link: "https://github.com/raph941",
      },
      {
        title: "Linkedin",
        imgSrc: LinkedinIcon.src,
        link: "https://www.linkedin.com/in/raphaelehindero/",
      },
      {
        title: "Twitter",
        imgSrc: TwitterIcon.src,
        link: "https://twitter.com/RaphaelEhindero",
      },
    ],
  },

  whatIDo: [
    {
      icon: faCode,
      title: "Build Software Applications",
      description:
        "With over 4 years of software development experience, On day to day basis I contribute to building rohburst, scalable, and user friendly applications that solves user's problems. Checkout the portfolio section of this site to see some of my projects that are sharable here.",
    },
    {
      icon: faParagraph,
      title: "Content Writing",
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
    text: 'Hello! My name is Raphael and I enjoy building softwares that solves world problems, one little piece at a time. My interests has largly been on the web development eco-system using various available tools, languages and frameworks.',
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
        title: "Portfolio",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description: "This current project, you are viewing.",
        stacks: ["React", "Typescript", "NextJs", "GraphQl"],
        liveLink: "https://raph941.com",
        codeHost: "https://github.com/raph941/portfolio",
      },
      {
        title: "Dabafinance Landing Page",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description:
          "This is a proprietary site I worked on, as a landing page for the dabafinance product.",
        stacks: ["React", "Typescript", "JavaScript", "NextJs", "Wordpress"],
        liveLink: "https://dabafinance.com",
        codeHost: "",
      },
      {
        title: "Loan Management System",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description:
          "This is a demo version of a propietary enterprise software built, to manage company loans, repayments and other organizatioal functions.",
        stacks: ["React", "Typescript", "Django/Python", "JavaScript"],
        liveLink: "https://opulent-systems.netlify.app/login",
        codeHost: "",
      },
      {
        title: "Chat App",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description: "A fun sideproject, to build a fullstack chat system",
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
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description:
          "A travel agency template sie, built for practice during my HNG internship",
        stacks: ["HTML/CSS/JS"],
        liveLink: "https://explorenet.netlify.app",
        codeHost:
          "https://github.com/raph941/project_envato-Team-Fury-Travel.git",
      },
      {
        title: "Artist Portfolio",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description:
          "A portfolio templte for an artists to display their work to his online viewers.",
        stacks: ["HTML/CSS/JS"],
        liveLink: "https://explorenet.netlify.app",
        codeHost:
          "https://github.com/raph941/project_envato-Team-Fury-Travel.git",
      },
      {
        title: "App Landing Page",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description:
          "futuristic app, landing page, for an app that can determine the age of a person through their picture. using AI",
        stacks: ["HTML/CSS/JS"],
        liveLink: "https://agereal.netlify.app",
        codeHost: "https://github.com/raph941/age_scanner",
      },
      {
        title: "Covid 19 Stats Tracker",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
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
