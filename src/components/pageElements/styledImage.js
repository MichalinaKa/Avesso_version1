import styled from "styled-components"
import { media } from "../../styles/media"
export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  padding: 0 0 10px 20px;
  object-fit: contain;
  margin: 0 auto;
  ${media.phone} {
    padding: 0 0 10px 0;
  }
`