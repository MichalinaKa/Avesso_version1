import styled from "styled-components"
import { media } from "../../styles/media"

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  /* background-color: red; */
  ${media.phone} {
    width: 100%;
  }
`
