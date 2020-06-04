import styled from "styled-components"
import { media } from "../../styles/media"

export const TextNoBorder = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  padding: 50px;
  p {
    font-size: 17px;

    text-align: ${({ alignLeft }) => (alignLeft ? "left" : "right")};
  }
  ${media.phone} {
    padding: 10px;
    width: 100% !important;
  }
`
