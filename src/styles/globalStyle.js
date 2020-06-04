import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
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

`
export default GlobalStyle
