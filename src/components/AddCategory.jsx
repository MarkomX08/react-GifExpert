import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [InputValue, setInputValue] = useState('');

    // funcion: obtencion del valor puesto en el input
    const onInputChange =({ target })=> {
        setInputValue( target.value ); //obtencion del valor del input
    }

    // funcion: insercion del nuevo elemento en el array
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( InputValue.trim().length <= 1) return;// condicion: verificacion del input, si viene vacio evita la insercion al array
        // setCategories(categories => [InputValue, ...categories]); //agregado del nuevo elemento al array
        onNewCategory( InputValue.trim() );
        setInputValue('');//limpieza del input
    }


    return (
        <form onSubmit={ onSubmit }>
            <input type="text" 
            placeholder="Buscar Gifs"
            value={ InputValue }
            onChange={ onInputChange }
            />
        </form>
    )
}
