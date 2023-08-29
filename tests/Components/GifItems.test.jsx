import { render,screen } from "@testing-library/react";
import { GifItems } from "../../src/components/GifItems";

describe('Pruebas en el componente de GifItems', () => { 

    const title= 'Dragon ball';
    const url = 'htpps://dragonball.com/goku.jpg';

    test('Inicializacion del snapshot', () => { 
        const { container } = render( <GifItems title= {title} url = {url} />);
        expect ( container ).toMatchSnapshot();
     });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItems title= {title} url={url} /> );
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title);
        
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt);
    });
    
    test('debe de mostrar el titulo en el componente', () => { 
        render(<GifItems title= {title} url={url} /> );
        expect( screen.getByText(title)).toBeTruthy();
      })
 })