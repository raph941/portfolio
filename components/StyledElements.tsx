import styled from "styled-components";
import { ThemeType } from "../styles/theme";

const StyledH1 = styled.h1<{ theme: ThemeType }>`
  font-size: 48px;
  line-height: 56px;
  margin-top: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.variables.titleColor};
  font-weight: bold;

  @media ${(props) => props.theme.mediaQueries.mobileTablet} {
    font-size: 32px;
    line-height: 42px;
    margin-bottom: 12px;
  }
`;

const StyledH2 = styled.h2<{ theme: ThemeType }>`
  display: inline-block;
  position: relative;
  font-size: 21px;
  margin: 0 0 30px;
  z-index: 1;
  padding-bottom: 7px;
  color: ${({ theme }) => theme.variables.titleColor};

  &.weight-bold {
    font-family: "Poppins",Helvetica,sans-serif;
    font-weight: 600;
    font-style: normal;
  }
`;

const StyledH4 = styled.h4<{ theme: ThemeType }>`
  font-size: 16px;
  color: #aaa;
  font-weight: 300;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.variables.bodyColor};
  font-weight: 600;
`;


const StyledSectionTitle = styled(StyledH2)`
  display: inline-block;
  position: relative;
  font-size: 21px;
  margin: 0 0 30px;
  z-index: 1;
  padding-bottom: 7px;
  color: ${({ theme }) => theme.variables.titleColor};

  &:before {
    display: block;
    position: absolute;
    content: "";
    width: 100%;
    background-color: #f5f5f5;
    height: 2px;
    bottom: 0;
  }

  &:after {
    background-color: #54ca95;
    display: block;
    position: absolute;
    content: "";
    width: 30px;
    background-color: ${({ theme }) => theme.colors.dark};
    height: 2px;
    bottom: 0;
  }

  &.weight-bold {
    font-family: "Poppins",Helvetica,sans-serif;
    font-weight: 600;
    font-style: normal;
  }
`;

const StyledBodyText = styled.p<{ theme: ThemeType }>`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  text-align: justify;
  line-height: 1.75em;
  color: ${({ theme }) => theme.variables.bodyColor};
`;

const SectionDivider = styled.div<{ theme: ThemeType }>`
  /* padding: 0 1.625rem; */
  height: 120px;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.mobileTablet} {
    height: 80px;
  }
`;

const StyledPageContentWrapper = styled.div<{ theme: ThemeType }>`
  min-height: 100vh;
  padding-bottom: 120px;
  overflow-x: hidden;
  display: flex;
  flex-flow: column;
  position: relative;
  flex: 0 0 100%;
  max-width: 1240px;
  margin: auto;
  padding: 40px 70px 60px;
  overflow: hidden;

  @media ${(props) => props.theme.mediaQueries.mobileTablet} {
    margin: 0;
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    padding: 52px 40px 60px;
  }
`;

export {
  StyledH1,
  StyledBodyText,
  StyledH4,
  StyledH2,
  StyledSectionTitle,
  SectionDivider,
  StyledPageContentWrapper,
};
