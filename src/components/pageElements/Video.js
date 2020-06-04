import React from "react"
import styled from "styled-components"
import { media } from "../../styles/media"

const StyledVideo = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  iframe {
    width: 700px;
    height: 600px;
    ${media.smallDesktop} {
      width: 100%;
    }
    ${media.phone} {
      width: 80%;
    }
  }
`

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <StyledVideo>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledVideo>
)
export default Video
