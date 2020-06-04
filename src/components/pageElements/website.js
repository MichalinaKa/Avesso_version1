import styled from "styled-components"
import { colors } from "../../styles/colors.js"
import { media } from "../../styles/media"
export const Website = styled.h3`
  width: 100%;
  color: ${colors.greyLight};
  height: 50px;
  font-size: 20px;
  padding: 0 50px;
  ${media.tablet} {
    font-size: 15px;
  }
  ${media.phone} {
    padding: 0;
  }
`
