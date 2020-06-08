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
import Video from "../components/pageElements/Video"
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const Eduardo2Page = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[9].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[8].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[10].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/eduardo2img1.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://www.youtube.com/embed/GghDpAkW3Sk"
            videoTitle=""
          ></Video>
        </ImageWrapper>
        <ImageTitle>
          {data.allDataJson.edges[9].node.video1Description}
        </ImageTitle>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[9].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[9].node.website}</Website>
        <TextWithBorder>
          <p>
            O cinema documental pode ser considerado a primeira obra
            cinematográfica, pois o cinema nasce a partir do registro do
            cotidiano humano. A primeira película exibida em 1895 (La Sortie de
            l'usine Lumière à Lyon), de caráter totalmente documental,
            apresentou ao mundo o chamado Cinematógrafo e comoveu os
            espectadores como se fosse um conto dramático ficcional. Com isso, a
            existência de um cinema híbrido entre o filme documental e o filme
            ficcional encontra-se presente desde a sua criação.<br></br>
            <br></br>O mesmo pode dizer-se dos diversos processos de montagem
            que, quando unificados, deixam de ser apenas um meio de organização
            do material fílmico e se expandem para novas formas de exibição. A
            interação com o espaço expositivo e a desconstrução da montagem, faz
            com que o cinema expandido dissolva o próprio cinema como uma
            entidade separada. Essa ruptura cria uma nova forma de organização
            imagética onde a utilização de planos simbólicos e/ou metafóricos
            substitui a planificação orgânica e contínua da escola clássica
            americana.<br></br>
            <br></br> A proposta é ampliar esse processo de hibridez colocando
            em equilíbrio as diversas estéticas de montagem e o pensamento
            individual da música como elemento dramático. Pois, a música ruidosa
            ou harmónica, quando montada à imagem naturalista ou metafórica
            fílmica, libera novas contradições, deixando de ser somente uma
            forma de potencializar a imagem apresentada. Isso ampliará a
            capacidade de exposição e entendimento da obra dentro da diversidade
            em que se encontra o espectador contemporâneo.
          </p>
        </TextWithBorder>
        <TextNoBorder></TextNoBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to={data.allDataJson.edges[9].node.url} className="scrollTopButton">
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
          video1Description
        }
      }
    }
  }
`
export default Eduardo2Page
