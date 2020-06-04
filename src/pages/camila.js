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
import Video from "../components/pageElements/Video"
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"
const CamilaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[5].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/camilaimg1.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://player.vimeo.com/video/418567607"
            videoTitle=""
          />
        </ImageWrapper>
        <ImageTitle>
          {data.allDataJson.edges[5].node.video1Description}
        </ImageTitle>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[5].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[5].node.website}</Website>
        <TextWithBorder>
          <p>
            O teto surgiu como se estivesse pronto para nascer. O vídeo
            construído de fragmentos de corpos. Um corpo humano em sua imagem e
            distorção. Um corpo água sonoro e como-um a todos. Nasceu a junção e
            explosão de um afeto, que ao avesso e em anexo, já meu não é mais.
            Nasceu ao pedido e chamada da exposição em questão, mas de grande
            serventia para a investigação de doutoramento que acontece em tempos
            de pandemia. Um tempo onde as temporalidades, corpos e afetos se
            encontram avessas as nossas próprias vontades. Em tempos em que
            corpos vão em anexo, por imagem, demonstrando a existência de si e
            de outros no avesso de si ao avesso.
          </p>
        </TextWithBorder>
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
          video1Description
        }
      }
    }
  }
`
export default CamilaPage
