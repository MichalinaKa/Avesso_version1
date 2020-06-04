// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"

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
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"

const NajlaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[19].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/najlaimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[19].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/najlaimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[19].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/najlaimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[19].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/najlaimg4.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[19].node.img4Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[19].node.title}</TitleOfWork>
        <Website as="a" href="https://www.behance.net/najlaleroy">
          {data.allDataJson.edges[19].node.website}
        </Website>
        <TextWithBorder>
          <p>
            Processo reverso<br></br>
            <br></br>
            Reverso, verso, poesia.<br></br>
            Reverso, inverso, oposto.<br></br>
            Reverso, revirado, revolvido.<br></br>
            Reverso, adverso, antagônico.<br></br>
            Reverso, contratempo, acidente.<br></br>
            Reverso, revés, imprevisto, acaso.<br></br>
            Perverso.
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
          img4Description
        }
      }
    }
    allFile(filter: { relativePath: { regex: "/najla/" } }) {
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
export default NajlaPage
