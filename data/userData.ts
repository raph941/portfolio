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
      title: "Software Development",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    },
    {
      icon: faParagraph,
      title: "Content Writing",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
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
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
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
      "My inbox/DMs are alway opens, wether you have a question or want to connect. Feel free to reach out on Linkedin or simply send me mail.",
    actionText: "Say hello",
  },
  portfolio: {
    categories: ["All", "React", "NextJs", "Django/Python", "HTML/CSS/JS"],
    featuredProjects: [
      {
        title: "Portfolio",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description:
          "This current project, you are viewing.",
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
        stacks: ["React", "Typescript", "JavaScript", 'NextJs', "Wordpress"],
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
        description:
          "A fun sideproject, to build a fullstack chat system",
        stacks: ["React", "Typescript", "Django/Python", "fullstack", "JavaScript", "React"],
        liveLink: "https://chatapp-fullstack.netlify.app",
        codeHost: "https://github.com/raph941/chatApp-FE",
      }
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
        codeHost: "https://github.com/raph941/project_envato-Team-Fury-Travel.git",
      },
      {
        title: "Artist Portfolio",
        image:
          "https://cdn.pixabay.com/photo/2022/08/04/16/01/sea-7364988_960_720.jpg",
        description:
          "A portfolio templte for an artists to display their work to his online viewers.",
        stacks: ["HTML/CSS/JS"],
        liveLink: "https://explorenet.netlify.app",
        codeHost: "https://github.com/raph941/project_envato-Team-Fury-Travel.git",
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
