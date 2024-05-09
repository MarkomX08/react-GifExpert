import { getGifs } from "../../src/helpers/GetGifs";

describe('Pruebas en GetGifs()', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One Punch'); //envia la categoria que se requiere 
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 ); //verifica si el array tiene mas de un elemento

        // Se espera que el array tenga la siguiente estructura
        expect ( gifs[0] ).toEqual({
            id: expect.any( String ), // especifica que el elemento a recibir debe ser de tal tipo
            title: expect.any( String ), // especifica que el elemento a recibir debe ser de tal tipo
            url: expect.any( String ), // especifica que el elemento a recibir debe ser de tal tipo
        });
     });
 });