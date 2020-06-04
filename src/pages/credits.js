// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/Layout/Layout"
import styled from "styled-components"
import { MainWrapper } from "../components/pageElements/mainWrapper"
import GlobalStyle from "../styles/globalStyle"
import { ListWrapper } from "../components/topNavElements/listWrapper"
import { goHome } from "../components/topNavElements/goHome"
import { Link } from "gatsby"
import { NavMainWrapper } from "../components/topNavElements/navMainWrapper"
import { TextWrapper } from "../components/pageElements/textWrapper"
import { TextNoBorder } from "../components/pageElements/textNoBorder"
import { colors } from "../styles/colors"
import { media } from "../styles/media"
const H1 = styled.h1`
  position: relative;
  :before {
    content: "";
    background-color: ${colors.yellow};
    width: 600px;
    height: 3px;
    position: absolute;
    top: 16px;
    ${media.tablet} {
      width: 0;
    }
    ${media.phone} {
      width: 0;
    }
  }
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
          <strong>Artistas</strong>
        </p>

        <p>
          DAP • Gabriela Carvalho • Raquel Felgueiras<br></br>
          <strong>Organização</strong>
        </p>

        <p>
          Gabriela Carvalho<br></br>
          <strong>Curadoria</strong>
        </p>

        <p>
          Eduardo Rocha<br></br>
          <strong>Identidade Visual</strong>
        </p>

        <p>
          Michalina Kamińska<br></br>
          <strong>Programação</strong>
        </p>
      </TextWrapper>
    </MainWrapper>
  </Layout>
)

export default CreditsPage
