import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import {
  StyledBodyText,
  StyledH1,
  StyledH4,
} from "../components/StyledElements";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../utils/data";
import RaphaelAvatar from "/public/assets/images/RaphaelAvatar.png";

const StyledWrapper = styled.div<{ theme: ThemeType; imgSrc: string }>`
  min-height: calc(100vh - 30px);

  .hero-avatar > img {
    height: 350px;
  }

  .img-frame {
    height: 400px;
    width: 400px;
    border: 20px solid ${({ theme }) => theme.variableslight};
    border-radius: 50%;
    background: url(${RaphaelAvatar.src});
    /* background: ${({ imgSrc }) => `url(${imgSrc})`}; */
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

  @media ${(props) => props.theme.mediaQueries.mobileTablet} {
    min-height: calc(100vh - 106px);

    .img-frame {
      border: 12px solid ${({ theme }) => theme.variables.light};
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
  bio?: string;
  imgSrc?: string;
  name?: string;
  title?: string;
  socialLinks?: any[];
  cv_link?: string;
}

const HeroPage: React.FunctionComponent<HeroPageProps> = ({
  bio,
  imgSrc = "",
  name,
  socialLinks,
  title,
  cv_link = "",
}) => {
  return (
    <StyledWrapper
      className="d-flex gap-sm-5 flex-wrap flex-sm-nowrap items-wrap hero-wrapper"
      role="navigation"
      imgSrc={imgSrc}
    >
      <div className="hero-avatar d-flex justify-content-center align-items-center flex-grow-1">
        <div className="img-frame" />
      </div>
      <div className="d-flex flex-column justify-content-center flex-grow-1">
        <StyledH4 className="title-text text-muted mt-3 mt-sm-0">
          {title}
        </StyledH4>
        <StyledH1 className="name-text">{name}</StyledH1>
        <StyledBodyText>{bio}</StyledBodyText>

        <div className="mb-2 socials-wrapper">
          {socialLinks?.map((platform, index) => (
            <a
              key={index}
              href={platform?.link}
              aria-label={platform?.title}
              target="_blank"
              rel="noreferrer"
              className="px-1"
            >
              <Image
                src={platform?.imgSrc}
                alt={platform?.title}
                height={25}
                width={25}
              />
            </a>
          ))}
        </div>

        <div className="d-flex flex-column flex-sm-row buttons-wrapper mb-3">
          <Link href={cv_link || ""} download>
            <span role="button" className="btn btn-secondary mb-2 mb-sm-0">
              Download CV
            </span>
          </Link>
          <Link href="/#contact">
            <span role="button" className="btn btn-outline-secondary">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

export { HeroPage };
