import React from 'react';
import {GlobalStyle} from './styles/GlobalStyles';
import {ListOfCategories} from './components/ListOfCategories';
import {ListOfPhotoCards} from './components/ListOfPhotoCards';
import {Logo} from './components/Logo';

export const App = () => (
  <React.Fragment>
    <GlobalStyle/>
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </React.Fragment>
)