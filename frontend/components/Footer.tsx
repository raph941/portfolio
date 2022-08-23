import Link from "next/link";
import React from "react";
import { Row } from "reactstrap";
import styled from "styled-components";
import { UserDataType } from "../utils/data";
import { ThemeType } from "../styles/theme";

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 10%);
  .links-wrap {
    gap: 20px;
  }

  .footer-link-label {
    color: ${({ theme }) => theme.variables.titleColor};
    text-decoration: none;
    line-height: 21px;
    font-size: 13px;
    opacity: 0.6;
    cursor: pointer;
  }
`;

interface FooterProps {
  data: UserDataType["footer"];
}

const Footer: React.FunctionComponent<FooterProps> = ({ data }) => (
  <StyledWrapper className="d-flex px-2 px-sm-5 py-3 justify-content-between">
    <Row className="d-flex">
      <div className="d-flex links-wrap">
        {data?.links?.map(({ label, link }, index) => (
          <Link key={index} href={link} target="_blank" rel="noreferrer">
            <div className="footer-link-label">{label}</div>
          </Link>
        ))}
      </div>
    </Row>

    <div className="footer-link-label">Copyright Raphael Ehindero 2022 &#169;</div>
  </StyledWrapper>
);

export { Footer };
