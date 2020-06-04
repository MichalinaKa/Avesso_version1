import styled from "styled-components"
import { media } from "../../styles/media"
export const NavMainWrapper = styled.nav`
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
