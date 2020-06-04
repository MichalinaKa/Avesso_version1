import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { NavMainWrapper } from "../topNavElements/navMainWrapper"
import { ListWrapper } from "../topNavElements/listWrapper"
import arrowLeft from "../../assets/icons/arrowLeft.png"
import arrowRight from "../../assets/icons/arrowRight.png"
const Arrow = styled.img`
  width: 40px;
  height: 30px;
`

const TopNavArtistPage = () => (
  <NavMainWrapper>
    <ListWrapper>
      <goHome>
        <Link to="/alan">
          {" "}
          <Arrow src={arrowLeft}></Arrow>
        </Link>
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
