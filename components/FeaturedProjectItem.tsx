import Image from 'next/image'
import * as React from 'react'
import styled from 'styled-components'

import { StyledBodyText, StyledH2, StyledH4 } from './StyledElements'

interface FeaturedProjectsprop {
    image?: string
    title?: string
    description?: string
    stacks: string[]
    liveLink: string
    codehost: string
}

const StyledWrapper = styled.div`
    .image-wrap {
        grid-column: 1 / 8;
        width: 100%;
        object-fit: contain;
        height: 300px;
    }

    .text-content-wrap {
        text-align: right;
        z-index: 10;
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
`

const FeaturedProjects: React.FunctionComponent<FeaturedProjectsprop> = ({
    codehost,
    liveLink,
    stacks,
    description,
    image = '',
    title,
}) => {
    return (
        <StyledWrapper
            className="d-flex align-items-center justify-content-center flex-column flex-sm-row
    ]"
        >
            <div className="d-flex flex-column text-content-wrap align-items-end">
                <StyledH2 className="mb-2">{title}</StyledH2>
                <StyledH4 className="description-card">{description}</StyledH4>

                <div className="stacks-wrap d-flex gap-3">
                    {stacks?.map((stack, index) => (
                        <StyledBodyText key={index}>{stack}</StyledBodyText>
                    ))}
                </div>
                <div className="links-wrap"></div>
            </div>

            <div className="image-wrap position-relative">
                <Image src={image} alt={title} layout="fill" objectFit="contain" />
            </div>
        </StyledWrapper>
    )
}

export { FeaturedProjects }
