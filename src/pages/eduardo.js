// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, Link } from "gatsby"
import { H1 } from "../components/pageElements/H1"
import EduardoVideo from "../assets/images/artists/eduardosound1.mp3"
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

import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"

const EduardoPage = ({ data }) => (
  <Layout>
    <H1>{data.allDataJson.edges[8].node.name}</H1>
    <MainWrapper>
      <NavMainWrapper>
        <Link to={data.allDataJson.edges[7].node.url}>
          {" "}
          <span> &larr;</span>
        </Link>

        <Link to="/"> home </Link>
        <Link to={data.allDataJson.edges[9].node.url}>
          {" "}
          <span> &rarr;</span>
        </Link>
      </NavMainWrapper>
      <GalleryWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/eduardoimg1.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/eduardoimg2.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/eduardoimg3.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/eduardoimg4.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/eduardoimg5.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper isBig>
          <StyledImage src="/artists/eduardoimg6.jpg"></StyledImage>
        </ImageWrapper>
        <ImageWrapper>
          {" "}
          <video controls width="100%" height="100">
            <source src={EduardoVideo} type="video/mp4" />
          </video>
          <ImageTitle>
            {data.allDataJson.edges[8].node.sound1Description}
          </ImageTitle>
        </ImageWrapper>
      </GalleryWrapper>

      <TextWrapper>
        {" "}
        <TitleOfWork>{data.allDataJson.edges[8].node.title}</TitleOfWork>
        <Website as="a" href="http://www.eduardobelga.com/">
          {data.allDataJson.edges[8].node.website}
        </Website>
        <TextWithBorder>
          <p>
            O universo existe há 13,82 bilhões de anos. Teorias recentes
            defendem que entraria em colapso nos próximos 10 bilhões de anos. O
            universo pretende existir por pelo menos 23,82 bilhões de anos.
            Nesta linha do tempo estão incluídas as décadas da minha e da sua
            vida. Nossa percepção imediata do tempo é conhecida como o
            ‘presente’. Com muito esforço podemos percebê-lo passar em
            centésimos de segundo. A menor unidade de medida é o ´Tempo de
            Plank´ (Tp), instante em que a luz no vácuo leva para viajar o
            ‘Comprimento de Plank’ (10-20 vezes o diâmetro de um próton),
            aproximadamente 10-43 vezes um segundo.<br></br>
            <br></br>
            Um relâmpago pode existir por longuíssimos 5 x 1050 Tp. Ele desce
            das nuvens dividindo-se em vários raios, toca a terra e sobe de
            volta mais forte. O desenho do raio é análogo à forma dos mapas
            hidrográficos da terra, do fluxo da seiva nas árvores, do percurso
            da informação nos neurotransmissores, da drenagem do sistema
            linfático ou das rugas nos cantos dos olhos, mas especialmente, do
            sangue que nos circula. O sangue, como o relâmpago, também vai e
            volta, em dois pequenos estrondos, empurra e puxa, arterial e
            venoso. O pulso sanguíneo marca pequenas frações de tempo, depois a
            respiração, o piscar de olhos, o sono, as unhas e cabelos a
            brotarem, e por fim, nosso próprio crescimento e decaimento geral do
            organismo.
            <br></br>
            <br></br>
            Por mais improvável que pareça, estou vivo exatamente agora. Mesmo
            sabendo quão provisório sou, o tempo não se disfarça de passar.
            Ainda que o tempo passe, é muito tempo sendo consciente
          </p>
        </TextWithBorder>
        <TextNoBorder>
          <p>
            The age of the universe today is about 13,82 billion years. Recent
            theories claim that it will collapse - the big crunch – in the next
            ten billion years. The universe is supposed to exist, as we know it,
            for another 23,82 billion years at least. Now we are alive and awake
            in this strict segment of this vast existence. Our immediate
            perception of time is known as ‘present’. With a lot of effort, we
            can watch it pass in centesimal seconds. The smallest unit to
            measure the passage of time - the ‘Plank Time’ (Tp) - comprehends
            the instant that light takes to travel in the vacuum thru the ‘Plank
            Length’ (10-20 times the diameter of a proton), approximately, 10-43
            times a second.
            <br></br>
            <br></br>A bolt of lightning can be visible for extensive 5 x 1050
            Tp. It descends from the clouds, splitting into several rays,
            touches the earth and goes back up stronger. The lightning drawing
            is analogous to the form of the hydrographic maps, the flow of sap
            in trees, the path of information in neurotransmitters, the draining
            in the lymphatic system, or the wrinkles around the eyes, but
            especially, it is analogous to the blood in our vessels. Blood, like
            a bolt of lightning, also comes and goes in two small bangs, push
            and pull, arterial and venomous. The blood pulse marks little
            fractions of time, and then the breathing, the blinking of the eyes,
            the sleep, the nails and hairs growing, and finally, our own
            corporal growth and decay.
            <br></br>
            <br></br>
            As unlikely as it might sound, I am alive right now. Even knowing
            how provisional I am, time does not hide from passing. Even if time
            passes, it's a long time being conscious.
          </p>
        </TextNoBorder>
      </TextWrapper>
    </MainWrapper>
    <Link to={data.allDataJson.edges[8].node.url} className="scrollTopButton">
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
          sound1Description
        }
      }
    }
  }
`
export default EduardoPage
