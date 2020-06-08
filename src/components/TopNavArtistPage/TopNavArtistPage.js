import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { media } from "../../styles/media"
// import { NavMainWrapper } from "../topNavElements/navMainWrapper"
// import { ListWrapper } from "../topNavElements/listWrapper"
import arrowLeft from "../../assets/icons/arrowLeft.png"
import arrowRight from "../../assets/icons/arrowRight.png"
const Arrow = styled.img`
  width: 40px;
  height: 30px;
`
const NavMainWrapper = styled.nav`
  margin: 30px auto 100px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  font-size: 15px;
  width: 100%;
  font-family: "Montserrat";
  justify-content: space-between;
  ${media.phone} {
    padding: 0 10px 0 10px;
  }
`

// const goHome = styled.li`
//   padding-top: 10px;
//   width: 100%;
//   text-align: center;
//   text-decoration: none;
//   color: inherit;
//   text-align: center;
//   a {
//     text-decoration: none;
//     color: inherit;
//     :hover {
//       background-color: yellow;
//     }
//   }
// `

const ListWrapper = styled.ul`
  margin: 0;
  font-family: "Montserrat";
  font-weight: 300;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: none;
`

const TopNavArtistPage = () => (
  <NavMainWrapper>
    <ListWrapper>
      <Link to="">
        {" "}
        <Arrow src={arrowLeft}></Arrow>
      </Link>
      <Link to="/">home</Link>

      <Arrow src={arrowRight} />
    </ListWrapper>
  </NavMainWrapper>
)

export default TopNavArtistPage
