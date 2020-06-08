// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, Link } from "gatsby"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"
import { StyledImage } from "../components/pageElements/styledImage"
import { H1 } from "../components/pageElements/H1"
import { GalleryWrapper } from "../components/pageElements/galleryWrapper"
import { ImageWrapper } from "../components/pageElements/imageWrapper"
import { ImageTitle } from "../components/pageElements/imageTitle"
import { TextWithBorder } from "../components/pageElements/textWithBorder"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { Website } from "../components/pageElements/website"
import { TitleOfWork } from "../components/pageElements/titleOfWork"
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const AnaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[3].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[2].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[4].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/anaimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[3].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/anaimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[3].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/anaimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[3].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>
      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[3].node.title}</TitleOfWork>
        <Website as="a" href="http://behance.net/AnaAlleN">
          {data.allDataJson.edges[3].node.website}
        </Website>
        <TextWithBorder>
          <p>
            “I have always been aware of space as a space-dome. I remember years
            ago shocking my friends by saying I would prefer going to walk the
            tundra than go to Paris. For me space is where I can feel four
            horizons, not just the horizon in the front of me and in back of me”
            – Barnett Newman.<br></br>
            <br></br> Talvez o retorno contemporâneo da experiência de sublime
            seja como um campo que existe sem limite ou definição visível...
            talvez seja o tecno-sublime da vivência digital, a vivência
            tecnológica que estrutura uma interactiva paisagem, artificializando
            aquilo que de mais natural existe e propondo uma aventura perigosa
            sem sair do lugar; entretanto os glaciares derretem e as cidades
            continuam no frenesim habitual.<br></br>
            <br></br> tundra ou «planície musgosa»
            <br></br> 1. BOTÂNICA formação vegetal característica das planícies
            de climas frios em que o subsolo está permanentemente gelado, que se
            desenvolve após o degelo da superfície e que é constituída
            essencialmente por líquenes fixos às saliências secas dos terrenos
            (tundras secas) e por musgos desenvolvidos nas depressões onde se
            acumula água (tundras húmidas).
            <br></br>
            <br></br>2. GEOGRAFIA região ártica ou subártica onde medra essa
            formação vegetal.
          </p>
        </TextWithBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to={data.allDataJson.edges[3].node.url} className="scrollTopButton">
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
          img5Description
          img6Description
        }
      }
    }
  }
`
export default AnaPage
