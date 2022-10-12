import Link from "next/link";
import React from "react";
import { Row } from "reactstrap";
import styled from "styled-components";
import { UserDataType } from "../data/userData";
import { ThemeType } from "../styles/theme";

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 10%);
  background-color: ${({ theme }) => theme.variables.footerBg};
  margin-top: 100px;

  .footer-link-label {
    margin-right: 20px;
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
  <StyledWrapper className="d-flex flex-column flex-sm-row px-2 px-sm-5 py-4 justify-content-between">
    <Row className="d-flex">
      <div className="d-flex links-wrap">
        {data?.links?.map(({ label, link }, index) => (
          <Link key={index} href={link} target="_blank" rel="noreferrer">
            <div className="footer-link-label">{label}</div>
          </Link>
        ))}
      </div>
    </Row>

    <div className="footer-link-label mt-3 mt-sm-0 ">Copyright Raphael Ehindero 2022 &#169;</div>
  </StyledWrapper>
);

export { Footer };
