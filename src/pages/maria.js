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

const MariaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[16].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://www.youtube.com/embed/hjGN9gCKcDU"
            videoTitle=""
          />
          <ImageTitle>
            {data.allDataJson.edges[16].node.video1Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[16].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[16].node.website}</Website>
        <TextWithBorder>
          <p>
            Avesso do avesso do avesso: dois meses de mundo virado do avesso
            culmina assim, num azul do céu agora limpo, que se expande e se
            extingue em luz agora branca. A cor azul tão nítida como não me
            lembro. Os pássaros desfocados. O som do mar. A luz branca, tão
            branca!... E uma voz no fim, inspira, suspende e admira.<br></br>O
            azul que espelha estes meses de 2020: o Azul Avesso.
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
          video1Description
        }
      }
    }
    allFile(filter: { relativePath: { regex: "/maria/" } }) {
      nodes {
        childImageSharp {
          fluid(quality: 90) {
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`
export default MariaPage
