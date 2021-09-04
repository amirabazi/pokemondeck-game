const LoginForm = () => {
    return (
        <form method='get' action='' className='loginForm'>
            <h1>Start your pokemon journey now !</h1>
            <label htmlFor="">Email:</label>
            <input name='email' id='email' type="text" placeholder='user@mail.com' />
            <label htmlFor="">Username:</label>
            <input name='username' id='username' type="text" placeholder='Username' />
            <label htmlFor="">Password:</label>
            <input name='password' id='password' type="password" placeholder='Password' />
            <button className="regButton" type="submit">Register</button>
        </form >
    )
}
export default LoginForm
