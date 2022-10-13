import Link from "next/link";
import styled from "styled-components";
import {
  AnimatedDiv,
  StyledBodyText,
  StyledH1,
  StyledH4,
} from "../components/StyledElements";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../data/userData";
import RaphaelAvatar from "/public/assets/images/RaphaelAvatar.png";
import { fadeInCenter, fadeInDown } from "../data/animationConfigs";

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  min-height: calc(100vh - 30px);

  .hero-avatar > img {
    height: 350px;
  }

  .img-frame {
    height: 400px;
    width: 400px;
    border-radius: 50%;
    background: url(${RaphaelAvatar.src});
    background-size: cover;
  }

  .buttons-wrapper {
    gap: 0.625rem;
  }

  .img-frame {
    box-shadow: 0px 2px 21px -2px rgba(0, 0, 0, 0.75);
  }

  .section {
    width: 100%;
    margin: 3rem 0;
  }

  .bio-text {
    text-align: left;
  }

  @media ${(props) => props.theme.mediaQueries.mobileTablet} {
    min-height: calc(100vh - 106px);

    .bio-text {
      text-align: center;
    }

    .img-frame,
    .hero-avatar {
      height: 250px;
      width: 250px;
    }

    .socials-wrapper,
    .buttons-wrapper {
      gap: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .btn {
        width: max-content;
      }
    }

    .name-text,
    .title-text {
      text-align: center;
    }
  }
`;

interface HeroPageProps {
  data: UserDataType["meta"];
}

const HeroPage: React.FunctionComponent<HeroPageProps> = (props) => {
  const {
    data: { bio, imgSrc, greeting, title, socialLinks, resumeLink },
  } = props;

  return (
    <StyledWrapper
      className="d-flex gap-sm-5 flex-wrap flex-sm-nowrap items-wrap hero-wrapper"
      role="navigation"
    >
      <div className="hero-avatar d-flex justify-content-center align-items-center flex-grow-1">
        <AnimatedDiv
          className="img-frame"
          {...fadeInCenter}
        />
      </div>
      <div className="d-flex flex-column justify-content-start justify-content-sm-center flex-grow-1">
        <StyledH4 className="title-text text-muted mt-3 mt-sm-0">
          {title}
        </StyledH4>
        <StyledH1 className="name-text">{greeting}</StyledH1>
        <StyledBodyText className="bio-text">{bio}</StyledBodyText>

        <AnimatedDiv className="mb-2 socials-wrapper" {...fadeInDown({})}>
          {socialLinks?.map((platform, index) => (
            <a
              key={index}
              href={platform?.link}
              aria-label={platform?.title}
              target="_blank"
              rel="noreferrer"
              className="px-1"
            >
              <platform.imgSrc className="px-1" height={30} width={25} />
            </a>
          ))}
        </AnimatedDiv>

        <AnimatedDiv className="d-flex buttons-wrapper mb-3" {...fadeInDown({delay: 0.6})}>
          <a href={resumeLink} download target="_blank" rel="noreferrer">
            <span role="button" className="btn btn-secondary mx-2">
              Download CV
            </span>
          </a>
          <Link href="/#contact">
            <span role="button" className="btn btn-outline-secondary">
              Contact
            </span>
          </Link>
        </AnimatedDiv>
      </div>
    </StyledWrapper>
  );
};

export { HeroPage };
