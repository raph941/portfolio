import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    Collapse,
    Nav,
    Navbar as ReactStrapNavbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap'
import styled from 'styled-components'

import { UserDataType } from '../data/userData'
import { ThemeType } from '../styles/theme'

import ModeIcon from '/public/assets/icons/mode.svg'
import GithubIcon from '/public/assets/images/github-brands.svg'

const StyledWrapper = styled.div<{ theme: ThemeType }>`
    z-index: 1000;
    background-color: ${({ theme }) => theme.variables.slightlyTransparent};
    width: -webkit-fill-available;
    position: fixed;

    .mode_toggler {
        z-index: 10;
    }

    .navbar-collapse {
        margin-right: -18px;
        margin-left: -16px;
        padding: 0px 16px;
    }

    .navbar-toggler:focus {
        box-shadow: none;
    }

    .nav-link {
        cursor: pointer;
        color: ${({ theme }) => theme.variables.textColor};
    }

    .navbar-toggler {
        font-size: 1rem;
    }

    .navbar-toggler {
        background-color: ${({ theme }) => theme.variables.navIconBg};
    }

    .navbar-brand {
        display: flex;
        align-items: center;
    }
`

const StyledNavItem = styled(NavItem)`
    font-weight: 500;
`

interface NavBarProps {
    userData: UserDataType
    toggleThemeMode: () => void
}

const NavBar: FC<NavBarProps> = ({ userData, toggleThemeMode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleNavbarToggle = () => setIsOpen((current) => !current)
    const PORTFOLIO_CODE_LINK = 'https://github.com/raph941/portfolio'
    const hasWordpressServer = !!process.env.NEXT_PUBLIC_WORDPRESSQL_SERVER

    const { pathname } = useRouter()

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <StyledWrapper className="px-2 px-sm-5">
            <ReactStrapNavbar expand="md" light>
                <NavbarBrand className="d-flex justify-content-between">
                    <Link href="/">
                        <Image
                            src={userData.meta.imgSrc}
                            height={40}
                            width={40}
                            alt="Avatar"
                            loading="eager"
                            priority={true}
                            className="avatar-image rounded-circle"
                        />
                    </Link>
                </NavbarBrand>

                <div
                    className="mode_toggler flex-1"
                    role="button"
                    onClick={() => toggleThemeMode()}
                >
                    <ModeIcon height={30} width={30} />
                </div>
                <NavbarToggler onClick={handleNavbarToggle} />

                <Collapse isOpen={isOpen} className="ml-auto justify-content-end" navbar>
                    <Nav navbar>
                        <StyledNavItem className="px-sm-3">
                            <Link className="nav-link" href="/#about">
                                <span className="nav-link">About</span>
                            </Link>
                        </StyledNavItem>
                        <StyledNavItem className="px-sm-3">
                            <Link className="nav-link" href="/#contact">
                                <span className="nav-link">Contact</span>
                            </Link>
                        </StyledNavItem>
                        <StyledNavItem className="px-sm-3">
                            <Link className="nav-link" href="/portfolio/">
                                <span className="nav-link">Portfolio</span>
                            </Link>
                        </StyledNavItem>
                        {hasWordpressServer && (
                            <StyledNavItem className="px-sm-3">
                                <Link className="nav-link" href="/blogs/">
                                    <span className="nav-link">Blog</span>
                                </Link>
                            </StyledNavItem>
                        )}
                        <StyledNavItem className="px-sm-3 d-flex align-items-center">
                            <NavLink
                                target="_blank"
                                className="nav-link"
                                href={PORTFOLIO_CODE_LINK}
                            >
                                <GithubIcon height={20} width={20} />
                            </NavLink>
                        </StyledNavItem>
                    </Nav>
                </Collapse>
            </ReactStrapNavbar>
        </StyledWrapper>
    )
}

export { NavBar }
