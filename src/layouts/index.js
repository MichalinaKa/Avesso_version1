import React from "react"

import GlobalStyle from "../styles/globalStyle"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    {/* <Navigation /> */}

    {/* <NavigationArtistPage /> */}
    {children}
  </>
)

export default MainLayout
