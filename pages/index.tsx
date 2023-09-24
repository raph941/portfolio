import { FC } from 'react'
import styled from 'styled-components'

import { WhatIDo, HeroPage, About, Contact, Layout } from '../components'
import { UserDataType } from '../data/userData'
import { ThemeType } from '../styles/theme'

interface HeroProps {
    userData: UserDataType
}

const StyledWrapper = styled.div<{ theme: ThemeType }>`
    .section {
        width: 100%;
        margin: 3rem 0;
    }
`

const Home: FC<HeroProps> = (props) => {
    const { userData } = props
    const wrapperClassName =
        'd-flex flex-column justify-content-center align-items-center px-sm-5 page-content pt-4 pt-sm-0'

    return (
        <Layout>
            <StyledWrapper className={wrapperClassName}>
                <HeroPage data={userData?.meta} />

                <About data={userData?.about} techStack={userData?.techStack} />

                <WhatIDo data={userData?.whatIDo} className="section mt-5 w-100" />

                <Contact data={userData?.contact} className="section" />
            </StyledWrapper>
        </Layout>
    )
}

export default Home
