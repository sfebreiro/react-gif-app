import React, { Fragment, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

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

        <div className='card-grid'>
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


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}