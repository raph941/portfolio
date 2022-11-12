import moment from 'moment'
import React from 'react'
import styled from 'styled-components'

import { BlogType } from '../lib/types'
import { ThemeType } from '../styles/theme'

import { StyledBodyText, StyledH4 } from './StyledElements'

export const DEFAULT_IMAGE =
    'http://blog.raph941.opulentpeerless.com/wp-content/uploads/2022/09/software-developer-6521720_1920.jpg'

export interface BlogItemProps extends BlogType {
    onClick: (slug: string) => void
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
    cursor: pointer;

    .category {
        position: relative;
        background: ${({ theme }) => theme.colors.gray1};
        border-radius: 3px;
        padding: 3px 7px;
        line-height: 1.2em;
        font-size: 11px;
        color: ${({ theme }) => theme.colors.textGray1};
        width: fit-content;
    }
`

const StyledImage = styled.div<{ bgImage?: string }>`
    height: 191px;
    border-radius: 12px;
    background-size: cover;
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    margin-bottom: 12px;
    padding: 12px;
    transition: 0.2s all ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

const BlogItem: React.FunctionComponent<BlogItemProps> = ({
    categories,
    featuredImage,
    date,
    title,
    slug,
    onClick,
}) => {
    return (
        <StyledWrapper onClick={() => onClick(slug)}>
            <StyledImage bgImage={featuredImage?.sourceUrl || DEFAULT_IMAGE}>
                <StyledBodyText className="category">{categories?.[0].name}</StyledBodyText>
            </StyledImage>
            <div>
                <StyledBodyText className="mb-0">
                    <small>{moment(date).format('Do MMM, YYYY')}</small>
                </StyledBodyText>
                <StyledH4 className="title">{title}</StyledH4>
            </div>
        </StyledWrapper>
    )
}

export { BlogItem }
