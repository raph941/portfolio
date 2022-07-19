import styled from "styled-components";
import { ThemeType } from "../styles/theme";

const StyledH1 = styled.h1<{ theme: ThemeType }>`
  font-size: 48px;
  line-height: 56px;
  margin-top: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.variables.titleColor};
`;

const StyledBodyText = styled.p<{ theme: ThemeType }>`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.75em;
  color: ${({ theme }) => theme.variables.bodyColor};
`;

const StyledH4 = styled.h4<{ theme: ThemeType }>`
  font-size: 16px;
  color: #aaa;
  font-weight: 300;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.variables.bodyColor};
`;

export { StyledH1, StyledBodyText, StyledH4 };
