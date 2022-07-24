import Avatar from '/public/assets/images/RaphaelAvatar.png'
import LinkedinIcon from '/public/assets/images/linkedin-brands.svg'
import TwitterIcon from '/public/assets/images/twitter-brands.svg'
import GithubIcon from '/public/assets/images/github-brands.svg'


export const userData = {
  title: "Web Developer",
  name: "Raphael Ehindero",
  bio: "Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.  ",
  imgSrc: Avatar.src,
  socialLinks: [
    {
      title: 'Github',
      imgSrc: LinkedinIcon.src,
      link: "https://github.com/raph941"
    },
    {
      title: 'Linkedin',
      imgSrc: TwitterIcon.src,
      link: "https://www.linkedin.com/in/raphaelehindero/"
    },
    {
      title: 'Twitter',
      imgSrc: GithubIcon.src,
      link: "https://twitter.com/RaphaelEhindero"
    }
  ],
  whatIDo: [
    {

    }
  ]
};


export type UserDataType = typeof userData