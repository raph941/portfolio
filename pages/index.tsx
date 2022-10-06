import { FC, useEffect } from "react";
import styled from "styled-components";
import { WhatIDo, HeroPage, About, Contact } from "../components";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../data/userData";
import { useThemeMode } from "../hooks/useThemeMode";

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
  const { themeMode, toggleThemeMode } = useThemeMode();

  useEffect(() => {
    console.log('NEW: ', {themeMode})
  }, [themeMode])
  
  const { userData } = props;
  const wrapperClassName =
    "d-flex flex-column justify-content-center align-items-center px-sm-5 page-content pt-4 pt-sm-0";

  return (
    <StyledWrapper className={wrapperClassName}>
      <HeroPage data={userData?.meta} />

      <About data={userData?.about} techStack={userData?.techStack} />

      <WhatIDo data={userData?.whatIDo} className="section mt-5 w-100" />

      {/* <TechStack data={userData?.techStack} className="section" /> */}

      <Contact data={userData?.contact} className="section" />
    </StyledWrapper>
  );
};

export default Home;
