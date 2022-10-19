import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled, { createGlobalStyle } from "styled-components";
import {
  AnimatedDiv,
  Layout,
  PortfolioItem,
  RightLeftNav,
  StyledBodyText,
  StyledH1,
  StyledH3,
} from "../components";
import { ThemeType } from "../styles/theme";
import { UserDataType } from "../data/userData";
import { Drawer, Empty, Switch } from "antd";
import { ProjectType } from "../lib/types";
import { AnimatePresence } from "framer-motion";
import { portfolioFilterAnimate } from "../data/animationConfigs";
import { Badge } from "reactstrap";

interface PortfolioProps {
  userData: UserDataType;
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  min-height: calc(100vh - 120px);
  margin-top: 66px;

  .portfolio-image {
    img {
      border-radius: 10px;
    }
  }

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
  .ant-drawer-title {
    display: flex;
    align-items: center;

    h3 {
      margin: 0;
    }
  }

  .ant-drawer-header {
    border: none;
  }
    
  .ant-drawer-content {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
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

  .ant-drawer-wrapper-body {
    background-color: ${({ theme }) => theme.variables.footerBg};

    .portfolio-image {
      border-radius: 18px;
    }
  }
`;

const StyledEmpty = styled(Empty)`
  color: ${({ theme }) => theme.colors.dark};
  padding: 50px 0;
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

  const getEmptyText = () => {
    if (
      !portfolio?.featuredProjects?.length &&
      !portfolio?.otherProjects?.length
    ) {
      return "Oops!, no portfolio project has been uploaded yet.";
    }

    return "There are no projects in this category. Perhaps check other categories";
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

  const handlePortfolioItemClick = (project: ProjectType, index: number) => {
    setActiveProjectIndex(index);
    setActiveproject(project);
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
    <Layout>
      <StyledWrapper>
        <DrawerStyles />
        <StyledH1 className="page-title">Portfolio</StyledH1>
        <StyledBodyText>
          Some notable projecs I've worked on. To see more projects toggle the
          "View Achieve" below (they probably have not been updated in a while)
        </StyledBodyText>

        <ul className="portfolio-filters">
          <div className="d-inline-flex align-items-center achive-toggler-wrap">
            <Switch
              id="switch"
              size="small"
              className="mx-2"
              onChange={setShowAchieve}
            />
            <label role="button" htmlFor="switch">
              view achieve
            </label>
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

        <AnimatePresence exitBeforeEnter>
          <AnimatedDiv
            key={activeFilter}
            className="projects-wrapper"
            {...portfolioFilterAnimate}
          >
            {!!filteredProjects.length ? (
              filteredProjects?.map((projectData, index) => (
                <PortfolioItem
                  onClick={() => handlePortfolioItemClick(projectData, index)}
                  key={index}
                  {...projectData}
                />
              ))
            ) : (
              <StyledEmpty description={getEmptyText()} />
            )}
          </AnimatedDiv>
        </AnimatePresence>

        <Drawer
          title={<StyledH3>{activeProject?.title}</StyledH3>}
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
          <AnimatePresence exitBeforeEnter>
            <AnimatedDiv
              key={activeProject?.title}
              {...portfolioFilterAnimate}
              className=""
            >
              <div className="stack-badges mb-3">
                {activeProject?.stacks?.map((value) => (
                  <Badge className="mx-2">{value}</Badge>
                ))}
              </div>
              {/* <a href="https://www.loom.com/share/76de4cc0fd0e4d1c944a4b4ae4caf640">
                <p>daba - join the future of investing in Africa - 19 October 2022 - Watch Video</p>
                <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/76de4cc0fd0e4d1c944a4b4ae4caf640-with-play.gif">
              </a> */}
              {activeProject?.image && (
                <Image
                  src={activeProject?.image}
                  layout="intrinsic"
                  height="300"
                  width="500"
                  className="portfolio-image"
                />
              )}

              <StyledBodyText className="mt-3">
                {activeProject?.description}
              </StyledBodyText>
            </AnimatedDiv>
          </AnimatePresence>
        </Drawer>
      </StyledWrapper>
    </Layout>
  );
};

export default Portfolio;
