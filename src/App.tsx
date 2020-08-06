import React from 'react'
import GlobalStyles from './styles/globalStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import { PageContainer } from './styles/style'

import Home from './components/Home'
import Winners from './components/Winners'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <PageContainer>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/winners" component={Winners} />
          </AnimatedSwitch>
        </PageContainer>
      </Router>
    </>
  )
}
