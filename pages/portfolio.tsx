import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PortfolioItem, StyledH1 } from "../components";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../utils/data";

interface PortfolioProps {
  userData: UserDataType;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  min-height: calc(100vh - 120px);
  margin-top: 66px;

  .page-title {
    margin-bottom: 50px;
  }

  .portfolio-filters {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    text-align: right;

    li {
      display: inline-block;
      color: ${({ theme }) => theme.colors.dark};
      font-size: 12px;
      line-height: 1.5;
      padding: 3px 14px;
      text-decoration: none;
      opacity: 0.6;

      &.active {
        opacity: 1;
        font-weight: bold;
      }
    }
  }

  .projects-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
  }
`;

const Portfolio: React.FunctionComponent<PortfolioProps> = ({ userData }) => {
  const { portfolio } = userData;
  const [activeFilter, setActiveFilter] = useState<string | undefined>(
    portfolio?.categories?.[0]
  );
  const allProjects = [
    ...portfolio?.featuredProjects,
    ...portfolio?.otherProjects,
  ];
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    console.log({ activeFilter });
  }, [activeFilter]);
  return (
    <StyledWrapper>
      <StyledH1 className="page-title">Portfolio</StyledH1>

      <ul className="portfolio-filters">
        {portfolio?.categories?.map((value, index) => (
          <li
            className={classNames(
              activeFilter === value && "active",
              "filter-item btn btn-sm btn-link"
            )}
            role="button"
            onClick={() => setActiveFilter(value)}
            key={index}
          >
            {value}
          </li>
        ))}
      </ul>

      <div className="projects-wrapper">
        {filteredProjects?.map((projectData, index) => (
          <PortfolioItem key={index} {...projectData} />
        ))}
      </div>
    </StyledWrapper>
  );
};

export default Portfolio;
