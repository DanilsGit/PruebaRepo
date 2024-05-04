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
        if (nombre === '' || apellido === '' || edad === '') {
            document.getElementById('1').placeholder = 'Campo requerido'
            document.getElementById('2').placeholder = 'Campo requerido'
            document.getElementById('3').placeholder = 'Campo requerido'
            setTimeout(() => {
                document.getElementById('1').placeholder = 'Nombre'
                document.getElementById('2').placeholder = 'Apellido'
                document.getElementById('3').placeholder = 'Edad'
            }, 2000)
            return
        }
        if (nombre.length < 3 || apellido.length < 3) {
            document.getElementById('1').value = ''
            document.getElementById('2').value = ''
            document.getElementById('1').placeholder = 'Nombre muy corto'
            document.getElementById('2').placeholder = 'Apellido muy corto'
            setTimeout(() => {
                document.getElementById('1').placeholder = 'Nombre'
                document.getElementById('2').placeholder = 'Apellido'
            }, 2000)
            return
        }
        if (edad < 18) {
            document.getElementById('3').value = ''
            document.getElementById('3').placeholder = 'Debes ser mayor de edad'
            setTimeout(() => {
                document.getElementById('3').placeholder = 'Edad'
            }, 2000)
            return
        }
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
                <input id='1' placeholder='nombre' type="text" onChange={(e) => { setNombre(e.target.value) }} />
                <input id='2' placeholder='apellido' type="text" onChange={(e) => { setApellido(e.target.value) }} />
                <input id='3' placeholder='edad' type="number" onChange={(e) => { setEdad(e.target.value) }} />

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