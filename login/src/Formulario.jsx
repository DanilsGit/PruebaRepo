/* eslint-disable react/prop-types */
import './Formulario.css'
// hook
import { useState } from 'react';
import { User } from './User';


export function Formulario() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false)

    const handleClickAdd = () => {
        setUsers([...users, { nombre, apellido, edad }])
        console.log(users)
    }

    const handleClickShow = () => {
        setShow(!show)
    }

    return (
        <div className='contenedor'>
            <div className='formulario'>
                <h2>Ingresa tus datos</h2>
                <input placeholder='nombre' type="text" onChange={(e) => { setNombre(e.target.value) }} />
                <input placeholder='apellido' type="text" onChange={(e) => { setApellido(e.target.value) }} />
                <input placeholder='edad' type="number" onChange={(e) => { setEdad(e.target.value) }} />

                <button onClick={handleClickAdd} >Agregar Usuario</button>
                <button onClick={handleClickShow} >Mostrar Usuarios</button>
            </div>
            <div className='users-container'>
            {show ?
                users.map((user, index) => {
                    return <User key={index} nombre={user.nombre} apellido={user.apellido} edad={user.edad} />
                })
                : <h2>no visibles</h2>
            }
            </div>
        </div>
    );
}