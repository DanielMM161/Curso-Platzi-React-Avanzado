import React from 'react';
import { PhotoCard } from '../PhotoCard';
import {useGetPhotos} from '../../hooks/getPhotos'


export const ListOfPhotoCards = ({categoryId}) => {
    const {loading, error, data} = useGetPhotos(categoryId)

    if (loading) return <p>Loading...</p>
    if (error) return <p>error...</p>

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