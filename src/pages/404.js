import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import { MainWrapper } from "../components/pageElements/mainWrapper"

const NotFoundPage = () => (
  <Layout>
    <MainWrapper>
      {" "}
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">click here to come back to the main page</Link>
    </MainWrapper>
  </Layout>
)

export default NotFoundPage
