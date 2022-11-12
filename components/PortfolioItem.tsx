import { Card, CardHeader, CardBody, CardFooter, CardTitle, CardText } from 'reactstrap'
import styled from 'styled-components'

import GithubIcon from '/public/assets/icons/github-brands.svg'
import GitLabIcon from '/public/assets/icons/gitlab-brands.svg'
import FolderIcon from '/public/assets/icons/folder-solid.svg'
import ExternalLinkIcon from '/public/assets/icons/external-link.svg'

import { ProjectType } from '../lib/types'

interface PortfolioItemProps extends ProjectType {
    icon?: string
    onClick?: () => void
}

const StyledWrapper = styled.div`
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.282);
    max-width: 343px;
    border: 0.5px solid ${({ theme }) => theme.variables.borderColor};
    background-color: transparent;

    .card-header,
    .card-body,
    .card-footer {
        background-color: transparent;
        color: ${({ theme }) => theme.variables.bodyColor};
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

    .item-description {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`

const PortfolioItem: React.FunctionComponent<PortfolioItemProps> = ({
    codeHost = '',
    description,
    liveLink,
    stacks,
    title,
    icon,
    onClick,
}) => {
    const CodehostIcon = codeHost.includes('gitlab') ? GitLabIcon : GithubIcon
    return (
        <StyledWrapper onClick={onClick} as={Card} className="card" role="button">
            <CardHeader>
                <div className="d-flex justify-content-between links">
                    <FolderIcon width={30} height={30} alt="Folder" />

                    <div className="d-flex align-items-center">
                        {liveLink && (
                            <a target="_blank" href={liveLink} rel="noreferrer">
                                <ExternalLinkIcon width={15} height={15} />
                            </a>
                        )}

                        {codeHost && (
                            <a
                                className="codehost-icon"
                                target="_blank"
                                href={codeHost}
                                rel="noreferrer"
                            >
                                <CodehostIcon width={15} height={15} alt="Folder" />
                            </a>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardBody className="d-flex flex-column">
                <CardTitle>{title}</CardTitle>
                <CardText className="flex-fill item-description">{description}</CardText>
                <CardFooter className="mt-2">
                    {stacks?.map((value, index) => (
                        <small className="mx-2 text-nowrap" key={index}>
                            {value}
                        </small>
                    ))}
                </CardFooter>
            </CardBody>
        </StyledWrapper>
    )
}

export { PortfolioItem }
