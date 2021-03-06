import React from 'react'

export default function Result({ result, openPopup }) {
    return (
        <div className='result' onClick={() => openPopup(result.imdbID)}>
            <img alt='Poster' src={result.Poster}/>
            <h3>{result.Title}</h3>
        </div>
    )
}
