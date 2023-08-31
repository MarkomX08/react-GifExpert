import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');// creacion del mock de useFetchGifs

describe('Pruebas en <GifGrid/>', () => { 

    // uso del mock con datos proporcionadas
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });

    const category = 'One Punch'; // Variable que contiene el valor de una categoria

    test('debe de mostrar el loading inicialmente', () => { 

        render( <GifGrid category ={ category }/>); //renderizado del componente GifGrid
        expect ( screen.getByText('Cargando...')); //busqueda del texto dado en el componente
        expect( screen.getByText( category )); //busqueda del texto dado en el componente
     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        //data ficticia para la prueba de imagenes
        const gifs = [
            {
                id:'ABC',
                title:'Saitama',
                url: 'https//localhost./saitama.jpg'
            },
            {
                id:'123',
                title:'Goku',
                url: 'https//localhost./goku.jpg'
            },
        ];

        // uso del mock con datos proporcionadas
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>); //renderizado del componente GifGrid
        expect( screen.getAllByRole('img').length).toBe(2); // busqueda del tamaño de la array dentro del rol de etiqueta
      })

 });