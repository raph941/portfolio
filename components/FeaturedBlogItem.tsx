import React from "react";
import styled from "styled-components";
import { ThemeType } from "../styles/theme";
import { StyledBodyText, StyledH3, StyledH4 } from "./StyledElements";

interface FeaturedBlogItemProps {
  title: string;
  category?: string;
  image: string;
  date: string;
  content?: string;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  cursor: pointer;
  display: flex;
  box-shadow: 0px 2px 21px -2px #efebf7;
  border-radius: 25px;
  margin-bottom: 50px;

  .img-wrap,
  .text-wrap {
    flex: 1;
  }

  .category {
    line-height: 1.2em;
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.variables.thetiary};
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    padding: 25px;

    > h4 {
      flex: 1;
    }
  }

  .truncated-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media ${(props) => props.theme.mediaQueries.mobileTablet} {
    flex-direction: column;

    .img-wrap {
      flex: auto;
    }
  }
`;

const StyledImage = styled.div<{ bgImage?: string }>`
  height: 250px;
  border-radius: 25px;
  background-size: cover;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;

const FeaturedBlogItem: React.FunctionComponent<FeaturedBlogItemProps> = ({
  date,
  image,
  title,
  category,
  content,
}) => {
  return (
    <StyledWrapper className="">
      <StyledImage className="img-wrap" bgImage={image}></StyledImage>
      <div className="text-wrap">
        <StyledBodyText className="category">{category}</StyledBodyText>
        <StyledH3 className="title">{title}</StyledH3>
        <StyledBodyText className="truncated-text">{content}</StyledBodyText>
        <StyledBodyText className="mb-0">
          <small>{date}</small>
        </StyledBodyText>
      </div>
    </StyledWrapper>
  );
};

export { FeaturedBlogItem };
