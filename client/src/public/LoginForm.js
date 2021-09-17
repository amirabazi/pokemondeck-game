import React from 'react';

const LoginForm = () => {  

    return (        
        <form method='post' action='' className='loginForm'>
            <h1>Log In </h1>            
            <label htmlFor="">Username:</label>
            <input name='username' id='username' required='required' type="text" placeholder='Username' />
            <label htmlFor="">Password:</label>
            <input name='password' id='password' required='required' type="password" placeholder='Password' />
            <button className="regButton" type="submit">Log in</button>
        </form >
    )
}
export default LoginForm
