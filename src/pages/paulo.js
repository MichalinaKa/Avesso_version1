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

const PauloPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[20].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/pauloimg1.jpg" />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/pauloimg2.jpg" />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/pauloimg3.jpg" />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/pauloimg4.jpg" />
        </ImageWrapper>
        <ImageTitle>
          {data.allDataJson.edges[20].node.img1Description}
        </ImageTitle>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[20].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[20].node.website}</Website>
        <TextWithBorder>
          <p>
            O ponto de partida para o trabalho de investigação e para esta
            primeira exposição é um exercício de ficção que aborda a ideia de
            narrativa dentro da narrativa e que tem o espelho como artificio
            catalisador da mesma. A técnica ou estratégia a utilizar será o{" "}
            <i>mise en abyme</i>
            <sup>1</sup>, que consiste em imagens ou objetos que contêm cópias
            de si próprios, numa sequência aparentemente infinita (Halonen,
            2015).
            <br></br>
            Ao longo da história da arte que o espelho foi um elemento a partir
            do qual se abriram novas perspetivas, vejam-se os exemplos do “Casal
            Alnorfini” de Jan Van Eick, datado da primeira metade do século XV,
            passando pelas “Las Meninas” de Vélazquez, século XVII, até à série
            <i> Refractions</i> de Robert Morris, desenvolvida a partir da
            década de sessenta do século XX, em que o mesmo permite devolver ao
            observador outros planos e personagens no seio do mesmo
            enquadramento. Nos interstícios da realidade existe um universo que
            funciona numa escala nano e que pode ser habitado (Hoyer, 2015).
            <br></br>A arte do pós-guerra, baseada na fotografia, encara a
            imagem enquanto referente ou simulacro (Foster, 2017). As caixas
            sobrepostas, bem como as imagens justapostas, funcionarão como
            camadas, permitindo assim experienciar os múltiplos espaços
            (Halonen, 2015). Estarão assim criadas as condições para que novos
            mundos surjam no seio dos próprios mundos.<br></br>
            -----------------------------------
            <br></br>
            <sup>1 </sup>Termo empregue pela primeira vez pelo escritor francês
            André Gide (1869-1951), na obra intitulada Journal 1889-1939 e que
            se refere a narrativas que contêm outras narrativas dentro de si.
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
        }
      }
    }
    allFile(filter: { relativePath: { regex: "/paulo/" } }) {
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
export default PauloPage
