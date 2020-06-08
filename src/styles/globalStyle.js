import { createGlobalStyle } from "styled-components"

import { colors } from "../styles/colors"

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
    scroll-behavior: smooth;
}

*, *::before, *::after {
    box-sizing: border-box
}
::selection {
    background-color: ${colors.yellow}
}
body{
    margin: 0;
     padding: 0;
     font-family: "Montserrat"
}

button {
    margin: 0;
    cursor: pointer;
}

p{

    font-size: 15px;
    line-height:150%
}

a {
    text-decoration: none;
    color: inherit;
}

.scrollTopButton {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 14px;
    transform: rotate(90deg);
    width:120px;
    height: 50px;
    text-align: center;
    position: fixed;
    /* background-color: pink; */
    visibility: inherit;
    overflow: hidden;
    z-index: 99999999;
    color: ${colors.greyDark};
    right: 0px;
    scroll-behavior: smooth;
    bottom: 100px;
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items:center;
    justify-content: space-between
}
 span{
        font-size: 30px;
        color: ${colors.greyDark};
        font-family: "";
        font-weight: 400;

  }

  .overlay {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity .3s;
}

.overlay Image{
  max-width: 90%;
  max-height: 90%;
  width: auto;
  height: auto;
  transform: scale(0.95);
  transition: transform .3s;
}

.overlay:target {
  visibility: visible;
  outline: none;
  cursor: default;
}

.overlay:target Image {
    transform: scale(1);
}
`

export default GlobalStyle
