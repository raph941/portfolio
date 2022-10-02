import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
} from "reactstrap";
import GithubIcon from "/public/assets/icons/github-brands.svg";
import GitLabIcon from "/public/assets/icons/gitlab-brands.svg";
import FolderIcon from "/public/assets/icons/folder-solid.svg";
import ExternalLinkIcon from "/public/assets/icons/external-link.svg";
import Image from "next/image";
import { ProjectType } from "../lib/types";

const getCodeHostIcon = (hostLink: string) => {
  if (hostLink.includes("gitlab")) {
    return GitLabIcon;
  }
  return GithubIcon;
};

interface PortfolioItemProps extends ProjectType {
  icon?: string;
  onClick?: () => void;
}

const StyledWrapper = styled.div`
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.282);
  max-width: 343px;

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

  .codehost-icon {
    margin-left: 0.3125rem;
  }
`;

const PortfolioItem: React.FunctionComponent<PortfolioItemProps> = ({
  codeHost,
  description,
  liveLink,
  stacks,
  title,
  icon,
  onClick,
}) => {
  return (
    <StyledWrapper onClick={onClick} as={Card} className="card" role="button">
      <CardHeader>
        <div className="d-flex justify-content-between links">
          <Image src={icon || FolderIcon} width={30} height={30} alt="Folder" />

          <div className="d-flex align-items-center">
            {liveLink && (
              <a target="_blank" href={liveLink} rel="noreferrer">
                <Image
                  src={ExternalLinkIcon}
                  width={15}
                  height={15}
                  alt="Folder"
                />
              </a>
            )}

            {codeHost && (
              <a className="codehost-icon" target="_blank" href={codeHost} rel="noreferrer">
                <Image
                  src={getCodeHostIcon(codeHost)}
                  width={15}
                  height={15}
                  alt="Folder"
                />
              </a>
            )}
          </div>
        </div>
      </CardHeader>
      <CardBody className="d-flex flex-column">
        <CardTitle>{title}</CardTitle>
        <CardText className="flex-fill">{description}</CardText>
        <CardFooter className="mt-2">
          {stacks?.map((value, index) => (
            <small className="mx-2 text-nowrap" key={index}>
              {value}
            </small>
          ))}
        </CardFooter>
      </CardBody>
    </StyledWrapper>
  );
};

export { PortfolioItem };
