import React from 'react'
import styled from 'styled-components'

import { sectionAnimateIntoView } from '../data/animationConfigs'
import { UserDataType } from '../data/userData'

import { StyledSectionTitle, StyledBodyText, AnimatedDiv } from './StyledElements'

interface AboutProps {
    data?: UserDataType['about']
    techStack: UserDataType['techStack']
}

const StyledWrapper = styled(AnimatedDiv)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .about-text,
    .recent-technologies {
        max-width: 700px;
    }

    .about-text,
    .about-title {
        align-self: flex-start;
    }

    .recent-technologies {
        width: 100%;
    }

    .stack-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0px;
        margin: 20px 0px 0px;
        overflow: hidden;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            padding: 10px;
        }

        .stack-name {
            margin-left: 10px;
        }
    }
`

const About: React.FunctionComponent<AboutProps> = ({ data, techStack }) => (
    <StyledWrapper id="about" {...sectionAnimateIntoView()}>
        <StyledSectionTitle className="about-title">About me</StyledSectionTitle>

        <StyledBodyText className="text-justify about-text">{data?.text}</StyledBodyText>

        <div className="recent-technologies">
            <StyledBodyText className="about-text mb-0">
                Here are a few technologies i've been working with quite recently:
            </StyledBodyText>

            <ul className="stack-list">
                {techStack?.map((stack, key) => (
                    <li key={key} className="">
                        <stack.image height={30} width={25} role="img" />
                        <span className="body-text mx-2">{stack.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    </StyledWrapper>
)

export { About }
