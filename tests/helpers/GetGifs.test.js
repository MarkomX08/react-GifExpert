import { getGifs } from "../../src/helpers/GetGifs";

describe('Pruebas en GetGifs()', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One Punch'); //envia la categoria que se requiere 
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 ); //verifica si el array tiene mas de un elemento

        // Se espera que el array tenga la siguiente estructura
        expect ( gifs[0] ).toEqual({
            id: expect.any( String ), // verifica si el elemento del array es de tipo
            title: expect.any( String ),
            url: expect.any( String ),
        });
     });
 });