import { useEffect, useState } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItems } from "./GifItems";


export const GifFrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );


    return (
        <>
            <h3>{ category }</h3>
            
            {
                isLoading &&( <h2>Cargando...</h2>)
            }
            
            {/* card para los gifs */}
            <div className="card-grid">
                {
                    images.map( ( image ) =>(
                        <GifItems 
                            key={ image.id} 
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
