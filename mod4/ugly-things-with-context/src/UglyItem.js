import React from 'react'

export default function UglyItem(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.title} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    )
}
