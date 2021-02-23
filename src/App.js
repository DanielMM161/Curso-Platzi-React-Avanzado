import React,{Fragment, useContext} from 'react';
import {GlobalStyle} from './styles/GlobalStyles';
import {Logo} from './components/Logo'
import {NavBar} from './components/NavBar'
import {Redirect, Router} from '@reach/router'

import {Home} from './pages/Home'
import {Detail} from './pages/Detail'
import {Favs} from './pages/Favs'
import {User} from './pages/User'
import {NotRegisteredUser} from './pages/NotRegisteredUser'
import {NotFound} from './pages/NotFound'
import {Context} from './Context'

export const App = () => {

  const {isAuth} = useContext(Context)

  return(
    <Fragment>
      <GlobalStyle/>
      <Logo />

      <Router>
        <NotFound  default />
        <Home path='/' />
        <Home path='/pet/:categoryId'/>
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login'/>}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </Fragment>
  )
}

