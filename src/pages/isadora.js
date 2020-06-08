// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, Link } from "gatsby"

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
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const IsadoraPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[12].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[11].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[13].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://www.youtube.com/embed/EC4yIB78-Ws"
            videoTitle=""
          />
        </ImageWrapper>
        <ImageTitle>
          {data.allDataJson.edges[12].node.video1Description}
        </ImageTitle>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[12].node.title}</TitleOfWork>
        <Website as="a" href="https://isadorapetrauskas.carbonmade.com/">
          {data.allDataJson.edges[12].node.website}
        </Website>
        <TextWithBorder>
          <p>
            Bernardo Soares dizia que a natureza deu ao homem o dom de não poder
            fitar os seus próprios olhos, mas dentro de uma situação de exílio
            ou isolamento social encarar a si mesmo muitas vezes se torna
            inevitável. A remoção do sujeito das suas atividades quotidianas
            favorece encontros mais frequentes com o ócio através de uma
            estrutura de repetição que, como Xavier de Maistre discute em Viagem
            ao Redor do Meu Quarto, é um sucessivo movimento de retorno ao mesmo
            espaço. Ao se reencontrar com o mesmo espaço, e removida da maior
            parte das incumbências habituais, isto é, distanciada da variação do
            mundo externo, me deparo com a monotonia do meio, com um cenário que
            vai se uniformizando; a mesma sala, a mesma cozinha, os mesmos
            móveis. A invariabilidade do ambiente se torna uma superfície branca
            de espelhamento onde sou confrontada com meu próprio reflexo. Nesse
            sentido, o ócio permite a percepção da variação de mim mesma. Como o
            Branco sobre Branco de Malevich que dispensa a maioria das
            características da arte representacional, sou uma forma geométrica
            simples flutuando com limites mal definidos que permite ao
            observador ver o que ele consegue, ver a si mesmo. O esvaziamento do
            barulho externo permite me ouvir a minha multidão interna. Talvez
            seja por isso que o ócio tenha uma reputação tão negativa, não
            apenas por ser um momento de não produção, encarado como um gesto de
            resistência à sociedade capitalista, mas pelo pavor que dá fitar os
            próprios olhos.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            Bernardo Soares said that nature gave man the gift of not being able
            to look into his own eyes, but in a situation of exile or social
            isolation, facing yourself often becomes inevitable. The removal of
            the subject from their daily activities favours more frequent
            encounters with idleness through a structure of repetition that, as
            Xavier de Maistre discusses in Journey Around My Room, is a
            successive movement of return to the same space. When I find myself
            in the same space, and removed from most of my usual tasks, that is,
            distanced from the variation of the external world, I am faced with
            the monotony of the environment, with a scenario that is becoming
            uniform; the same room, the same kitchen, the same furniture. The
            invariability of the environment becomes a white mirroring surface
            where I am confronted with my own reflection. In this sense,
            idleness allows the perception of the variation of myself. Like
            Malevich's White on White, which dispenses most of the
            characteristics of representational art, I am a simple geometric
            shape floating with ill-defined limits that allows the observer to
            see what they can, to see themselves. The emptying of external noise
            allows me to hear my internal crowd. And perhaps that is why
            idleness has such a negative reputation, not only because it is a
            moment of non-production, seen as a gesture of resistance to
            capitalist society, but because of the dread that is to look into
            your own eyes.
          </p>
        </TextNoBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to={data.allDataJson.edges[12].node.url} className="scrollTopButton">
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
    allFile(filter: { relativePath: { regex: "/isadora/" } }) {
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
export default IsadoraPage
