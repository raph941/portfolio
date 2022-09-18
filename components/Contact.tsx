import React from "react";
import styled from "styled-components";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../data/userData";
import { StyledBodyText, StyledButton, StyledH1 } from "./StyledElements";

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 200px;
  padding: 100px 0;
  max-width: 700px;

  .subtitle {
    font-size: 16px;
    text-align: center;
  }
`;

interface ContactProps {
  data: UserDataType["contact"];
  className?: string;
}

const Contact: React.FunctionComponent<ContactProps> = ({
  data,
  className,
}) => (
  <StyledWrapper id="contact" className={className}>
    <StyledH1>{data?.title}</StyledH1>
    <StyledBodyText className="subtitle">{data?.subtitle}</StyledBodyText>

    <div>
      <a className="btn btn-secondary" href={`mailto:${data?.email || ""}`}>
        {data?.actionText}
      </a>
    </div>
  </StyledWrapper>
);

export { Contact };
