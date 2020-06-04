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

const SusanaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[24].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susanaimg1.jpg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susanaimg2.jpg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susanaimg3.jpg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susanaimg4.jpg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susanaimg5.jpg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/susanaimg6.jpg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[24].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[24].node.website}</Website>
        <TextWithBorder>
          <p>
            O projecto videográfico que tenho vindo a desenvolver desde 2019
            procura, nos seus múltiplos vídeos constituintes, encontrar um modo
            de relação com a realidade a partir destes pressupostos.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            Paisagindo # 4 (utopian impulse for the construction of a common)
            emerges as result of a 'fieldwork' in Chile between December 2019
            and January 2020. The beginning of the explosion of social protests
            on 18 October 2019 and the protests that followed had changed the
            daily life of this country in an unexpected and striking way,
            although it was more visible in urban areas and less in rural areas.
            Among the various 'drifts' that interested me, one of them would
            follow a line, a path, in the map of the connections between
            conceptual concerns and the physical experience of the territory: to
            find out if the Chilean Mapuche still preserve today their
            cosmovision in their daily lives - in that nature and the human
            being are seen as belonging to a totality. For this reason (among
            others) I headed South. The invitation: to ‘compost’ thoughts and
            actions of various subjects providing the germination of another
            'common' between humans and other beings ('the 'natural' world); to
            point out a way of understanding co-habitation based on the
            rejection of the idea that human beings are external to nature, that
            what is not human is inert matter, ready to be transformed into a
            resource that can be exploited. Composting, used in agriculture and
            gardening, implies: the transformation of one thing into another,
            the creation of a matter with matter accumulated in several strata,
            the regeneration of matter based on a decomposition process, the
            production of heat during the process of decomposition.
          </p>
        </TextNoBorder>
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
        }
      }
    }
    allFile(filter: { relativePath: { regex: "/susana/" } }) {
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
export default SusanaPage
