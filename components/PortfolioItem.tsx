import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import GithubIcon from "/public/assets/icons/github-brands.svg";
import GitLabIcon from "/public/assets/icons/gitlab-brands.svg";
import FolderIcon from "/public/assets/icons/folder-solid.svg";
import ExternalLinkIcon from "/public/assets/icons/external-link.svg";
import Image from "next/image";

const getCodeHostIcon = (hostLink: string) => {
  if (hostLink.includes("gitlab")) {
    return GitLabIcon;
  }
  return GithubIcon;
};

interface PortfolioItemProps {
  title: string;
  description: string;
  stacks: string[];
  codeHost: string;
  liveLink: string;
  icon?: string;
}

const StyledWrapper = styled.div`
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.282);

  .card-header,
  .card-body,
  .card-footer {
    background-color: transparent;
    border: none;
  }

  .card-footer {
    padding: 0;
  }

  .card-header {
    padding-bottom: 0;
    padding-top: 1rem;
  }
`;

const PortfolioItem: React.FunctionComponent<PortfolioItemProps> = ({
  codeHost,
  description,
  liveLink,
  stacks,
  title,
  icon,
}) => {
  return (
    <StyledWrapper as={Card} className="card" role="button">
      <CardHeader>
        <div className="d-flex justify-content-between links">
          <Image src={icon || FolderIcon} width={30} height={30} alt="Folder" />

          <div className="d-flex align-items-center gap-2">
            <a target="_blank" href={liveLink} rel="noreferrer">
              <Image
                src={ExternalLinkIcon}
                width={15}
                height={15}
                alt="Folder"
              />
            </a>

            <a target="_blank" href={codeHost} rel="noreferrer">
              <Image
                src={getCodeHostIcon(codeHost)}
                width={15}
                height={15}
                alt="Folder"
              />
            </a>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardFooter>
          {stacks?.map((value, index) => (
            <small className="mr-2" key={index}>{value}</small>
          ))}
        </CardFooter>
      </CardBody>
    </StyledWrapper>
  );
};

export { PortfolioItem };
