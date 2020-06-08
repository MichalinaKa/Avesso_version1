// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import styled from "styled-components"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import GlobalStyle from "../styles/globalStyle"
import { ListWrapper } from "../components/topNavElements/listWrapper"
import { Link } from "gatsby"
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { colors } from "../styles/colors"
import { media } from "../styles/media"
const H1 = styled.h1`
  font-family: "Montserrat";
  font-size: 40px;
  position: relative;
  :before {
    content: "";
    background-color: ${colors.yellow};
    width: 720px;
    height: 3px;
    position: absolute;
    top: 20px;
    ${media.smallDesktop} {
      width: 80%;
    }
    ${media.tablet} {
      width: 80%;
    }
    ${media.phone} {
      width: 60%;
    }
  }
  ${media.phone} {
    font-size: 200%;
  }
`

const Bold = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
`
const CreditsPage = () => (
  <Layout>
    <MainWrapper>
      <GlobalStyle />
      <NavMainWrapper>
        <ListWrapper>
          <goHome></goHome>
          <goHome>
            <Link to="/">home</Link>
          </goHome>
          <goHome></goHome>
        </ListWrapper>
      </NavMainWrapper>
      <H1>O AVESSO DO AVESSO DO AVESSO</H1>
      <TextWrapper centered>
        <p>
          Adélia Santos Costa • Alan Tod • Aleksandra Kalisz • Ana Allen • Ana
          Almeida Pinto • Camila Tisott • Claudia Tavares • Daniela Pinheiro •
          Eduardo Belga • Eduardo Rocha • Fernando José Pereira • Filipe
          Rodrigues • Isadora Petrauskas • Juliano Moraes • Luciana Padilha •
          Ludgero Almeida • Maria João Almeida • Marta Belkot • Mônica RR •
          Najla Leroy • Paulo Maias • Pedro Alegria • Raquel Felgueiras • Samuel
          Silva • Susana de Medeiros • Susana Soares Pinto • Xian Xinyings{" "}
          <br></br>
          <Bold>Artistas</Bold>
        </p>

        <p>
          Doutoramento em Artes Plásticas - FBAUP • Gabriela Carvalho • Raquel
          Felgueiras<br></br>
          <Bold>Organização</Bold>
        </p>

        <p>
          Gabriela Carvalho<br></br>
          <Bold>Curadoria</Bold>
        </p>

        <p>
          Eduardo Rocha<br></br>
          <Bold>Identidade Visual</Bold>
        </p>

        <p>
          Michalina Kaminska<br></br>
          <Bold>Web designer</Bold>
        </p>
      </TextWrapper>
    </MainWrapper>
    <Link to="/credits" className="scrollTopButton">
      {" "}
      <span> &larr;</span>
      to the top
    </Link>
  </Layout>
)

export default CreditsPage
