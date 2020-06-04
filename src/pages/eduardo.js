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

const EduardoPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[8].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/eduardoimg1.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/eduardoimg2.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/eduardoimg3.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/eduardoimg4.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/eduardoimg5.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/eduardoimg6.jpg"></StyledImage>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[8].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[8].node.website}</Website>
        <TextWithBorder>
          <p>
            O universo existe há 13,82 bilhões de anos. Teorias recentes
            defendem que entraria em colapso nos próximos 10 bilhões de anos. O
            universo pretende existir por pelo menos 23,82 bilhões de anos.
            Nesta linha do tempo estão incluídas as décadas da minha e da sua
            vida. Nossa percepção imediata do tempo é conhecida como o
            ‘presente’. Com muito esforço podemos percebê-lo passar em
            centésimos de segundo. A menor unidade de medida é o ´Tempo de
            Plank´ (Tp), instante em que a luz no vácuo leva para viajar o
            ‘Comprimento de Plank’ (10-20 vezes o diâmetro de um próton),
            aproximadamente 10-43 vezes um segundo.<br></br>
            <br></br>
            Um relâmpago pode existir por longuíssimos 5 x 1050 Tp. Ele desce
            das nuvens dividindo-se em vários raios, toca a terra e sobe de
            volta mais forte. O desenho do raio é análogo à forma dos mapas
            hidrográficos da terra, do fluxo da seiva nas árvores, do percurso
            da informação nos neurotransmissores, da drenagem do sistema
            linfático ou das rugas nos cantos dos olhos, mas especialmente, do
            sangue que nos circula. O sangue, como o relâmpago, também vai e
            volta, em dois pequenos estrondos, empurra e puxa, arterial e
            venoso. O pulso sanguíneo marca pequenas frações de tempo, depois a
            respiração, o piscar de olhos, o sono, as unhas e cabelos a
            brotarem, e por fim, nosso próprio crescimento e decaimento geral do
            organismo.
            <br></br>
            <br></br>
            Por mais improvável que pareça, estou vivo exatamente agora. Mesmo
            sabendo quão provisório sou, o tempo não se disfarça de passar.
            Ainda que o tempo passe, é muito tempo sendo consciente
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
        }
      }
    }
  }
`
export default EduardoPage
