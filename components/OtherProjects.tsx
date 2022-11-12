import * as React from 'react'
import styled from 'styled-components'

import { StyledSectionTitle } from './StyledElements'

interface OtherProjectsProp {}

const StyledWrapper = styled.div``

const OtherProjects: React.FunctionComponent<OtherProjectsProp> = ({}) => {
    return (
        <StyledWrapper>
            <StyledSectionTitle className="weight-bold">Some Things I've Built</StyledSectionTitle>
        </StyledWrapper>
    )
}

export { OtherProjects }
