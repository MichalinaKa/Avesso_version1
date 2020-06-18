import { createGlobalStyle } from "styled-components"
import { media } from "../styles/media"
import { colors } from "../styles/colors"

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

*, *::before, *::after {
    box-sizing: border-box
}
::selection {
    background-color: ${colors.yellow}
}
body{
    scroll-behavior: smooth;
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
    right: -20px;
    scroll-behavior: smooth;
    bottom: 100px;
    transition: all 0.5s ease-in-out;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${media.tablet}{
        right: -30px;
    }
    ${media.phone}{
        width: 100%;
        justify-content: flex-start;
        bottom: 0;
        /* color: ${colors.black}; */
        transform: rotate(0deg);
        background-color: rgba(255,255,255, 0.8);
        padding: 0 120px;
    }
}
 span{
        font-size: 30px;
        color: ${colors.greyDark};
        font-family: "";
        font-weight: 400;
        ${media.phone}{
            /* color: ${colors.black}; */

            transform: rotate(90deg)
        }

  }







`

export default GlobalStyle
