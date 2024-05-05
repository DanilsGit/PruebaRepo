/* eslint-disable react/prop-types */
import './Formulario.css'
// hook
import { useState } from 'react';
import { User } from './User';


export function Formulario() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false)

    const handleClickAdd = () => {
        if (username === '' || password === '') {
            document.getElementById('1').placeholder = 'Campo requerido'
            document.getElementById('2').placeholder = 'Campo requerido'
            setTimeout(() => {
                document.getElementById('1').placeholder = 'username'
                document.getElementById('2').placeholder = 'password'
            }, 2000)
            return
        }
        if (username.length < 3 || password.length < 3) {
            document.getElementById('1').value = ''
            document.getElementById('2').value = ''
            document.getElementById('1').placeholder = 'Usuario muy corto'
            document.getElementById('2').placeholder = 'Contraseña muy corta'
            setTimeout(() => {
                document.getElementById('1').placeholder = 'username'
                document.getElementById('2').placeholder = 'password'
            }, 2000)
            return
        }
        setUsers([...users, { username, password}])
        console.log(users)
    }

    const handleClickShow = () => {
        setShow(!show)
    }

    return (
        <div className='container'>
            <form className='container-form'>
                <h1 className='container-form-h1'>Inicia Sesión</h1>
                <div className='container-form-input'>
                    <input className='container-form-input-username' id='1' placeholder='Usuario o correo' type="text" onChange={(e) => { setUsername(e.target.value) }} />
                    <input className='container-form-input-password' id='2' placeholder='Contraseña' type="password" onChange={(e) => { setPassword(e.target.value) }} />
                    
                    <label className='container-form-checkbox'>
                        <input type='checkbox' />
                        Recuérdame
                    </label>

                    <button className='container-form-button' onClick={handleClickAdd} >Inicio</button>
                    <a className="container-form-a" href='formulario.jsx'> ¿Olvidaste tu contraseña?</a>
                </div>
            </form>

            <div className='container-welcometext'>
                <h2 className='container-welcometext-h2'> LLEGASTE AL LUGAR INDICADO</h2>
                <p className='container-welcometext-p'>¡En <span>Rippio</span> cuentas con más de 1000 establecimientos verificados por nuestro personal para elegir!</p>
                <p className='container-welcometext-a'>¿Aún no tienes una cuenta? <a href='formulario.jsx'> <span>¡</span>Registrate<span>!</span></a></p>
            </div>

            <div className='container-sideline'></div>
        </div>
    );
}