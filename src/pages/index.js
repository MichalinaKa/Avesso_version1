import React from "react"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import MainArtistContainer from "../components/MainArtistContainer/MainArtistContainer"
import { media } from "../styles/media"
import Layout from "../components/Layout/Layout"
import { Link } from "gatsby"

const HeroWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
  margin: 0 auto 150px;
  ${media.tablet} {
    width: 100%;
    flex-wrap: wrap;
  }
  ${media.phone} {
    margin: 0;
    flex-wrap: wrap;
  }
`
const StyledImage = styled.img`
  max-height: 60vh;
  max-width: 60%;
  object-fit: contain;
  margin: 0 auto;
  ${media.tablet} {
    width: auto;
    height: 40vh;
  }
  ${media.phone} {
    width: 100%;
    margin: 0 auto;
  }
`

const IndexPage = () => (
  <Layout>
    <HeroWrapper>
      <StyledImage src="/mainAvesso.jpg" />
      <Navigation />
    </HeroWrapper>

    <MainArtistContainer />
    <Link to="/" className="scrollTopButton">
      {" "}
      <span> &larr;</span>
      to the top
    </Link>
  </Layout>
)

export default IndexPage
