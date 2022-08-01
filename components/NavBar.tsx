import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Collapse,
  Nav,
  Navbar as ReactStrapNavbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import styled from "styled-components";
import { UserDataType } from "../utils/data";
import { ThemeType } from "../styles/theme";

const StyledWrapper = styled.div<{ theme: ThemeType }>`
  z-index: 1000;
  background-color: ${({ theme }) => theme.variables.slightlyTransparent};
  width: -webkit-fill-available;
  position: fixed;

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
  }

  .navbar-toggler {
    font-size: 1rem;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
  }
`;

interface NavBarProps {
  userData: UserDataType;
}

const NavBar: FC<NavBarProps> = ({ userData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleNavbarToggle = () => setIsOpen((current) => !current);

  return (
    <StyledWrapper className="px-2 px-sm-5">
      <ReactStrapNavbar expand="md" light>
        <NavbarBrand href="/">
          <Image
            src={userData.meta.imgSrc}
            height={40}
            width={40}
            alt="Avatar"
            className="avatar-image rounded-circle"
          />
        </NavbarBrand>
        <NavbarToggler onClick={handleNavbarToggle} />
        <Collapse
          isOpen={isOpen}
          className="ml-auto justify-content-end"
          navbar
        >
          <Nav navbar>
            <NavItem className="px-sm-3">
              <Link className="nav-link" href="/about/">
                <span className="nav-link">About</span>
              </Link>
            </NavItem>
            <NavItem className="px-sm-3">
              <Link className="nav-link" href="/portfolio/">
                <span className="nav-link">Portfolio</span>
              </Link>
            </NavItem>
            <NavItem className="px-sm-3">
              <Link className="nav-link" href="/blog/">
                <span className="nav-link">Blog</span>
              </Link>
            </NavItem>
            <NavItem className="px-sm-3">
              <Link className="nav-link" href="/contact/">
                <span className="nav-link">Contact</span>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </ReactStrapNavbar>
    </StyledWrapper>
  );
};

export { NavBar };
