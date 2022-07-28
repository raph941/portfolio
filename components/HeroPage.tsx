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

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  min-height: calc(100vh - 90px);

  .hero-avatar > img {
    height: 350px;
  }

  .img-frame {
    height: 400px;
    width: 400px;
    border: 20px solid ${({ theme }) => theme.variableslight};
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

  .hero-wrapper {
  }

  @media ${(props) => props.theme.mediaQueries.mobileTablet} {
    min-height: calc(100vh - 106px);

    .img-frame,
    .hero-avatar {
      height: 250px;
      width: 250px;
    }

    .socials-wrapper,
    .buttons-wrapper {
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
    data: { bio, imgSrc, name, title, socialLinks },
  } = props;

  return (
    <StyledWrapper className="d-flex gap-sm-5 flex-wrap flex-sm-nowrap items-wrap hero-wrapper">
      <div className="hero-avatar d-flex justify-content-center align-items-center flex-grow-1">
        <div className="img-frame" />
      </div>
      <div className="d-flex flex-column justify-content-center flex-grow-1">
        <StyledH4 className="title-text text-muted">{title}</StyledH4>
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
          <Link href="" download>
            <span className="btn btn-secondary">Download CV</span>
          </Link>
          <Link href="/contact">
            <span className="btn btn-outline-secondary">Contact</span>
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

export { HeroPage };
