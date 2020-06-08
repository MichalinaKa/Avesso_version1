import styled from "styled-components"
import { media } from "../../styles/media"

export const ImageWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  width: ${({ isBig }) => (isBig ? "61%" : "40%")};
  margin: 0 auto;
  audio {
    margin: 0 auto;
  }
  ${media.tablet} {
    width: 80%;
  }
  ${media.phone} {
    width: 100%;
  }
`
