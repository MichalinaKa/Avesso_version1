// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import { H1 } from "../components/pageElements/H1"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import { GalleryWrapper } from "../components/pageElements/galleryWrapper"
import { ImageWrapper } from "../components/pageElements/imageWrapper"
import { StyledImage } from "../components/pageElements/styledImage"
import { ImageTitle } from "../components/pageElements/imageTitle"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { TextWithBorder } from "../components/pageElements/textWithBorder"
import { TextNoBorder } from "../components/pageElements/textNoBorder"
import { TitleOfWork } from "../components/pageElements/titleOfWork"
import { Website } from "../components/pageElements/website"
import Video from "../components/pageElements/Video"
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"

const Susana2Page = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[25].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susana2img1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[25].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susana2img2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[25].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susana2img3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[25].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://player.vimeo.com/video/348811505"
            videoTitle=""
          />
          <ImageTitle>
            {data.allDataJson.edges[26].node.video1Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[25].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[25].node.website}</Website>
        <TextWithBorder>
          <p>
            What is the challenge of our time, given the socio-economic trends
            and those of the Earth system? Is it not a change in the system that
            is so transformative, persistent and adaptable that it forces us to
            develop a new challenging logic and hitherto nonexistent?<br></br>
            think as a bird<br></br>
            develop a cosmic conscience<br></br>
            search for meteors on the ground<br></br>
            time is passing by<br></br>
            how to bend curves?<br></br>
            <br></br>
            imagine a highway without guiding lines<br></br>
            with humans making cakes<br></br>
            building ghost towns<br></br>
            digging open pit mines like children do when playing with sand
            <br></br>
            living within an autophagic society<br></br>
            <br></br>
            thoughts are like clouds, they pass by<br></br>
            <br></br>
            do assemblages with differentiated bodies and like Spinoza thinks,
            imagine the very great number<br></br>
            of extensive parts<br></br>
            catch plastic objects from the sea side and do taxonomy with them
            <br></br>
            <br></br>
            catch plastic objects from the sea side and do taxonomy with them
          </p>
        </TextWithBorder>
        <TextNoBorder></TextNoBorder>
      </TextWrapper>
    </MainWrapper>
  </Layout>
)
export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          name
          title
          website
          url
          img1Description
          img2Description
          img3Description
          video1Description
        }
      }
    }
  }
`
export default Susana2Page
