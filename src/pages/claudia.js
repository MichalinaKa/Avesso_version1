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

const ClaudiaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[6].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://player.vimeo.com/video/361325304"
            videoTitle="jakiś tytuł"
          ></Video>
          <ImageTitle>
            {data.allDataJson.edges[6].node.video1Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[6].node.title}</TitleOfWork>
        <Website as="a" href="http://www.claudiatavares.com/">
          {data.allDataJson.edges[6].node.website}
        </Website>
        <TextWithBorder>
          <p>
            Mãe Gentil é um vídeo de 5’, filmado em plano sequência, que
            registra um desenho da bandeira do Brasil sendo colocado dentro de
            um tanque de água corrente. O desenho, feito com tinta aquarela,
            reage a passagem da água e vai lentamente se desfazendo,
            desaparecendo, a tinta se descolando do papel e sendo levada pela
            água. Em determinados pontos do vídeo, se ouve um som estranhamente
            distorcido. São trechos do hino da independência do Brasil em
            rotação alterada, prolongada, esticada, que é alternado ao som
            direto da água corrente. A ideia central é trabalhar com a noção de
            dissolução, com o desfazer lento e gradual que assistimos ao ver o
            desenho se desfazendo, reforçado pelo som deformado. A dissolvência
            se torna uma ideia de muitos sentidos no atual momento brasileiro:
            assistimos a dissolvência da identidade de uma nação pela tentativa
            de criminalização da sua cultura, a dissolução de uma política de
            aproximar desigualdades, e a noção de um nacionalismo “militar
            armado moral e cívica” que retorna anacrônico. Assistimos o Brasil
            chegar a um estado de dissolução.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            Mãe Gentil is a 5 ’video, shot in sequence, which records a drawing
            of the Brazilian flag being placed inside a running water tank. The
            drawing, made with watercolor paint, reacts to the passage of water
            and slowly fades, disappearing, the ink peeling off the paper and
            being carried away by the water. In certain points of the video, you
            hear a strangely distorted sound. These are excerpts from the
            Brazilian National anthem in altered, prolonged, stretched rotation,
            which is alternated with direct sound of running water. The central
            idea is to work with the notion of dissolution, with the slow and
            gradual undoing that we saw when the drawing came undone, reinforced
            by the deformed sound. Dissolution becomes an idea of ​​many
            meanings in the current Brazilian moment: we witness the dissolution
            of a nation's identity by attempting to criminalize of its culture,
            the dissolution of a policy of bringing inequalities closer
            together, and the notion of a “military armed moral and civic”
            nationalism that returns anachronistic. We watched Brazil reach a
            state of dissolution.
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
          video1Description
        }
      }
    }
  }
`
export default ClaudiaPage
