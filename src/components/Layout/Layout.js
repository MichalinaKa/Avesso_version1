import React from "react"
import BottomNavArtistPage from "../BottomNavArtistPage/BottomNavArtistPage"
import styled from "styled-components"
import { graphql } from "gatsby"
import GlobalStyle from "../../styles/globalStyle"
import { media } from "../../styles/media"

const LayoutWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0 auto;
  position: relative;
  ${media.phone} {
    margin: 0 auto;
    display: block;
    padding: 0;
  }
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>
        {children}

        <BottomNavArtistPage />
      </LayoutWrapper>
    </>
  )
}

export const query = graphql`
  {
    allDataJson {
      edges {
        node {
          name
          title
          website
          url
        }
      }
    }
  }
`
