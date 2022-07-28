import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faParagraph, faCode } from "@fortawesome/free-solid-svg-icons";

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
  techStack: [],
};

export type UserDataType = typeof userData;
