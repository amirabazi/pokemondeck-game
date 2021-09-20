import { useState } from 'react';
import React from 'react';
import Axios from 'axios';

const RegisterForm = () => {

    const [newEmail, setNewEmail] = useState('');
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const submitRegister = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/user/register', {
            email: newEmail,
            username: newUser,
            password: newPassword,
        }).then((res) => {
            console.log(res.data);
            if(res.data==='korisnik vec postoji'){
                alert('korisnik vec postoji!');
            }else{
            document.location.href = '/login';
            alert('ur registred');
            }
        }).catch((error) => {
            console.log(error)
            alert('error');
        });
    }

    return (
        <form onSubmit={submitRegister} method='post' action='http://localhost:3001/user/register' className='loginForm'>
            <h1>Sign Up</h1>
            <label htmlFor="">Email:</label>
            <input name='email' id='email' required='required' type="text" placeholder='user@mail.com' onChange={(e) => {
                setNewEmail(e.target.value);
            }} />
            <label htmlFor="">Username:</label>
            <input name='username' id='username' required='required' type="text" placeholder='Username' onChange={(e) => {
                setNewUser(e.target.value);
            }} />
            <label htmlFor="">Password:</label>
            <input name='password' id='password' required='required' type="password" placeholder='Password' onChange={(e) => {
                setNewPassword(e.target.value);
            }} />
            <button className="regButton" type="submit">Register</button>
        </form>
    )
}
export default RegisterForm
