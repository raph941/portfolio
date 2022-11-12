import classNames from 'classnames'
import React, { FC } from 'react'
import { Row } from 'reactstrap'
import styled from 'styled-components'

import { UserDataType } from '../data/userData'

import { StyledBodyText, StyledSectionTitle, StyledH4 } from './StyledElements'

interface WhatIDoProps {
    data: UserDataType['whatIDo']
    className?: string
}

const StyledWrapper = styled.div`
    min-height: 60vh;
    padding: 100px 0;

    .items-wrapper {
        max-width: 700px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`

const WhatIDo: FC<WhatIDoProps> = ({ data, className }) => (
    <StyledWrapper className={classNames(className, 'page-content')}>
        <StyledSectionTitle className="weight-bold">What I Do</StyledSectionTitle>

        <Row>
            {data?.map(({ title, description, icon: Icon }, key) => (
                <div className="items-wrapper mt-3" key={key}>
                    <div className="d-flex flex-column align-items-center">
                        <Icon height={60} width={60} />
                        <div className="mt-4">
                            <StyledH4 className="text-center font-weight-bold">{title}</StyledH4>
                            <StyledBodyText className="text-center text-justify">
                                {description}
                            </StyledBodyText>
                        </div>
                    </div>
                </div>
            ))}
        </Row>
    </StyledWrapper>
)

export { WhatIDo }
