// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
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

const FernandoPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[10].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://player.vimeo.com/video/388341677"
            videoTitle=""
          ></Video>
          <ImageTitle>
            {data.allDataJson.edges[10].node.video1Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        <TitleOfWork>{data.allDataJson.edges[10].node.title}</TitleOfWork>
        <Website as="a" href="http://www.virose.pt/fjp">
          {data.allDataJson.edges[10].node.website}
        </Website>
        <TextWithBorder>
          <p>
            No início da última década, um vulcão islandês com um nome
            impronunciável entrou em erupção de forma tão violenta que paralisou
            toda a distribuição e atividade aérea comercial por quase três
            semanas. Foi, talvez, a maior ameaça ao capitalismo global nos
            últimos anos: a força da natureza conseguiu o que muita luta
            política ainda não conseguiu: paralisar o sistema. O elemento
            determinante para este encerramento foram as nuvens de cinzas
            ejectadas. Neste vídeo, essas nuvens vulcânicas são colocadas em
            paralelo com as nuvens de gases lacrimogéneos, cocktails molotov
            etc. usados na luta política nas ruas de Atenas durante o período da
            crise financeira e a presença da Troika (FMI, Banco Mundial e União
            Europeia). Dois exemplos recentes da luta contra o poder do
            capitalismo global: o primeiro imprevisível e não intencional; o
            segundo cheio de intencionalidade e absolutamente previsível (as
            condições exigiam) ... e ainda o fazem hoje, não apenas lá.
            <br></br>
            Entre a imprevisibilidade e a intencionalidade da memória e da
            história, se constrói o trabalho artístico. <br></br>Faz sentido,
            outra vez, quando o capitalismo global está, de novo, paralisado. Só
            que as nuvens cinzas são agora de outro tipo.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            At the beginning of the last decade, an Icelandic volcano with an
            unpronounceable name erupted in a violent way that paralyzed all
            distribution and commercial air activity for almost three weeks. It
            was, perhaps, the greatest threat to global capitalism in recent
            years: the force of nature has accomplished what much political
            struggle has not yet accomplished: paralyze the system. The
            determining element for this closure was the ejected ash clouds. In
            this video, these volcanic clouds are placed in parallel with the
            clouds of tear gases, Molotov cocktails, etc. used in the political
            struggle on the streets of Athens during the period of the financial
            crisis and the presence of the Troika (IMF, World Bank and European
            Union). Two recent examples of the fight against the power of global
            capitalism: the first unpredictable and unintentional; the second
            full of intentionality and absolutely predictable (the conditions
            demanded it) ... and they still do it today, not only there.
            <br></br>
            Between the unpredictability and the intentionality of memory and
            history, artistic work is built.
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
          video1Description
        }
      }
    }
  }
`
export default FernandoPage
