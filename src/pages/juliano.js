// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
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
import TopNavArtistPage from "../components/TopNavArtistPage/TopNavArtistPage"

const JulianoPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[13].node.name}</H1>
    <MainWrapper>
      <TopNavArtistPage></TopNavArtistPage>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://player.vimeo.com/video/401404048"
            videoTitle=""
          />
          <ImageTitle>
            {data.allDataJson.edges[13].node.video1Description}
          </ImageTitle>
        </ImageWrapper>

        <ImageWrapper isBig>
          <Video
            videoSrcURL="https://player.vimeo.com/video/414891406"
            videoTitle=""
          />

          <ImageTitle>
            {data.allDataJson.edges[13].node.video2Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[13].node.title}</TitleOfWork>
        <Website>{data.allDataJson.edges[13].node.website}</Website>
        <TextWithBorder>
          <p>
            “Cedofeita après la Lettre”, depois do sentido, tem início com a
            descoberta, por mim, da Igreja de São Martinho da Cedofeita. Um
            sólido e conciso templo em pedra, românico, de nave única erguida,
            segundo informa a pedra do tímpano, no século VI pelo rei suevo
            Teodomiro. Marca minha experiência de chegada em terras alhures, de
            uma nova experiência do tempo e do espaço. De um já quase velho
            corpo dando seu testemunho ao se debater contra absoluto e se
            questionar: o que pode o corpo quando jogado contra uma inescrutável
            rocha forjada a “fogo frio”? O que pode o corpo contra o real? Esse
            trabalho, inicialmente, seria uma performance e uma escultura. A
            chegada do covid-19 obrigou-me a adaptar essa ideia inicial e
            transformá-la em pequenos filmes de apartamento, filmes-contos que
            serão adicionados aos poucos outros filmes até que se forme um
            filme-livro de maior duração.
            <br></br>
            <br></br>
            Os dois primeiros filmes (contos) propõem pensar o amor como
            encontro da diferença em tempos de quarentena. O vírus é tão somente
            um ser natural, mas pode ele torna-se político na medida em que
            serve a política de ordenamento dos corpos? Eis a condição
            paradoxal: na medida que o vírus se politiza, mais ele nos leva rumo
            ao uma vida puramente biológica, em que existimos apenas para
            sobreviver. Diante do que estamos passando vale a pena perguntar o
            que nós estamos efetivamente perdendo -- o dinheiro? As liberdades
            individuais? Talvez o mais importante, a capacidade de
            reconhecimento do outro.
            <br></br>
            <br></br>
            Entretanto, quando para alguns da Europa o vírus nos condena a “vida
            nua” ou para outros preconizam uma crise do capitalismo, em alguns
            outros lugares, como no Brasil, onde a “vida nua” já é
            preponderante, sobreviver deve passar pela reinvenção do amor como o
            mais elementar encontro do outro. Neste espetáculo narcísico do
            mundo, talvez uma utopia que ainda vale a pena seja redescobrir
            duração da vida como algo mais além da natureza. Com diz Alain
            Badiou, “o amor é uma reinvenção da vida. Reinventar o amor é
            reinventar essa reinvenção”. Mas os novos “arquitetos da destruição”
            querem uma segunda chance. Veem no vírus a possibilidade de criar
            vida a partir da ruína do que acham que é velho e obsoleto. E o que
            não é para eles? Mas o “novo” desses arquitetos não faz sentido
            porque estão fora do tempo ao possuírem no seu interior a eternidade
            da morte. Eles não conseguem perceber que recriar a vida é também
            recriar o amor como experiência radical da alteridade.
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            “Cedofeita après la Lettre”, after the meaning, begins with my
            discovery of the Church of São Martinho da Cedofeita. A Romanesque,
            solid and concise stone temple with a single nave erected, according
            to the stone of the tympanum, in the 6th century by the Swedish king
            Teodomiro. It marks my experience of arriving in elsewhere lands, of
            a new experience of time and space. Of an almost old body giving its
            testimony when struggling against the absolute and asking itself:
            what can the body do when thrown against an inscrutable rock forged
            by “cold fire”? What can the body do against the real? Initially,
            this work was going to be a performance and a sculpture. The arrival
            of the covid-19 forced me to adapt this initial idea and transform
            it into small apartment-made films, short stories that will be
            slowly added to until a longer book-film is formed.
            <br></br>
            <br></br>
            The first two films (short stories) propose to think about love as
            the encounter of difference in these times of quarantine. The virus
            is just a natural being, but can it become political in so far as it
            serves the policy of ordering bodies? Here is the paradoxical
            condition: as the virus becomes more politicized, the more it takes
            us towards a purely biological life, in which we exist only to
            survive. Given what we are going through, it is worth asking what we
            are effectively losing - money? Individual freedoms? Perhaps most
            importantly, the ability to recognize the Other.
            <br></br>
            <br></br>
            Meanwhile in Europe, where for some the virus condemns us to a
            “naked life” and for others it precognizes a crisis of capitalism,
            in some other places, such as Brazil, where a “naked life” is
            already preponderant, survival must go through the reinvention of
            love as the most elementary encounter of the Other. In this
            narcissistic spectacle of the world, perhaps a utopia that is still
            worthwhile is to rediscover our life span as something beyond
            nature. As Alain Badiou says, “love is a reinvention of life.
            Reinventing love is reinventing that reinvention”. But the new
            “architects of destruction” want a second chance. They see in the
            virus the possibility of creating life from the ruin of what they
            think is old and obsolete. And what's not for them? But the “new” of
            these architects does not make sense because they are out of time by
            having the eternity of death within them. They fail to realize that
            to recreate life is also to recreate love as a radical experience of
            otherness.
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
          video2Description
        }
      }
    }
  }
`
export default JulianoPage
