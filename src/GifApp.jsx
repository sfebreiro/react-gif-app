import React, { useState, Fragment } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifApp = () => {

    const [ categories, setCategories ] = useState(['One punch']);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
    };

  return (
    <Fragment>
        <h1>GifApp</h1>

        <AddCategory 
           // setCategories={ setCategories } 
            onNewCategory={ onAddCategory }
        />


        { 
            categories.map(category => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />                
            ))
        }
    </Fragment>
  )
}


