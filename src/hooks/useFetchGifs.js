import { useEffect, useState } from "react";
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

     const [images, setImages] = useState([]); // useState para las imagenes
     const [isLoading, setIsLoading] = useState( true ); // useState para la carga

    const getImages = async() => { // funcion asincrona
        const newImages = await getGifs( category ); // variable que contiene una promesa disparada por la funcion getGifs
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    },[]);

    return{
        images,
        isLoading
    }
}
