import React, { FC } from "react";
import styled from "styled-components";
import { WhatIDo, HeroPage, About, Contact } from "../components";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../utils/data";
import { GlobalContext } from "./_app";

interface HeroProps extends DTO.PageProps {
  userData: UserDataType;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  .section {
    width: 100%;
    margin: 3rem 0;
  }
`;

const Home: FC<HeroProps> = ({ userData, userMeta }) => {
  const wrapperClassName =
    "d-flex flex-column justify-content-center align-items-center px-sm-5 page-content pt-4 pt-sm-0";
  console.log({userMeta})
  const value = React.useContext(GlobalContext)
  console.log({value})

  return (
    <StyledWrapper className={wrapperClassName}>
      <HeroPage
        bio={userMeta?.bio}
        imgSrc={userMeta?.image?.data?.attributes?.url}
        name={userMeta?.name}
        title={userMeta?.title}
        socialLinks={userMeta?.data?.map(
          (instance: any) => instance?.attributes
        )}
        cv_link={userMeta?.cv_link}
      />

      <About aboutText={userMeta?.about} techStack={userMeta?.stacks?.data} />

      <WhatIDo data={userData?.whatIDo} className="section mt-5 w-100" />

      {/* <TechStack data={userData?.techStack} className="section" /> */}

      <Contact data={userData?.contact} className="section" />
    </StyledWrapper>
  );
};

export default Home;
