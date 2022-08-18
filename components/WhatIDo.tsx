import React, { FC } from "react";
import classNames from "classnames";

import { UserDataType } from "../utils/data";
import { StyledBodyText, StyledSectionTitle, StyledH4 } from "./StyledElements";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Image from "next/image";

interface WhatIDoProps {
  data: UserDataType["whatIDo"];
  className?: string;
}

const StyledWrapper = styled.div`
  min-height: 60vh;
  padding: 100px 0;
  .icon {
    font-size: 2.0625rem;
    margin-right: 20px;
  }
`;

const WhatIDo: FC<WhatIDoProps> = ({ data, className }) => (
  <StyledWrapper className={classNames(className, "page-content")}>
    <StyledSectionTitle className="weight-bold">What I Do</StyledSectionTitle>

    <Row>
      {data?.map(({ title, description, icon }, key) => (
        <Col md="6" key={key}>
          <div className="d-flex">
            <FontAwesomeIcon icon={icon} className="icon" />
            <div>
              <StyledH4>{title}</StyledH4>
              <StyledBodyText>{description}</StyledBodyText>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </StyledWrapper>
);

export { WhatIDo };
