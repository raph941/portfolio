import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { PortfolioItem, RightLeftNav, StyledH1 } from "../components";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../utils/data";
import { Drawer } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

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
  const [activeFilter, setActiveFilter] = useState<string | undefined>(
    portfolio?.categories?.[0]
  );
  const allProjects = [
    ...portfolio?.featuredProjects,
    ...portfolio?.otherProjects,
  ];
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeProject, setActiveproject] =
    useState<typeof portfolio["featuredProjects"][number]>();
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>();

  const handleCloseDrawer = () => {
    setActiveproject(undefined);
  };

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

  useEffect(() => {
    console.log({activeFilter})
    if (!activeFilter || activeFilter?.toLowerCase() === 'all') {
      setFilteredProjects(allProjects)
      return
    }

    setFilteredProjects(() =>
      allProjects?.filter((instance) =>
        instance?.category.includes(activeFilter?.toLowerCase() || '')
      )
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  return (
    <StyledWrapper>
      <DrawerStyles />
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
          <PortfolioItem
            onClick={() => {
              setActiveProjectIndex(index);
              setActiveproject(projectData);
            }}
            key={index}
            {...projectData}
          />
        ))}
      </div>

      <Drawer
        title={activeProject?.title}
        placement="bottom"
        onClose={() => handleCloseDrawer()}
        visible={!!activeProject}
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
        Hello world
      </Drawer>
    </StyledWrapper>
  );
};

export default Portfolio;
