// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, Link } from "gatsby"
import AlanVideo from "../assets/images/artists/alansound1.m4a"
import { H1 } from "../components/pageElements/H1"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import { GalleryWrapper } from "../components/pageElements/galleryWrapper"
import { ImageWrapper } from "../components/pageElements/imageWrapper"
import { StyledImage } from "../components/pageElements/styledImage"
import { ImageTitle } from "../components/pageElements/imageTitle"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { TextWithBorder } from "../components/pageElements/textWithBorder"
import { TitleOfWork } from "../components/pageElements/titleOfWork"
import { Website } from "../components/pageElements/website"
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const AlanPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[1].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[0].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[2].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/alanimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[1].node.img1Description}
          </ImageTitle>
          <video controls width="100%" height="100">
            <source src={AlanVideo} type="video/mp4" />
          </video>
          <ImageTitle>
            {data.allDataJson.edges[1].node.sound1Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>
      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[1].node.title}</TitleOfWork>
        <Website as="a" href="https://alantod.com">
          {data.allDataJson.edges[1].node.website}
        </Website>
        <TextWithBorder>
          <p>
            Regarding aesthetical and theoretical levels, this research will
            help us to define an Art made of forest: Forest-Art envisions an art
            that promotes collaborative prosperity. Every singular action
            contributes to the building of the artwork. From macro- to
            micro-scale , the research allows a wide range of means for
            empowering healing in both the spheres of climate change as well as
            public health. To question the place of the forest-artist in the
            world, we will be taking a trans-cultural approach to stimulate
            long-term and fruitful collaborations. In this regard, the aim is to
            emphasize the indigenous approach to the forest and how it could
            inform Western-centric practices, with the forest artist’s role
            being that of mediating forest ‘s culture in collective imaginary.
            The research creates the concept of Forest-Art as an expression of
            an international artistic movement that dates since the 1990s,
            moulded by a number of artists with anthropogenic practices. The
            work is aiming at embodying the criticism of the complex
            relationship between nature and society and conveys holistic
            approaches to sustainability and public health. It considers plant’s
            behaviour and a direct collaboration with the vegetal in the process
            of knowledge production through performances, regenerative soil
            permaculture, forest-bio-art sculpture, writing and visuals. Wildman
            is a project where the performance tries to understand the meaning
            of collaborating with forest as a man, using the occidental figure
            of the Wildman founded in some sculpture of the Cloister of the
            Cathedral of Evora-Portugal dated from the 16th century. What is the
            Wildman? A feudal forest’s indigenous or a myth from antiquity? May
            someone inside ourselves? Regarding our contemporary issues, shall
            we ask the Wildman to come back? Shall he be our forest’s
            ambassador?{" "}
          </p>
        </TextWithBorder>
      </TextWrapper>
    </MainWrapper>{" "}
    <Link to={data.allDataJson.edges[1].node.url} className="scrollTopButton">
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
          sound1Description
        }
      }
    }
  }
`

export default AlanPage
