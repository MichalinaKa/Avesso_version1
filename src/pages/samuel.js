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

const SamuelPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[23].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[22].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[24].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage bigScale src="/artists/samuelimg1.jpeg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <Video
            videoSrcURL="https://player.vimeo.com/video/422954561"
            videoTitle=""
          />
          <ImageTitle>
            {data.allDataJson.edges[23].node.video1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage bigScale src="/artists/samuelimg2.jpeg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <Video
            videoSrcURL="https://player.vimeo.com/video/422956049"
            videoTitle=""
          />
          <ImageTitle>
            {data.allDataJson.edges[23].node.video2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage bigScale src="/artists/samuelimg3.jpeg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <Video
            videoSrcURL="https://player.vimeo.com/video/422956750"
            videoTitle=""
          />
          <ImageTitle>
            {data.allDataJson.edges[23].node.video3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage bigScale src="/artists/samuelimg4.jpeg"></StyledImage>
          <ImageTitle></ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <Video
            videoSrcURL="https://player.vimeo.com/video/422957079"
            videoTitle=""
          />

          <ImageTitle>
            {data.allDataJson.edges[23].node.video4Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[23].node.title}</TitleOfWork>
        <Website as="a" href="http://www.samuel-silva.com/">
          {data.allDataJson.edges[23].node.website}
        </Website>
        <TextWithBorder>
          <p>
            No ano 2000 Jonas Mekas, um dos mais célebres cineastas do cinema
            experimental, decidiu compilar cerca de três décadas de películas
            caseiras com pequenos registos intimistas da vida famíliar: festas
            de aniversário, férias, os primeiros passos dos filhos, baptizados,
            entre outros. A esse filme chamou “As I Was Moving Ahead
            Occasionally I Saw Brief Glimpses of Beauty “. Pedaços de vida
            filmados e organizados de forma intuituiva (não cronológica) onde
            durante quase 5 horas – um dos filmes experimentais mais longos da
            história do cinema- Mekas na sua rouquidão característica comenta em
            off continuamente aquilo que o espectador está a observar. Foi
            precisamente no embalo da sua voz que no terceiro capítulo do filme
            ouvi a seguinte frase “Keep looking for things, in places, where
            there is nothing”. Uma frase enigmática que traduz com grande
            assertividade o modo de ver e entender o cinema por parte de Mekas,
            sobretudo pela capacidade que ela tem de nos colocar perante três
            desafios: 1) Como inventar um novo olhar resistente à flutuação
            vertiginosa do modo de ver contemporâneo?; 2) Elogiar a lentidão; 3)
            Valorizar o insignificante; deixar-nos seduzir pelo anti-monumento,
            pela periferia, pelas margens da atenção.
          </p>
        </TextWithBorder>
        <TextNoBorder></TextNoBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to={data.allDataJson.edges[23].node.url} className="scrollTopButton">
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
          img4Description
          video1Description
          video2Description
          video3Description
          video4Description
        }
      }
    }
  }
`
export default SamuelPage
