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
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"

const PedroPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[21].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/pedroimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[21].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/pedroimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[21].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/pedroimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[21].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[21].node.title}</TitleOfWork>
        <Website as="a" href="http://www.tubafrom.com/">
          {data.allDataJson.edges[21].node.website}
        </Website>
        <TextWithBorder>
          <p>
            cora = cora / (1 + 0.05 * Math.Abs(k - size / 2))<br></br>
            cor1 = System.Drawing.Color.FromArgb(cora, corr, corg, corb)
            <br></br>
            myPen = New Pen(cor1, gross)<br></br>a = size<br></br>b = a * (1.5 -
            Rnd())<br></br>l = 10000<br></br>f = Rnd() * 10<br></br>
            myBrush = New SolidBrush(corfill)<br></br>
            myGraphics.FillEllipse(myBrush, aa - a, bb - b, 2 * a, 2 * b)
            <br></br>
            For i = 1 To 2<br></br>f = Rnd() * 360<br></br>g = f + Rnd() * 100
            <br></br>
            While <br></br>
            th1 = 6.28 / 360 * f<br></br>c = aa + a * Math.Cos(th1)<br></br>d =
            bb + b * Math.Sin(th1)<br></br>
            myPen = New Pen(cor, gross)<br></br>
            myGraphics.DrawLine(myPen, a1, b1, a2, b2)<br></br>
            End While<br></br>
            Next i
          </p>
        </TextWithBorder>
        <TextNoBorder></TextNoBorder>
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
        }
      }
    }
  }
`
export default PedroPage
