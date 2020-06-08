import styled from "styled-components"
import { media } from "../../styles/media"
import { colors } from "../../styles/colors"

export const TextWithBorder = styled.div`
  border: 3px solid ${colors.greyLight};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px;
  p {
    font-size: 15px;
    text-align: ${({ alignLeft }) => (alignLeft ? "left" : "right")};
  }
  ${media.tablet} {
    padding: 20px;
  }
  ${media.phone} {
    padding: 10px;
  }
`
