import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

const LoginForm = () => {      
    
    const [newLoginUser, setNewLoginUser] = useState('');
    const [newLoginPassword, setNewLoginPassword] = useState('');

    const submitLogin = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/user/login', {            
            username: newLoginUser,
            password: newLoginPassword,
        }).then((res) => {
            console.log(res.data);
            if(res.data==='uspjesna prijava'){
                alert('uspjesna prijava');
                document.location.href='/';
            }else if(res.data==='nije tacna sifra'){
                alert('sifra nije tacna');
            }else{
                alert('ovaj korisnik ne postoji');
            }
        }).catch((error) => {
            console.log(error)
            alert('error');
        });
    }

    return (    
        <form onSubmit={submitLogin} method='post' action='' className='loginForm'>
            <h1>Log In </h1>            
            <label htmlFor="">Username:</label>
            <input name='usernameLogin' id='username' required='required' type="text" placeholder='Username' onChange={(e) => {
                setNewLoginUser(e.target.value);
            }} />
            <label htmlFor="">Password:</label>
            <input name='passwordPassword' id='password' required='required' type="password" placeholder='Password' onChange={(e) => {
                setNewLoginPassword(e.target.value);
            }} />
            <button className="regButton" type="submit">Log in</button>
        </form >
    )
}
export default LoginForm
