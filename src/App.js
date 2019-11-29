import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { global as GlobalStyles, theme } from 'styles'

import Menu from 'components/Menu'
import Burger from 'components/Burger'
import Header from 'components/Header'
import Background from 'components/Background'
import Weather from 'containers/weather'
import AllowLocationModal from 'components/AllowLocationModal'
import Loader from 'components/Loader'

const year = new Date().getFullYear()

const siteInfo = {
  author: 'Author',
  siteName: 'Weather App',
  gitHubRepo: 'https://github.com/mike-gusiev/weather-app-test-task',
  year
}

export const SiteInfoContext = React.createContext()

const App = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [openModal, setOpenModal] = useState(true)
    const [location, setLocation] = useState(null)

    useEffect(() => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              setLocation(position)
          }, (error) => {
              setLocation(null)
          });
      } else {
          alert('Geolocation is not supported by this browser')
      }
  }, [])

    return (
      <SiteInfoContext.Provider value={siteInfo}>
          <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Header />
              <Burger open={openMenu} setOpen={setOpenMenu} />
              <Menu open={openMenu} setOpen={setOpenMenu} />
              <Background />
              {!location && !openModal &&
                <Loader />
              }
              {openModal &&
                <AllowLocationModal onClose={() => setOpenModal(false)} />
              }
              {location && !openModal &&
                <Weather currentLocation={location} />
              }
          </ThemeProvider>
      </SiteInfoContext.Provider>
    )
}

export default App;
