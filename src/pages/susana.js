// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, Link } from "gatsby"

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
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const SusanaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[24].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[23].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[25].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
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
            Paisagindo # 4 (impulso utópico para a construção de um comum) é uma
            peça que surge na sequência de um período de permanência no Chile. O
            início da explosão dos protestos sociais a 18 de Outubro de 2019, e
            os protestos que se seguiram. haviam alterado o quotidiano deste
            país de uma forma inesperada e marcante, ainda que fosse mais
            visível nas zonas urbanas e menos nas rurais.<br></br>
            Entre as várias 'derivas' que me interessavam realizar uma delas
            seguiria uma linha, uma vereda, no mapa das ligações entre as
            preocupações conceptuais e a experiência física do território:
            averiguar se os mapuches chilenos ainda punham em prática no
            seuquotidiano a sua cosmovisão – em que a natureza e o ser humano
            são vistos como pertencentes a uma totalidade. Por esta razão (entre
            outras) dirigi-me para Sul.<br></br>
            Propõe-se: ‘compostar’ pensamentos e acções de vários sujeitos para
            proporcionar a germinação de um outro ‘comum’ entre o ser humano e o
            que o rodeia que aponte para uma forma de entender o co-habitar
            assente na rejeição da ideia que o ser humano é exterior à natureza,
            de que o que não é humano é matéria inerte, pronta para ser
            transformada em recurso passível de ser explorado.<br></br>A
            compostagem, utilizada na agricultura e na jardinagem, implica: a
            transformação de uma coisa noutra, a criação de uma matéria com
            matéria acumulada em vários estratos, a regeneração da matéria com
            base num processo de decomposição, a produção de calor durante o
            processo de decomposição.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            "Paisagindo # 4 (utopian impulse for the construction of a common)
            emerges as result of a 'fieldwork' in Chile between December 2019
            and January 2020. The beginning of the explosion of social protests
            on 18 October 2019 and the protests that followed had changed the
            daily life of this country in an unexpected and striking way,
            although it was more visible in urban areas and less in rural areas.
            <br></br>
            Among the various 'drifts' that interested me, one of them would
            follow a line, a path, in the map of the connections between
            conceptual concerns and the physical experience of the territory: to
            find out if the Chilean Mapuche still preserve today their
            cosmovision in their daily lives - in that nature and the human
            being are seen as belonging to a totality. For this reason (among
            others) I headed South.<br></br>
            The invitation: to ‘compost’ thoughts and actions of various
            subjects providing the germination of another 'common' between
            humans and other beings ('the 'natural' world); to point out a way
            of understanding co-habitation based on the rejection of the idea
            that human beings are external to nature, that what is not human is
            inert matter, ready to be transformed into a resource that can be
            exploited.<br></br>
            Composting, used in agriculture and gardening, implies: the
            transformation of one thing into another, the creation of a matter
            with matter accumulated in several strata, the regeneration of
            matter based on a decomposition process, the production of heat
            during the process of decomposition."
          </p>
        </TextNoBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to={data.allDataJson.edges[24].node.url} className="scrollTopButton">
      {" "}
      <span> &larr;</span>
      to the top
    </Link>
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
