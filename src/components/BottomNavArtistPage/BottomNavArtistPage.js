import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../styles/media.js"
const NavigationWrapper = styled.nav`
  margin: 50px auto 50px;
  display: flex;
  flex-wrap: wrap;
  font-size: 15px;
  width: 60%;
  font-family: "Montserrat";
  ${media.phone} {
    width: 100%;
    margin: 0 auto;
  }
`

const NavigationList = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  ${media.phone} {
    display: block;
    padding: 0;
    margin-bottom: 50px;
  }
`
const NavigationListItem = styled.li`
  padding-top: 10px;
  width: 30%;
  text-align: center;
  text-decoration: none;
  color: inherit;
  ${media.phone} {
    width: 100%;
    padding-top: 30px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`
const NavigationListItemUp = styled.li`
  padding: 20px;
  border-bottom: 1px black solid;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  color: inherit;
  list-style: none;
`

const BottomNavArtistPage = () => (
  <NavigationWrapper>
    <NavigationListItemUp>2020</NavigationListItemUp>
    <NavigationList>
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

export default BottomNavArtistPage
