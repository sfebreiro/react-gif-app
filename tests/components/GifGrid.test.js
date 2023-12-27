import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';
    

    test('Debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category } />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     })


     test('Debe de mostrar los gifs cuando se cargan', () => { 
        
        const gifs = [
            {
                id: 'ABD',
                title: 'Saitama',
                url: 'https://goku.com'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://saitama.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } />);
        expect(screen.getAllByRole('img').length).toBe(2);

      })

 })