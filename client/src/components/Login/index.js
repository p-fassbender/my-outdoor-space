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
                variables: { username: formState.username, password: formState.password }
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
        console.log(formState)
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='card m-4' style={{minWidth: "600px"}}>
                <div>
                    <h2 className='card-header text-center'>Login</h2>
                    <form onSubmit={handleFormSubmit} className="m-3">
                        <div className='form-group mb-2'>
                            <label htmlFor='usernameInput'>Username</label>
                            <input
                                type={'text'}
                                className='form-control'
                                id='usernameInput'
                                name='username'
                                placeholder='Username'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='passwordInput'>Password</label>
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
                        <Link to="/signup"> Don't have an account? Sign up now!</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;