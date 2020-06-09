// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, Link } from "gatsby"
import { H1 } from "../components/pageElements/H1"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import { GalleryWrapper } from "../components/pageElements/galleryWrapper"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { StyledImage } from "../components/pageElements/styledImage"
import { ImageWrapper } from "../components/pageElements/imageWrapper"
import { TextWithBorder } from "../components/pageElements/textWithBorder"
import { TextNoBorder } from "../components/pageElements/textNoBorder"
import { ImageTitle } from "../components/pageElements/imageTitle"
import { TitleOfWork } from "../components/pageElements/titleOfWork"
import { Website } from "../components/pageElements/website"
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const AdeliaPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[0].node.name}</H1>
    <MainWrapper>
      {/* <TopNavArtistPage /> */}
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[0].node.url}>
          {" "}
          <span> </span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[1].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/adeliaimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[0].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage bigScale src="/artists/adeliaimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[0].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/adeliaimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[0].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/adeliaimg4.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[0].node.img4Description}
          </ImageTitle>
        </ImageWrapper>

        <ImageWrapper>
          {" "}
          <StyledImage bigScale src="/artists/adeliaimg5.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[0].node.img5Description}
          </ImageTitle>
        </ImageWrapper>

        <ImageWrapper>
          <StyledImage src="/artists/adeliaimg6.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[0].node.img6Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>
      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[0].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[0].node.website}</Website>
        <TextWithBorder>
          <p>
            “Nós apenas somos escritos quando escrevemos.” – Jacques Derrida{" "}
            <br></br>
            <br></br>Com a caneta, lápis ou máquina de escrever, a mão escreve
            ou pressiona cada tecla enquanto acto físico, emocional e
            psicológico. O lápis, ou a máquina, transforma-se numa extensão do
            nosso próprio corpo. Pensamos com ambos os instrumentos que nos
            possibilitam uma escrita – como se fossem os nossos próprios
            membros. Através da escrita, o ser transforma. Ela é um mundo mas
            também é o outro. Uma escrita que nos escreve e permite, ao mesmo
            tempo, comunicar em segredo.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            “We are only written when we write.” – Jacques Derrida<br></br>{" "}
            <br></br>With the pen, pencil or writing machine, the hand writes or
            pressures each key as a physical, emotional and psychological act.
            The pencil, or the writing machine, is transformed into an extension
            of our own body. We think with both instruments allowing us to
            writing – as if they were our own body members. Through writing, the
            being transforms. It is one world but it is also the other. A
            writing that writes us and that allows, at the same time, to
            communicate in secret.
          </p>
        </TextNoBorder>
      </TextWrapper>{" "}
      {/* <Link to={data.allDataJson.edges[7].node.url}> next</Link> */}
    </MainWrapper>

    <Link to={data.allDataJson.edges[0].node.url} className="scrollTopButton">
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
          gif1Description
          gif2Description
          gif3Description
        }
      }
    }
  }
`
export default AdeliaPage
