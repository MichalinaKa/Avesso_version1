import styled from "styled-components"
import { media } from "../../styles/media"

export const TextWrapper = styled.div`
  display: flex;
  font-weight: 300;
  flex-direction: column;
  text-align: ${({ centered }) => (centered ? "center" : "right")};

  flex-wrap: wrap;
  padding: 50px;
  width: 100%;
  ${media.tablet} {
    padding: 20px;
  }
  ${media.phone} {
    padding: 5px;
  }
`
