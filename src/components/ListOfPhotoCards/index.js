import React from 'react';
import { PhotoCard } from '../PhotoCard';

import {gql, useQuery} from '@apollo/client'

const GET_PHOTOS = gql`
    query getPhotos {
        photos {
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }
`

export const ListOfPhotoCards = () => {
    const { loading, error, data} = useQuery(GET_PHOTOS)

    if (loading) return <h1>...Cargando</h1>
    if (error) return <p>Error</p>

    return(
        <ul>
            {
                data.photos.map((photoCard, id) =>(
                    <PhotoCard key={id} {...photoCard} />  
                ))
            }
        </ul>
    )
} 