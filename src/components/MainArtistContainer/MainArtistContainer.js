import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

const ArtistWrapper = styled.div`
  margin: 0 auto 100px;
  text-align: center;
  width: 90vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  div {
    padding-bottom: 50px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    width: 300px;
    height: 300px;
  }
`
const H1 = styled.h1`
  font-size: 20px;
  font-weight: normal;
`

const MainArtistContainer = () => (
  <StaticQuery
    query={graphql`
      {
        allDataJson {
          edges {
            node {
              name
              title
              website
              thumbnail
              url
            }
          }
        }
      }
    `}
    render={data => (
      <ArtistWrapper>
        {data.allDataJson.edges.map(item => {
          return (
            <div>
              <Link to={item.node.url}>
                <img
                  src={item.node.thumbnail}
                  alt={`image_${item.node.thumbnail}`}
                />
                <H1>{item.node.name}</H1>
              </Link>
            </div>
          )
        })}
      </ArtistWrapper>
    )}
  />
)
export default MainArtistContainer
