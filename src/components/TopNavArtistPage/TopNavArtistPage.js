import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { goHome } from "../topNavElements/goHome"
import { NavMainWrapper } from "../topNavElements/navMainWrapper"
import { ListWrapper } from "../topNavElements/listWrapper"
import arrowLeft from "../../assets/icons/arrowLeft.png"
import arrowRight from "../../assets/icons/arrowRight.png"
import { colors } from "../../styles/colors"
const Arrow = styled.img`
  width: 50px;
  height: 30px;
`

const TopNavArtistPage = () => (
  <NavMainWrapper>
    <ListWrapper>
      <goHome>
        <Arrow src={arrowLeft} />
      </goHome>
      <goHome>
        <Link to="/">home</Link>
      </goHome>
      <goHome>
        <Arrow src={arrowRight} />
      </goHome>
    </ListWrapper>
  </NavMainWrapper>
)

export default TopNavArtistPage
