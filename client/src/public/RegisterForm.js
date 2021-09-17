import {useState} from 'react';
import React from 'react';
import Axios from 'axios';
const RegisterForm = () => {

    const [newEmail, setNewEmail] = useState('');
    const [newUser, setNewUser] = useState('');   
    const [newPassword, setNewPassword] = useState('');   

    const submitRegister = () => {       
        Axios.post('http://localhost:3001/user/register', {
            email: newEmail,
            username: newUser,
            password: newPassword,
         }).then(()=>{
             alert('success');
         })
    }

    return (        
        <form method='post' action='http://localhost:3001/user/register' className='loginForm'>
            <h1>Sign Up</h1>
            <label htmlFor="">Email:</label>
            <input name='email' id='email' required='required' type="text" placeholder='user@mail.com' onChange={(e)=>{
                setNewEmail(e.target.value);                
            }}  />
            <label htmlFor="">Username:</label>
            <input name='username' id='username' required='required' type="text" placeholder='Username'  onChange={(e)=>{
                setNewUser(e.target.value);                
            }}  />
            <label htmlFor="">Password:</label>
            <input name='password' id='password' required='required' type="password" placeholder='Password' onChange={(e)=>{
                setNewPassword(e.target.value);                
            }}  />
            <button onClick={submitRegister} className="regButton" type="submit">Register</button>
        </form >
    )
}
export default RegisterForm
