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

const FilipePage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[11].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/filipeimg1.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[11].node.img1Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/filipeimg2.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[11].node.img2Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/filipeimg3.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[11].node.img3Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/filipeimg4.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[11].node.img4Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/filipeimg5.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[11].node.img5Description}
          </ImageTitle>
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage src="/artists/filipeimg6.jpg" />
          <ImageTitle>
            {data.allDataJson.edges[11].node.img6Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[11].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[11].node.website}</Website>
        <TextWithBorder>
          <p>
            4º Dia em Ohtawara: São 11:52, cheguei ao estúdio e alojamento. O
            edifício parece uma nave espacial pousada numa imensa zona verde
            composta por arrozais, estufas e bosques. Há diferenças muito claras
            entre Tóquio e Ohtawara. A humidade tropical ultrapassa os 70%. (…)
            O fluxo de acontecimentos é tão grande, mas ainda não senti grandes
            perturbações no ritmo biológico por causa do jet lag. Segui os
            conselhos do Pedro, meu irmão, com sorte irei ver-te na China se
            conseguir o visto no final de Agosto. (…) Impressionado com o
            silêncio e os ambientes calmos. Os Japoneses são gentis e educados,
            não falam alto, são pausados nas conversas (…) Creio que têm uma
            sabedoria na arte de falar, Kodai Hihara é um exemplo disso.{" "}
            <br></br>
            <br></br>
            18º Dia em Ohtawara: Faltam alguns dias para a inauguração. O sol
            continua a nascer cerca das 4:30 da madrugada. Encontrei um horário
            mais adequado para pintar, às 5 da manhã estou no estúdio, os raios
            solares já são intensos (…) Nos primeiros dias fotografei e desenhei
            elementos provenientes dos locais que frequentei. São a recolha de
            fluxos Antropológicos provenientes da dimensão social, cultural e
            misticismo oriental. (…) As visitas de artistas são frequentes,
            Choichi NishikaWa, Seigo Aoki e Filipa Roque, vieram de Tóquio.
            Falamos naturalmente da vida, diferenças culturais, de processos
            artísticos, do estado atual da arte que não difere muito dos nossos
            contextos, é a globalização “totalizante”. Os temas, as instituições
            os conteúdos artísticos são tendencialmente glossários da arte
            expandida…{" "}
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p></p>
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
  }
`
export default FilipePage
