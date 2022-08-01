import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import { WhatIDo, HeroPage } from "../components";
import { TechStack } from "../components/TechStack";
import { ThemeType } from "../styles/theme";
import { userData, UserDataType } from "../utils/data";
import RaphaelAvatar from "/public/assets/images/RaphaelAvatar.png";

interface HeroProps {
  userData: UserDataType;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  .section {
    width: 100%;
    margin: 3rem 0;
  }
`;

const Home: FC<HeroProps> = (props) => {
  const { userData } = props;
  const wrapperClassName =
    "d-flex flex-column justify-content-center align-items-center px-sm-5 page-content pt-4 pt-sm-0";

  return (
    <StyledWrapper className={wrapperClassName}>
      <HeroPage data={userData?.meta} />

      <WhatIDo data={userData?.whatIDo} className="section mt-5 w-100" />

      <TechStack data={userData?.techStack} className="section" />
    </StyledWrapper>
  );
};

export default Home;
