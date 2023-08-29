import propTypes from 'prop-types';
export const GifItems = ({title, url, id }) => {


    return (
        <div className="card">
            <img src={ url } alt={title} />
            <p> { title } </p>
        </div>
    )

}

GifItems.propTypes = {
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}
/* Tarea
1. Añadir PrpTypes
    a. title obligatorio
    b. url obligatorio
2.Evaluar el snapshot

*/