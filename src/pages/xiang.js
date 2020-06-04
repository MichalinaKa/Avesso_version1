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

const XiangPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[26].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/xiangimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[26].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/xiangimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[26].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/xiangimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[26].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/xiangimg4.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[26].node.img4Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[26].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[26].node.website}</Website>
        <TextWithBorder>
          <p>
            The body-space series I want to express the various oppressions
            faced by Chinese women under the globalization of capital. This
            oppression comes not only from society but also from the family.
            <br></br>
            Human existence is multi-dimensional and multi-constructed. We as
            human not only an existent of time dimension, but also an existent
            of space dimension. The space that interests me is that where people
            live in, which is neither the space of general physical attributes
            nor the space of a single human spirit, but rather a space of social
            stipulation and social attributes. Therefore, space is not a simple,
            mechanical, passive activity background or environment for human
            existence. Space and human existence are intrinsically related and
            mutually shaped.
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
  }
`
export default XiangPage
