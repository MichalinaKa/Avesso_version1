import styled from "styled-components"
import { media } from "../../styles/media"
export const StyledImage = styled.img`
  width: 90%;
  max-height: 700px;
  height: auto;
  padding: 0 0 10px 20px;
  object-fit: contain;
  margin: 0 auto;
  transition: all 0.6s ease-in-out;
  ${media.phone} {
    padding: 0 0 10px 0;
  }
  &:hover {
    transform: scale(1.4);
    transform: ${({ bigScale }) => (bigScale ? "scale(1.7)" : "scale(1.3)")};
    ${media.phone} {
      transform: none;
    }
  }
`
