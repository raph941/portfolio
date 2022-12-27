import moment from 'moment'
import React from 'react'
import styled from 'styled-components'

import { ThemeType } from '../styles/theme'

import { BlogItemProps, DEFAULT_IMAGE } from './BlogItem'
import { StyledBodyText, StyledH3 } from './StyledElements'

const StyledWrapper = styled.div<{ theme: ThemeType }>`
    cursor: pointer;
    display: flex;
    box-shadow: 0px 2px 14px -10px ${({ theme }) => theme.colors.dark};
    border-radius: 25px;
    margin-bottom: 50px;

    .img-wrap,
    .text-wrap {
        flex: 1;
    }

    .category {
        line-height: 1.2em;
        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.variables.thetiary};
    }

    .text-wrap {
        display: flex;
        flex-direction: column;
        padding: 25px;

        > h4 {
            flex: 1;
        }
    }

    .truncated-text {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    @media ${(props) => props.theme.mediaQueries.mobileTablet} {
        flex-direction: column;

        .img-wrap {
            flex: auto;
        }
    }
`

const StyledImage = styled.div<{ bgImage?: string }>`
    min-height: 250px;
    border-radius: 25px;
    background-size: cover;
    background-image: ${({ bgImage }) => `url(${bgImage})`};
`

const FeaturedBlogItem: React.FunctionComponent<BlogItemProps> = ({
    categories,
    featuredImage,
    date,
    title,
    slug,
    content,
    onClick,
}) => {
    return (
        <StyledWrapper onClick={() => onClick(slug)}>
            <StyledImage
                className="img-wrap"
                bgImage={featuredImage?.sourceUrl || DEFAULT_IMAGE}
            ></StyledImage>
            <div className="text-wrap">
                <StyledBodyText className="category">{categories?.[0].name}</StyledBodyText>
                <StyledH3 className="title">{title}</StyledH3>
                <StyledBodyText
                    className="truncated-text"
                    dangerouslySetInnerHTML={{ __html: content?.substring(0, 300) || '' }}
                />
                <StyledBodyText className="mb-0">
                    <small>{moment(date).format('Do MMM, YYYY')}</small>
                </StyledBodyText>
            </div>
        </StyledWrapper>
    )
}

export { FeaturedBlogItem }
