import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  PortfolioItem,
  RightLeftNav,
  StyledBodyText,
  StyledH1,
} from "../components";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../data/userData";
import { Drawer, Switch } from "antd";
import { ProjectType } from "../lib/types";

interface PortfolioProps {
  userData: UserDataType;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  min-height: calc(100vh - 120px);
  margin-top: 66px;

  .page-title {
    margin-bottom: 50px;
  }

  .achive-toggler-wrap {
    color: ${({ theme }) => theme.colors.dark};

    .ant-switch {
      border: 1px solid ${({ theme }) => theme.colors.dark};
    }

    .ant-switch-handle {
      margin-top: -1px; // Fix inherent issue with vertical alignment of switch dot.
    }
  }

  .portfolio-filters {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;

    .ant-switch-checked {
      background-color: ${({ theme }) => theme.colors.dark} !important;
    }

    li {
      display: inline-block;
      color: ${({ theme }) => theme.colors.dark};
      font-size: 12px;
      line-height: 1.5;
      padding: 3px 14px;
      text-decoration: none;
      opacity: 0.6;

      &:hover {
        color: ${({ theme }) => theme.colors.dark};
      }

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

const DrawerStyles = createGlobalStyle<{ theme: ThemeType }>`
  .ant-drawer-header {
        border: none;
    }
    
    .ant-drawer-content {
        border-radius: 25px;
    }

    .anticon-close svg {
      font-weight: bold;
    }

    .navigation-button {
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
    }
`;

const Portfolio: React.FunctionComponent<PortfolioProps> = ({ userData }) => {
  const { portfolio } = userData;
  const [showAchieve, setShowAchieve] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<string>();
  const [activeProject, setActiveproject] = useState<ProjectType>();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>();
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(
    portfolio?.featuredProjects || []
  );

  const handleNavigate = (direction: "right" | "left") => {
    if (direction === "right") {
      const nextIndex = (activeProjectIndex || 0) + 1;
      setActiveProjectIndex(nextIndex);
      setActiveproject(filteredProjects[nextIndex]);
      return;
    }

    const prevIndex = (activeProjectIndex || 0) - 1;
    setActiveProjectIndex(prevIndex);
    setActiveproject(filteredProjects[prevIndex]);
  };

  const handlePortfolioItemClick = (project: ProjectType, index: number) => {
    if (project.showDetailView) {
      setActiveProjectIndex(index);
      setActiveproject(project);
    }
  };

  useEffect(() => {
    const projects =
      portfolio[showAchieve ? "otherProjects" : "featuredProjects"];
    if (!activeFilter || activeFilter === "All") {
      setFilteredProjects(projects);
      return;
    }

    setFilteredProjects(() =>
      projects?.filter((instance) =>
        instance?.stacks.includes(activeFilter || "")
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, showAchieve]);

  return (
    <StyledWrapper>
      <DrawerStyles />
      <StyledH1 className="page-title">Portfolio</StyledH1>
      <StyledBodyText>
        Some notable projecs I've worked on. To see more projects toggle the
        "View Achieve" below (they probably have not been updated in a while)
      </StyledBodyText>

      <ul className="portfolio-filters">
        <div className="d-inline-flex align-items-center achive-toggler-wrap">
          <Switch size="small" className="mx-2" onChange={setShowAchieve} />
          view achieve
        </div>

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
        {filteredProjects?.map(
          (projectData, index) => (
            <PortfolioItem
              onClick={() => handlePortfolioItemClick(projectData, index)}
              key={index}
              {...projectData}
            />
          )
        )}
      </div>

      <Drawer
        title={activeProject?.title}
        placement="bottom"
        onClose={() => setActiveproject(undefined)}
        open={!!activeProject}
        size="large"
        extra={
          <RightLeftNav
            disabledLeft={activeProjectIndex === 0}
            disabledRight={activeProjectIndex === filteredProjects.length - 1}
            onClickLeft={() => handleNavigate("left")}
            onClickRight={() => handleNavigate("right")}
          />
        }
      >
        {/* TODO: Setup detail view */}
      </Drawer>
    </StyledWrapper>
  );
};

export default Portfolio;
