import styled from "styled-components"
import { media } from "../../styles/media"
export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0;
  width: 100%;
  ${media.phone} {
    margin: 20px auto;
  }
`
