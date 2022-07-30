import React, { FC } from "react";
import classNames from "classnames";

import { UserDataType } from "../utils/data";
import { StyledBodyText, StyledH2, StyledH4 } from "./StyledElements";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Image from "next/image";

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
    <StyledH2 className="weight-bold">Daily Tools</StyledH2>

    <Row>
      {data?.map(({ image, name }, key) => (
        <Col key={key} className="d-flex flex-column align-items-center">
          <Image className="" src={image} alt="language" height={40} width={40} />
          <StyledH4 className="mt-2">{name}</StyledH4>
        </Col>
      ))}
    </Row>
  </StyledWrapper>
);

export { TechStack };
