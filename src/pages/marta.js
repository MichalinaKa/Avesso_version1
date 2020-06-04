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
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"

const MartaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[17].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/martaimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[17].node.img1Description}
          </ImageTitle>
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StyledImage src="/artists/martaimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[17].node.img2Description}
          </ImageTitle>
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StyledImage src="/artists/martaimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[17].node.img3Description}
          </ImageTitle>
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StyledImage src="/artists/martaimg4.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[17].node.img4Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/martaimg5.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[17].node.img5Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/martaimg6.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[17].node.img6Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[17].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[17].node.website}</Website>
        <TextWithBorder>
          <p>
            reflection<br></br>noun<br></br>
            UK /rɪˈflek.ʃən/ US /rɪˈflek.ʃən/<br></br>
            <br></br>[ C or U ]<br></br>
            the image of something in a mirror or on any reflective surface.
            <br></br>[ U ] PHYSICS specialized<br></br>
            the return of light, heat, sound, or energy from a surface.<br></br>
            [ C usually singular ]<br></br>a sign or result of something.
            <br></br>[ C or U ] formal ]<br></br>
            serious and careful thought.<br></br>
            <br></br>
            expression without words.<br></br>
            <br></br>
            Source:
            https://dictionary.cambridge.org/pt/dicionario/ingles/reflection +
            https://www.vocabulary.com/dictionary/reflexion
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
          img5Description
          img6Description
        }
      }
    }
    allFile(filter: { relativePath: { regex: "/marta/" } }) {
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
export default MartaPage
