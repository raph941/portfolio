import classNames from 'classnames'
import Image from 'next/image'
import React, { FC } from 'react'
import { Col, Row } from 'reactstrap'
import styled from 'styled-components'

import { UserDataType } from '../data/userData'

import { StyledSectionTitle, StyledH4 } from './StyledElements'

interface TechStackProps {
    data: UserDataType['techStack']
    className?: string
}

const StyledWrapper = styled.div`
    .icon {
        font-size: 2.0625rem;
        margin-right: 20px;
    }
`

const TechStack: FC<TechStackProps> = ({ data, className }) => (
    <StyledWrapper className={classNames(className, 'page-content')}>
        <StyledSectionTitle className="weight-bold">Daily Tools</StyledSectionTitle>

        <Row>
            {data?.map(({ image, name }, key) => (
                <Col key={key} className="d-flex flex-column align-items-center">
                    <Image className="" src={image} alt="language" height={40} width={40} />
                    <StyledH4 className="mt-2">{name}</StyledH4>
                </Col>
            ))}
        </Row>
    </StyledWrapper>
)

export { TechStack }
