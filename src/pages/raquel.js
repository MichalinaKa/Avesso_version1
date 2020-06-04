// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import { H1 } from "../components/pageElements/H1"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import { GalleryWrapper } from "../components/pageElements/galleryWrapper"
import { ImageWrapper } from "../components/pageElements/imageWrapper"
import { ImageTitle } from "../components/pageElements/imageTitle"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { TextWithBorder } from "../components/pageElements/textWithBorder"
import { TextNoBorder } from "../components/pageElements/textNoBorder"
import { TitleOfWork } from "../components/pageElements/titleOfWork"
import { Website } from "../components/pageElements/website"
import Video from "../components/pageElements/Video"
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"

const RaquelPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[22].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <Video
            videoSrcURL="https://player.vimeo.com/video/419041276"
            videoTitle=""
          />

          <ImageTitle>
            {data.allDataJson.edges[22].node.video4Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[22].node.title}</TitleOfWork>
        <Website as="a" href="http://www.raquelfelgueiras.com/">
          {data.allDataJson.edges[22].node.website}
        </Website>
        <TextWithBorder>
          <p>
            É um loop, um ciclo, um movimento circular que se encerra ao chegar
            onde começou. Recomeça. Repete. Vivemos em confinamento por um
            período de tempo… vivemos fechados nas nossas próprias projecções há
            muito mais tempo… Num mundo onde renascem discursos que apelam a
            identidades coletivas estanques e imutáveis, que devem ser
            protegidas e reerguidas como hegemónicas. Uma apologia da fortaleza
            e do encerramento das comunidades dentro de muros, delimitando
            fronteiras físicas ou imaginárias, validadas hoje pelo microscópio.
            <br></br>
            Paralelamente, vivemos num mundo altamente vigiado, onde a falta de
            privacidade ou o esbater dos limites entre o privado e o público,
            determinam um constante fechamento do indivíduo apesar da aparente
            conexão, “proximidade” e um sem fim de possibilidades de estabelecer
            relações, que ultrapassam as barreiras do espaço e do tempo. O
            confinamento tornou ainda mais evidente a solidão que esta aparente
            proximidade nos provoca. Uma tensão constante entre a identidade
            individual e as múltiplas identidades de grupo, entre o local e o
            global, entre o interior e o exterior, o real e o virtual.<br></br>A
            linguagem binária regula uma parte significativa das nossas
            experiências quotidianas e parece ter permeado também a nossa
            identidade. Zero e um são hoje os números mais importantes, gerem os
            nossos loops, constroem a nossa roda. Que roda construir, para qual
            hamster? É um loop, um ciclo, um movimento circular que se encerra
            ao chegar onde começou. Recomeça. Repete.{" "}
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            It is a loop, a cycle, a circular movement ending when it reaches
            where it started. Restart. Repeat. We live in confinement for a
            period of time… we have been living enclosed in our own projections
            for much longer… In a world where discourses appealing to solid and
            inflexible collective identities arise, which must be protected and
            restored as hegemonic. Promoting fortresses and the enclosure of
            communities within walls, creating physical or imaginary borders,
            validated today by the microscope. <br></br>
            At the same time, we live in a highly surveilled world, where the
            lack of privacy or the blurriness between private and public
            determine a constant closure of the self despite all the
            connectivity, proximity and never ending possibilities of
            networking, which go beyond space and time barriers. Confinement
            made the solitude that this apparent proximity creates more visible.
            A constant tension between individual identity and the several group
            identities, between local and global, interior and exterior, reality
            and virtual. <br></br>
            The binary language controls a significant part of our daily
            experiences and seems to have also infused our identity. Today, zero
            and one are the most important numbers, they rule our loops, build
            our wheel. Which wheel to build for which hamster? It is a loop, a
            cycle, a circular movement ending when it reaches where it started.
            Restart. Repeat.{" "}
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
    allFile(filter: { relativePath: { regex: "/raquel/" } }) {
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
export default RaquelPage
