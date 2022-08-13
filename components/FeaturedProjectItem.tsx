import Image from "next/image";
import * as React from "react";
import { Card } from "reactstrap";
import styled from "styled-components";
import {
  StyledBodyText,
  StyledH2,
  StyledH4,
  StyledSectionTitle,
} from "./StyledElements";

interface FeaturedProjectsprop {
  image?: string;
  title?: string;
  description?: string;
  stacks: string[];
  liveLink: string;
  codehost: string;
}

const StyledWrapper = styled.div`
  .image-wrap {
    width: 100%;
    object-fit: contain;
    height: 300px;
  }

  .text-content-wrap {
    text-align: right;
  }

  .description-card {
    box-shadow: 0 10px 30px -15px #020c1bb3;
    transition: var(--transition);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
  }
`;

const FeaturedProjects: React.FunctionComponent<FeaturedProjectsprop> = ({
  codehost,
  liveLink,
  stacks,
  description,
  image = "",
  title,
}) => {
  return (
    <StyledWrapper className="d-flex align-items-center justify-content-center flex-column flex-sm-row gap-4">
      <div className="image-wrap position-relative">
        <Image
          src={image}
          //   height={200}
          //   width={200}
          alt={title}
          layout="fill"
        />
      </div>

      <div className="d-flex flex-column text-content-wrap align-items-end">
        <StyledH2 className="mb-2">{title}</StyledH2>
        <StyledH4 className="description-card">{description}</StyledH4>

        <div className="stacks-wrap d-flex gap-3">
          {stacks?.map((stack, index) => (
            <StyledBodyText key={index}>{stack}</StyledBodyText>
          ))}
        </div>
        <div className="links-wrap">
            {codehost && <Image />}
            {liveLink && <Image  />}
        </div>
      </div>
    </StyledWrapper>
  );
};

export { FeaturedProjects };
