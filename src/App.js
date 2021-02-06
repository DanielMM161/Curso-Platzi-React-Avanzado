import React,{Fragment} from 'react';
import {GlobalStyle} from './styles/GlobalStyles';
import {Logo} from './components/Logo'
import {NavBar} from './components/NavBar'
import {Router} from '@reach/router'

import {Home} from './pages/Home'
import {Detail} from './pages/Detail'
import {Favs} from './pages/Favs'
import {User} from './pages/User'
import {NotRegisteredUser} from './pages/NotRegisteredUser'

const UserLogger = ({children}) => {
  return children({isAuth: false})
}

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

      <UserLogger>
        {
          ({isAuth}) => 
            isAuth
              ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              : <Router>
                  <NotRegisteredUser path='/favs'/>
                  <NotRegisteredUser path='/user'/>
                </Router>
        }
      </UserLogger>

      <NavBar />
    </Fragment>
  )
}

