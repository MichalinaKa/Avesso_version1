import styled from "styled-components"
import { media } from "../../styles/media"
import { colors } from "../../styles/colors"

export const TextWithBorder = styled.div`
  border: 2px solid ${colors.grey};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px;
  p {
    text-align: ${({ alignLeft }) => (alignLeft ? "left" : "right")};
  }
  ${media.phone} {
    padding: 10px;
  }
`
