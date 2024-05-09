import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([ 'One Punch Man']);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return; // condicion: no inserta si ya existe
        //Formas de agregar nuevos elementos
        // categories.push(newCategory);
        setCategories ( [ newCategory, ...categories]);// otra forma: setcategories ( cat => [ ...cat, 'Valorant' ] );
    }

    return (
        <>
            <h1>Busqueda de gifs</h1>
        
        <AddCategory 
            onNewCategory = { (value) => onAddCategory(value) }
        />


        { 
            categories.map( category => (
                    < GifGrid 
                        key={ category } 
                        category={ category } />
            ))
        }
            
        </>
    )
}