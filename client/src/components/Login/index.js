import React, { useState } from 'react'

const LoginForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    return (
        <div className='container'>
            <h1>
                LOGIN FOR THE FULL EXPERIENCE, BITCH!
            </h1>
            <form>
                <div className='form-group'>
                    <label for='usernameInput'>Username</label>
                    <input type={'text'} className='form-control' id='usernameInput' placeholder='Enter Username'></input>
                </div>
                <div className='form-group'>
                    <label for='passwordInput'>Password</label>
                    <input type={'password'} className='form-control' id='passwordInput' placeholder='********'></input>
                </div>
                <button type={'submit'} className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;