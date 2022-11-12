import { NextSeo } from 'next-seo'
import React, { ReactNode } from 'react'

import { userData } from '../data/userData'

import { AnimatedDiv } from './StyledElements'

interface LayoutProps {
    children: ReactNode
    title?: string
    description?: string
    url?: string
    type?: string
    imageUrl?: string
    articleTags?: string[]
    articlePublishedDate?: string
    articleModifiedDate?: string
    articleAuthorUrl?: string[]
}

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({
    children,
    description = userData.og.description ||
        `Hi, this is ${userData.meta.fullname}'s portfolio site. Checkout some of my recent work on here.`,
    imageUrl = userData.og.image,
    url = userData.og.siteBaseUrl,
    title = `${userData.meta.fullname}'s Portfolio site`,
    type = 'website',
    articleTags = [],
    articleModifiedDate,
    articlePublishedDate,
    articleAuthorUrl,
}: LayoutProps): JSX.Element => (
    <>
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title,
                description,
                url,
                type,
                article: {
                    publishedTime: articlePublishedDate,
                    modifiedTime: articleModifiedDate,
                    authors: articleAuthorUrl,
                    tags: articleTags,
                },
                images: [
                    {
                        url: imageUrl,
                        alt: `${title} thumbnail`,
                    },
                ],
            }}
            twitter={{
                handle: userData.og.twitterHandle,
                cardType: 'summary_large_image',
                site: userData.og.twitterHandle,
            }}
        />

        <AnimatedDiv
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
        >
            {children}
        </AnimatedDiv>
    </>
)

export { Layout }
