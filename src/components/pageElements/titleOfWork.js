import styled from "styled-components"
import { media } from "../../styles/media"
export const TitleOfWork = styled.h2`
  width: 100%;
  font-size: 30px;
  padding: 0 50px 0 200px;
  ${media.tablet} {
    font-size: 20px;
    padding: 0 50px 0 0;
  }
  ${media.phone} {
    padding: 0;
  }
`
