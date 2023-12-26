import React, { Fragment, useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );


  return (
    <Fragment>
        <h3> { category } </h3>

        {
            isLoading && (<h4>Cargando...</h4>)
        }

        <div className='carg-grid'>
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id } 
                        // title={ image.title }
                        // url={ image.url }
                        { ...image }
                    />
                ))
            }
        </div>
    </Fragment>
  )
}
