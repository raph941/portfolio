import Link from "next/link";
import { FC } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import {
  StyledBodyText,
  StyledH1,
  StyledH4,
} from "../components/StyledElements";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../utils/data";
import RaphaelAvatar from "/public/assets/images/RaphaelAvatar.png";

interface HeroProps {
  userData: UserDataType;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  height: 100vh;
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
    /* margin-top: 27px; */
    gap: 0.625rem;
  }

  .items-wrap {
    margin: 5% 10%;
  }

  .img-frame {
    box-shadow: 0px 2px 21px -2px rgba(0, 0, 0, 0.75);
  }

  @media ${(props) => props.theme.mediaQueries.mobile} {
    .img-frame {
      height: 250px;
      width: 250px;
    }
  }
`;

const Home: FC<HeroProps> = (props) => {
  const {
    userData: { bio, imgSrc, name, title },
  } = props;

  return (
    <StyledWrapper className="d-flex justify-content-center align-items-center px-sm-5 page-content pt-5 pt-sm-0">
      <div className="d-flex gap-5 flex-wrap flex-sm-nowrap items-wrap">
        <div className="hero-avatar d-flex justify-content-center align-items-center flex-grow-1">
          <div className="img-frame" />
        </div>
        <div className="d-flex flex-column justify-content-center flex-grow-1">
          <StyledH4 className="text-muted">{title}</StyledH4>
          <StyledH1>{name}</StyledH1>
          <StyledBodyText>{bio}</StyledBodyText>

          <div className="d-flex buttons-wrapper">
            <Link href="" download>
              <span className="btn btn-secondary">Download CV</span>
            </Link>
            <Link href="/contact">
            <span className="btn btn-outline-secondary">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Home;
