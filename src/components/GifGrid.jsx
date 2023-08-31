import PropTypes from 'prop-types';

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItems } from "./GifItems";


export const GifGrid = ({ category }) => {

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
