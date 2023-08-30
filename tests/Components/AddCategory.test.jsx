import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en el componente <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={ ()=>{} } />); //renderiza el componente
        const input = screen.getByRole('textbox'); //busca el elemento con la etiqueta

        fireEvent.input( input, { target: {value: 'Saitama'} } );//emulacion del input con el valor

        expect( input.value ).toBe('Saitama');
        
     });

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue= 'Saitama';
        const onNewCategory = jest.fn();//creacion de una funcion muck

        render (<AddCategory onNewCategory={ onNewCategory }/>);//renderiza el componente
        const input = screen.getByRole('textbox');//guardado de un elemento con la etiqueta textbox
        const form = screen.getByRole('form');//guardado de un elemento con la etiqueta form

        fireEvent.input( input, { target: { value: inputValue } }); // emulacion del input con el valor dado
        fireEvent.submit( form ); //simulacion del formulario
        expect( input.value ).toBe(''); // verificacion de que el input este vacio

        expect( onNewCategory ).toHaveBeenCalled();// para ver si fue llamada la funcion
        expect( onNewCategory ).toHaveBeenCalledTimes(1);// para verificar que solo a sido llamado n veces
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ) // verificacion del llamado de la funcion con el argumento dado
      });

      test('no debe de llamar si el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();
        render (<AddCategory onNewCategory={ onNewCategory }/>);//renderiza el componente
        const form = screen.getByRole('form');//guardado de un elemento con la etiqueta form
        fireEvent.submit( form ); //simulacion del formulario
        
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

       });
 });