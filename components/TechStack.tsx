import React, { FC } from "react";
import classNames from "classnames";

import { UserDataType } from "../utils/data";
import { StyledBodyText, StyledH2, StyledH4 } from "./StyledElements";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface TechStackProps {
  data: UserDataType["techStack"];
  className?: string;
}

const StyledWrapper = styled.div`
  .icon {
    font-size: 2.0625rem;
    margin-right: 20px;
  }
`

const TechStack: FC<TechStackProps> = ({ data, className }) => (
  <StyledWrapper className={classNames(className, "page-content")}>
    <StyledH2 className="weight-bold">My Arsenal</StyledH2>

    <Row>
      
    </Row>
  </StyledWrapper>
);

export { TechStack };
