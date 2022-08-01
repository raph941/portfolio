import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    name: "Raphael Ehindero",
    bio: "Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.  ",
    imgSrc: Avatar.src,
    socialLinks: [
      {
        title: "Github",
        imgSrc: LinkedinIcon.src,
        link: "https://github.com/raph941",
      },
      {
        title: "Linkedin",
        imgSrc: TwitterIcon.src,
        link: "https://www.linkedin.com/in/raphaelehindero/",
      },
      {
        title: "Twitter",
        imgSrc: GithubIcon.src,
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
      name: "Python",
      image: PythonIcon,
    },
    {
      name: "Django",
      image: DjangoIcon,
    },
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
  ],
  footer: {
    links: [
      {
        label: 'Twitter',
        link: ""
      },
      {
        label: 'LinkedIn',
        link: '',
      },
      {
        label: 'Github',
        link: ''
      }
    ]
  },
  openSourceContrubutions: {

  },
  projects: {
    
  }
};

export type UserDataType = typeof userData;
