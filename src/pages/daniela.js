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

const DanielaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[7].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/danielaimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[7].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[7].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[7].node.website}</Website>
        <TextWithBorder>
          <p>
            O tempo é ainda de (…) alucinações e espera. <br></br>
            <br></br>No interior de uma grelha, que parece legitimar o lugar das
            coisas, o centro move-se lentamente. As circunferências, que se
            registam sobre a superfície translúcida das folhas de papel, vão
            deixando um demoroso rasto de inscrições repetitivas. Do centro para
            as extremidades, os gestos particulares vão sendo absorvidos pelo
            contexto geral: as marcas deixam as suas especificidades individuais
            e a ilusão apodera-se do desenho. Ponto após ponto, traço após traço
            a imagem vai ganhando um movimento, que de todo parece ser o seu. A
            fragilidade revela-se e confirma-se.
            <br></br>
            <br></br>O tempo construtivo, esse que convocava uma dinâmica
            corporal, desvanece-se. O movimento e a ação dissipam-se num
            instante suspenso. Que bom seria, que algum tipo de cinesia
            continuasse presente. Um pequeno indício bastaria. Seria suficiente
            para convocar hipóteses, suposições, hipotéticas conjeturas… Que bom
            seria, saber se está a aumentar ou a reduzir. Mas a força do porvir
            que permanece em ação, parece não ser menos de ruptura do que de
            integração, nem menos de “dissensão (…) quanto de consenso”.
            Dir-se-ia que é tanto sinal de mudança, quanto de estagnação. É um
            estar entre. É um intervalo. É uma espera em pausa.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            The time is yet of (…) hallucinations and waiting.<br></br>
            <br></br>
            From the inside of a grid, that seems legitimate the place of forms,
            the center moves slowly. The circles, that were inscribed on the
            translucent surface of the papers, leave an extensive clewline of
            repetitive inscriptions. From the center to the outer borders, the
            particular gestures go being absorbed by the general context: the
            gestures leave their own specificities and the illusion takes over
            the drawing. Step by step, stroke by stroke the image wins a
            movement, that doesn’t seem to be from itself. The fragility is
            revealed and confirmed.
            <br></br>
            <br></br>
            The constructive time, that who proclaims a corporal dynamic,
            disappears. The movement and the action dissipate in a suspended
            instant. How good would it be if some kind of movement continued
            present. A little clue would be enough. Would be sufficient to
            summon up some hypotheses, assumptions or hypothetical sights… How
            good would it be, to know if it is increasing or reducing. But the
            strength of what’s coming up, that remains in action, seems not to
            be less of rupture than of integration, neither less of “dissension
            (…) as consensus”. It would be said that it is as much a signal of
            change as of stagnation. It is an in between. It is a break. It is a
            waiting in pause.
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
          img1Description
        }
      }
    }
    allFile(filter: { relativePath: { regex: "/daniela/" } }) {
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
export default DanielaPage
