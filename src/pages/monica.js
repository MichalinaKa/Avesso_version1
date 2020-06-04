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

const MonicaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[18].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/monicaimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[18].node.img1Description}
          </ImageTitle>
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StyledImage src="/artists/monicaimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[18].node.img2Description}
          </ImageTitle>
        </ImageWrapper>{" "}
        <ImageWrapper>
          <StyledImage src="/artists/monicaimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[18].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://player.vimeo.com/video/418418652"
            videoTitle=""
          ></Video>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[18].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[18].node.website}</Website>
        <TextWithBorder>
          <p>
            A vida do Bambi é uma quarentena permanente, enquanto para nos é uma
            experiência não usual, uma interrupção das nossas vidas e rotinas.
            Ele foi criado em cativeiro destinado a ser um animal de estimação
            durante a sua existência, não familiarizado com o seu ambiente
            natural, o ambiente da qual a sua espécie é originária. Nas
            condições extraordinárias em que nos encontramos, uma entidade
            central como um governo tem o poder de determinar e constrangir as
            regras pelas quais as nossas sociedades e individuos aprenderam a
            regir as suas vidas; regras essas que suportam algumas das nossas
            mais fundamentais liberdades. Nos estamos dispostos ao isolamento.
            Isolamento, neste novo paradigma, incorpora uma dimensão nova
            relacionada com o tempo. Estamos dispostos ao isolamento enquanto
            este seja temporário. Esta é uma precondição para a aceitação e
            acção concordante com estas nova circunstância. Uma suspensão do
            futuro. Uma suspensão de longo prazo ou permanente contradiria
            algumas das nossas mais fundamentais caracteristicas enquanto
            espécie. A presente circunstância nega a nossa condição de animais
            sociais, condição essa que negamos a espécies que domesticamos.
            <br></br>
            <br></br> Em "A Metamorfose" escrita por Franz Kafka,Gregory,
            sozinho e isolado, reduzido pela sua familia a um insecto inútil e
            deformado, reflecte alguns destes apectos. A sua circunstância
            reflecte os nossos actuais constrangimentos. Como individuos agimos
            de acordo com regras societais estritas sujeitos a responsabilização
            pessoal sem capacidade para alterarmos a nossa própria condição: uma
            limitação aos nossos direitos de autodeterminação e acção. Algo que
            o Bambi experencia por diferentes motivos.<br></br>
            <br></br>
            “I cannot make you understand. I cannot make anyone understand what
            is happening inside me. I cannot even explain it to myself.” Franz
            Kafka.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            Bambi's life is in permanent quarantine, while for us is only an
            unusual experiment, a temporary interruption in our daily life’s. He
            was bred in captivity to become a pet, not acquainted with natural
            environment he derives from. In this special conditions, where we
            are now, the government has the habily to restrain rules suspending
            some of our basic freedoms. We are willing to isolate. Isolation in
            this new paradigma incorporates a dimension that integrates an
            important aspect of time. We are willing to do it as long as it is
            temporary. That is a precondition to acceptance. A suspension of the
            future. A permanent or long term suspension would contradict some of
            ours most biological stands as a species. Our stance as social
            creatures is currently suspended, something which we very often
            neglect with the domestication of other species.
            <br></br>
            <br></br>
            In Metamorphosis written by Franz Kafka alone and isolated, Gregory
            was reduced by his family to a useless and deformed bug. His
            circumstance in certain ways reflect our constrainment. As a society
            we can only follow established guidelines not being able to change
            nothing for ourselves. A current limitation to our rights of
            self-determination and action. Something which Bambi experiences for
            different reasons.
            <br></br>
            <br></br>
            “I cannot make you understand. I cannot make anyone understand what
            is happening inside me. I cannot even explain it to myself.” Franz
            Kafka.
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
          img2Description
          img3Description
          img4Description
          img5Description
          img6Description
        }
      }
    }
    allFile(filter: { relativePath: { regex: "/monica/" } }) {
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
export default MonicaPage
