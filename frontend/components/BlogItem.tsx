import React from "react";
import styled from "styled-components";
import { ThemeType } from "../styles/theme";
import { StyledBodyText, StyledH4 } from "./StyledElements";

interface BlogItemProps {
  title: string;
  category?: string;
  image: string;
  date: string;
  content?: string;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  cursor: pointer;
  
  .category {
    position: relative;
    background: ${({ theme }) => theme.variables.light};
    border-radius: 3px;
    padding: 3px 7px;
    line-height: 1.2em;
    font-size: 11px;
    color: ${({ theme }) => theme.variables.darkText};
    width: fit-content;
  }
`;

const StyledImage = styled.div<{ bgImage?: string }>`
  height: 191px;
  border-radius: 12px;
  background-size: cover;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  margin-bottom: 12px;
  padding: 12px;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const BlogItem: React.FunctionComponent<BlogItemProps> = ({
  date,
  image,
  title,
  category,
}) => {
  return (
    <StyledWrapper>
      <StyledImage bgImage={image}>
        <StyledBodyText className="category">{category}</StyledBodyText>
      </StyledImage>
      <div>
        <StyledBodyText className="mb-0">
          <small>{date}</small>
        </StyledBodyText>
        <StyledH4 className="title">{title}</StyledH4>
      </div>
    </StyledWrapper>
  );
};

export { BlogItem };
