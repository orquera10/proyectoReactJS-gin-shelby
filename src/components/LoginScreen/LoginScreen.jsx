import React, { useState } from "react";
import "./LoginScreen.css"

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const url = 'http://localhost:8081/api/users/login';

        // Construye el cuerpo de la petición
        const body = { 'email': `${email}`, 'password': `${password}` };
        console.log(body);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="text-center bodyyy d-flex flex-column">
            <h1 className="h3 mb-3 fw-normal">Inicia sesión</h1>
            <div className="d-flex flex-column w-100 m-auto form-signin">
                <div>
                    <a href="/api/users/github"><button className="btn btn-ligth px-5 border border-dark w-100 my-2"><i
                        className="bi bi-github me-2"></i>Github</button></a>
                </div>
                <div>
                    <a href="/api/users/google"><button className="btn btn-ligth px-5 border border-dark w-100 my-2"><i
                        className="bi bi-google me-2"></i>Google</button></a>
                </div>
                <div>
                    <a href="/api/users/facebook"><button className="btn btn-ligth px-5 border border-dark w-100 my-2"><i
                        className="bi bi-facebook me-2"></i>Facebook</button></a>
                </div>
            </div>
            <div className="form-signin w-100 m-auto mainnn">
                <div className="separador m-0 mb-3"></div>
                <form id="loginForm" onSubmit={handleSubmit}>

                    <div className="form-floating">
                        <input name="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmailChange}></input>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange}></input>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <p>¿No estás registrado? <a href="/register">Regístrate aquí</a></p>
                        </label>
                    </div>
                    <input className="w-100 btn btn-lg btn-primary" type="submit" value="Inicia sesión"></input>
                    <div className="mt-4">
                        <a href="/link-password">¿Haz olvidado tu contraseña?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen;