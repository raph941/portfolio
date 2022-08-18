import * as React from "react";
import styled from "styled-components";
import { UserDataType } from "../utils/data";
import { FeaturedProjects } from "./FeaturedProjectItem";
import { StyledSectionTitle } from "./StyledElements";

interface PortfolioPreviewprop {
  data: UserDataType["portfolio"];
}

const StyledWrapper = styled.div``;

const PortfolioPreview: React.FunctionComponent<PortfolioPreviewprop> = ({ data }) => {
  const { featuredProjects } = data || {};

  return (
    <StyledWrapper>
      <StyledSectionTitle className="weight-bold">
        Some Things I've Built
      </StyledSectionTitle>

      <div className="d-flex gap-5 flex-column">
        {featuredProjects?.map((project, index) => (
          <FeaturedProjects key={index} {...project} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export { PortfolioPreview };