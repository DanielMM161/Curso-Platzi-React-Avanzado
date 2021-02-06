import React,{Fragment} from 'react';
import {GlobalStyle} from './styles/GlobalStyles';
import {Logo} from './components/Logo'
import {NavBar} from './components/NavBar'
import {Router} from '@reach/router'

import {Home} from './pages/Home'
import {Detail} from './pages/Detail'

export const App = () => {
  
return(
    <Fragment>
      <GlobalStyle/>
      <Logo />
 
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId'/>
        <Detail path='/detail/:detailId' />
      </Router>

      <NavBar />
    </Fragment>
  )
}
