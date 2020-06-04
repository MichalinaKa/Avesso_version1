import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../../styles/colors"
import { media } from "../../styles/media"

const NavigationWrapper = styled.nav`
  display: flex;
  margin: 100px;
  justify-content: flex-end;
  width: 90%;
  font-family: "Montserrat";
  ${media.tablet} {
    width: 100%;
    margin: 0 auto;
  }
  ${media.phone} {
    width: 100%;
    margin: 0 auto;
  }
`
const NavigationList = styled.ul`
  margin: 0;
  text-align: left;
  padding: 100px;
  border-left: 2px solid ${colors.greyLight};
  list-style: none;
  position: relative;

  ${media.tablet} {
    width: 70%;
    margin: 0 auto;
  }
  ${media.phone} {
    margin: 0 auto;
    border: none;
    padding: 50px 0;
  }
`

const NavigationListItem = styled.li`
  padding: 10px 0;
  font-size: 20px;
  :first-child:before {
    content: "";
    background-color: ${colors.yellow};
    width: 60px;
    height: 3px;
    position: absolute;
    top: 121px;
    ${media.phone} {
      top: 70px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      background-color: ${colors.yellow};
    }
  }
`

const Navigation = () => (
  <NavigationWrapper>
    <NavigationList>
      <NavigationListItem>
        <Link to="/">artists</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/textPt">text PT /</Link>
        <Link to="/textEn"> ENG</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/credits">credits</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
)

export default Navigation
