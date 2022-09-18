import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { UserDataType } from "../data/userData";
import { StyledSectionTitle, StyledH2, StyledBodyText } from "./StyledElements";

interface AboutProps {
  data?: UserDataType["about"];
  techStack: UserDataType["techStack"];
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .about-text,
  .recent-technologies {
    max-width: 700px;
  }

  .about-text,
  .about-title {
    align-self: flex-start;
  }

  .recent-technologies {
    width: 100%;
  }

  .stack-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      padding: 10px;
    }

    .stack-name {
      margin-left: 10px;
    }
  }
`;

const About: React.FunctionComponent<AboutProps> = ({ data, techStack }) => (
  <StyledWrapper id="about">
    <StyledSectionTitle className="about-title">About me</StyledSectionTitle>

    <StyledBodyText className="text-justify about-text">
      {data?.text}
    </StyledBodyText>

    <div className="recent-technologies">
      <StyledBodyText className="about-text mb-0">
        Here are a few technologies i've been working with quite recently:
      </StyledBodyText>

      <ul className="stack-list">
        {techStack?.map((stack, key) => (
          <li key={key} className="">
            <Image
              src={stack.image}
              alt="language"
              height={20}
              width={20}
            />
            <span className="stack-name">{stack.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </StyledWrapper>
);

export { About };
