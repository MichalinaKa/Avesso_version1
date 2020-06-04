import styled from "styled-components"
import { colors } from "../../styles/colors"
import { media } from "../../styles/media"
export const H1 = styled.h1`
  font-size: 40px;
  font-family: "Montserrat";
  font-weight: 100;
  text-align: right;
  transform: rotate(270deg);
  position: absolute;
  top: 400px;
  left: -150px;
  width: 500px;
  height: 100px;
  ${media.tablet} {
    font-size: 30px;
    left: -180px;
  }
  ${media.phone} {
    position: absolute;
    height: 50px;
    top: 100px;
    right: 0px;
    padding-right: 2px;
    font-size: 18px;
    transform: none;
  }
  :before {
    content: "";
    width: 500px;
    height: 2px;
    background-color: ${colors.yellow};
    position: absolute;
    top: 25px;
    right: 500px;
    ${media.phone} {
      top: 10px;
      right: 0px;
      width: 150px;
    }
  }
`
