import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth.js'

const LoginForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='container' style={{maxWidth: "500px"}}>
            <form onSubmit={handleFormSubmit}>
                <div className='form-group'>
                    <label for='usernameInput'>Username</label>
                    <input
                        type={'text'}
                        className='form-control'
                        id='usernameInput'
                        name='username'
                        placeholder='Username'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label for='passwordInput'>Password</label>
                    <input
                        type={'password'}
                        className='form-control'
                        id='passwordInput'
                        name='password'
                        placeholder='********'
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <button type={'submit'} className='btn btn-primary'>Submit</button>
                <Link to="/signup">Don't have an account? Sign up now!</Link>
            </form>
        </div>
    )
}

export default LoginForm;