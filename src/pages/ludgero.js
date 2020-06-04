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

const LudgeroPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[15].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/ludgeroimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[15].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/ludgeroimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[15].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/ludgeroimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[15].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/ludgeroimg4.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[15].node.img4Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/ludgeroimg5.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[15].node.img5Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/ludgeroimg6.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[15].node.img6Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[15].node.title}</TitleOfWork>
        <Website as="a" href="https://dludgero.wixsite.com/ludgeroalmeida">
          {data.allDataJson.edges[15].node.website}
        </Website>
        <TextWithBorder>
          <p>
            Neste projeto, a prática artística atua criticamente na análise de
            arquivos institucionais e privados, de narrações e de
            documentos-vestígios relacionados à indústria têxtil algodoeira e ao
            percurso do algodão nas margens (des)industrializadas do Vale do
            Ave, num período compreendido entre os anos 1960 e a atualidade.
            <br></br>
            Adentra-se arquivos que concentram, organizam, preservam e iluminam
            objetos e imagens particulares de uma realidade hegemónica, que
            exercem um poder na fabricação da verdade. Ao definir uma imagem da
            ausência que problematize as noções de tempo, esquecimento,
            obsolescência e que convoque limites e intimidades que presidem a
            construção da ficção e da realidade, pretende-se enfrentar a
            história e a construção identitária dos lugares e das pessoas e
            suscitar um questionamento acerca do princípio veritativo dos
            arquivos, dos poderes e roubos.
            <br></br>
            <br></br>
            As imagens que apresento nesta exposição revelam as primeiras
            experiências pictóricas que estiveram na génese do meu interesse
            pela temática (neste caso incidindo mais propriamente em imagens do
            período colonial e ditatorial) e uma curta seleção de vestígios
            obsoletos e descartados nas fábricas que tenho vindo a recolher e
            que potencializarão, no seguimento do projeto, relações com as
            memórias dos trabalhadores e ex-trabalhadores, servindo igualmente
            como elementos sugestivos para a criação de pinturas e instalações.{" "}
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
  }
`
export default LudgeroPage
