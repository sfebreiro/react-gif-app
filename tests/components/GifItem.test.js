import { render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem";


describe('first', () => { 

    const title = 'Titulo'
    const url = 'https://urlstring.com/'
    
    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <GifItem title={ title } url={ url } /> );

        expect(container).toMatchSnapshot();

     }) 


     test('Debe de mostrar la imagen con la URL indicada', () => { 
        
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(url);

        const { alt, src } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

      })


      test('Debe de mostrar el título en el componente', () => { 
        
        render( <GifItem title={ title } url={ url } /> );
        expect(screen.getByText(title)).toBeTruthy();

       })

})