import styled from "styled-components"
import { colors } from "../../styles/colors"
import { media } from "../../styles/media"
export const H1 = styled.h1`
  font-size: 35px;
  font-family: "Montserrat";
  font-weight: 400;
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
    width: 100%;
    position: absolute;
    height: 50px;
    top: 50px;
    left: 0;
    right: 50%;
    padding-right: 5px;
    font-size: 20px;
    margin: 50px auto 0;
    transform: none;
  }
  :before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${colors.yellow};
    position: absolute;
    top: 25px;
    right: 500px;
    ${media.phone} {
      top: 10px;
      right: 0px;
      width: 100%;
    }
  }
`
