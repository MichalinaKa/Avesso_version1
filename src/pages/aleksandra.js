// Gatsby supports TypeScript natively!
import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"
import Layout from "../components/Layout/Layout"
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

const AleksandraPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[2].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage />
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/aleksandraimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[2].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/aleksandravideo1.gif" />
          <ImageTitle>
            {data.allDataJson.edges[2].node.gif1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <StyledImage src="/artists/aleksandraimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[2].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/aleksandravideo2.gif" />
          <ImageTitle>
            {data.allDataJson.edges[2].node.gif2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/aleksandraimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[2].node.img3Description}
          </ImageTitle>
        </ImageWrapper>

        <ImageWrapper>
          <StyledImage src="/artists/aleksandravideo3.gif" />
          <ImageTitle>
            {data.allDataJson.edges[2].node.gif3Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>
      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[2].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[2].node.website}</Website>
        <TextWithBorder>
          <p>
            Now with the abrupt change in our lifestyles, a change within the
            arts has occurred as well. The experience of an artwork has moved to
            online world and has started a new life. We can no more smell the
            paint and see the original colours or textures influenced by
            different light. We can only enjoy the idea of a painting but cannot
            experience it fully. They are now closed in a 2D world. The way we
            can interact with a painting is through a screen of our computers
            and smartphones. In the GIF triptych the distorted images are like
            our deformed reality. They are blending together like recent days,
            weeks. They glitch similarly to our current conversations
            interrupted by the low wi-fi. Old is meeting new. Old masters are
            put in modern context just like our experiences. Trapped inside,
            needing the outside. We have become dependent from new technologies-
            we don’t want them and need them at the same time. We want them but
            we keep talking about what we are missing. Avesso do avesso do
            avesso.
          </p>
        </TextWithBorder>
      </TextWrapper>
    </MainWrapper>{" "}
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
          gif1Description
          gif2Description
          gif3Description
        }
      }
    }
  }
`

export default AleksandraPage
