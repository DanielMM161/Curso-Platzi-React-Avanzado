import React,{Fragment} from 'react'
import {ListOfCategories} from '../components/ListOfCategories';
import {ListOfPhotoCards} from '../components/ListOfPhotoCards';

export const Home = ({categoryId}) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>  
  )
}