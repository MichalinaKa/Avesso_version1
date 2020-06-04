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

const LucianaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[14].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/lucianaimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[14].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <Video
            videoSrcURL="https://www.youtube.com/embed/hRsXCLnXXFw"
            videoTitle=""
          />{" "}
          <ImageTitle>
            {data.allDataJson.edges[14].node.video1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/lucianaimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[14].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/lucianaimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[14].node.img3Description}
          </ImageTitle>
        </ImageWrapper>

        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://www.youtube.com/embed/BSEq6WEO7bA"
            videoTitle=""
          />

          <ImageTitle>
            {data.allDataJson.edges[14].node.video2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/lucianaimg4.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[14].node.img4Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <Video
            videoSrcURL="https://www.youtube.com/embed/yX2dZSRVbUo"
            videoTitle=""
          />
          <ImageTitle>
            {data.allDataJson.edges[14].node.video3Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[14].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[14].node.website}</Website>
        <TextWithBorder>
          <p>
            <strong>ADORNO #Ensaio1 A inventariadora</strong> é o ponto de
            partida de uma série que assume investigação artística e científica
            de uma produção visual a partir de palavras que em sua grafia
            contenham a sílaba DOR, mas que necessariamente não tratam do
            sentimento em si, buscando entrelaçar sentidos, percepções,
            questionamentos e interpretações. A DOR trabalhada como narrativa de
            ficções com variados percursos interpretativos. Nesse caminho,
            <strong>#Ensaio1 A inventariadora</strong>
            apresenta-se como o ‘primeiro tempo’ de um conjunto de quatro
            trabalhos que costura o Adorável, o Adormecer, o Ardor, o Arredor, o
            Aquecedor. A amadora. Um inventário da letra A, tranformando A
            investigadorA em A inventariadorA.<br></br>
            <br></br>
            <strong>Inventário</strong>
            <br></br> substantivo masculino<br></br>
            1.Relação dos bens deixados por alguém; enumeração de coisas;
            balanço. <br></br>
            <br></br>
            <strong>InventariadorA</strong> <br></br>Feminina <br></br>1.Aquela
            que faz inventários, que faz o levantamento dos bens de uma pessoa
            falecida antes da partilha dos bens.
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
          video2Description
        }
      }
    }
  }
`
export default LucianaPage
