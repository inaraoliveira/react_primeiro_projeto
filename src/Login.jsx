import React from 'react';
import './Login.css'

export default function Login(){
    var alerta = () => {
        alert('Ocorreu um erro, tente novamente mais tarde.')
    }

    return (
        <div>
            <div className='container'>
                <h1>Login</h1>
                <form className='formulario'>
                    <div className='usuario'>
                        <input type="text" name='usuario' id='usuario' placeholder='Usuário'/>
                    </div>

                    <div className='senha'>
                        <input type="password" name='senha' id='senha' placeholder='Senha'/>
                    </div>

                    <button id='botao' onClick={() => alerta()}>LOGIN</button>
                    <p>Esqueceu sua senha? <a href="">Clique aqui.</a></p>
                </form>
            </div>
        </div>
    );
}