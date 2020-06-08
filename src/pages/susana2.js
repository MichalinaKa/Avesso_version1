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
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const Susana2Page = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[25].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[24].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[26].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://player.vimeo.com/video/348811505"
            videoTitle=""
          />
          <ImageTitle>
            {data.allDataJson.edges[26].node.video1Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[25].node.title}</TitleOfWork>
        <Website as="a" href="https://susanasoarespinto.eu/">
          {data.allDataJson.edges[25].node.website}
        </Website>
        <TextWithBorder>
          <p>
            Qual é o desafio, no nosso tempo, perante as tendências
            sócio-económicas e as do sistema Terra? Não será uma mudança no
            sistema de tal forma transformadora, persistente e adaptável que nos
            obriga a desenvolver uma nova lógica desafiante e, até aqui,
            inexistente? <br></br>
            <br></br>
            pensa como um pássaro<br></br>
            desenvolve uma consciência cósmica<br></br>
            procura meteoros no chão<br></br>o tempo está a passar<br></br>
            como inverter curvas?<br></br>
            <br></br>
            <br></br>
            imagina uma auto-estrada sem limites para te guiar<br></br>
            com humanos a fazer tortas<br></br>a construir cidades fantasma
            <br></br>a escavar minas a céu aberto como fazem as crianças quando
            brincam com a areia<br></br>a viver numa sociedade autofágica
            <br></br>
            os pensamentos são como nuvens, vão passando
            <br></br>
            faz assemblages com corpos diferenciados e tal como Spinoza, imagina
            o fantástico número de partes extensivas<br></br>
            apanha detritos plásticos na praia e faz taxonomia com eles<br></br>
            <br></br>
            apanha detritos plásticos na praia e faz taxonomia com eles
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            What is the challenge of our time, given the socio-economic trends
            and those of the Earth system? Is it not a change in the system that
            is so transformative, persistent and adaptable that it forces us to
            develop a new challenging logic and hitherto nonexistent?<br></br>
            think as a bird<br></br>
            develop a cosmic conscience<br></br>
            search for meteors on the ground<br></br>
            time is passing by<br></br>
            how to bend curves?<br></br>
            <br></br>
            imagine a highway without guiding lines<br></br>
            with humans making cakes<br></br>
            building ghost towns<br></br>
            digging open pit mines like children do when playing with sand
            <br></br>
            living within an autophagic society<br></br>
            <br></br>
            thoughts are like clouds, they pass by<br></br>
            <br></br>
            do assemblages with differentiated bodies and like Spinoza thinks,
            imagine the very great number<br></br>
            of extensive parts<br></br>
            catch plastic objects from the sea side and do taxonomy with them
            <br></br>
            <br></br>
            catch plastic objects from the sea side and do taxonomy with them
          </p>
        </TextNoBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to={data.allDataJson.edges[25].node.url} className="scrollTopButton">
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
          img1Description
          img2Description
          img3Description
          video1Description
        }
      }
    }
  }
`
export default Susana2Page
