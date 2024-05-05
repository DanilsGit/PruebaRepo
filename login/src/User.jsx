/* eslint-disable react/prop-types */
import './User.css'
import { useEffect } from 'react';
import confetti from 'canvas-confetti'
export function User({ nombre, apellido, edad }) {
    useEffect(() => {
        confetti()
    }, [])
    return (
        <div className='user'>
            <h2>Nombre : {nombre}</h2>
            <h2>Apellido : {apellido}</h2>
        </div>
    );
}