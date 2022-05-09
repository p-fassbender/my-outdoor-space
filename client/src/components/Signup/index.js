import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js'

const SignupForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='card m-4' style={{maxWidth: "600px"}}>        
                <div>
                    <h2 className='card-header text-center'>Signup</h2>
                    <form onSubmit={handleFormSubmit} className="m-3">
                        <div className='form-group mb-2'>
                            <label htmlFor='usernameSignup'>Username</label>
                            <input
                                type={'text'}
                                className='form-control'
                                id='usernameSignup'
                                name='username'
                                placeholder='Username'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='passwordSignup'>Password</label>
                            <input
                                type={'password'}
                                className='form-control'
                                id='passwordSignup'
                                name='password'
                                placeholder='********'
                                onChange={handleChange}
                            />
                        </div>
                        {error ? (
                            <div>
                                <p className="error-text">Both a username and password are required</p>
                            </div>
                        ) : null}
                        <button type={'submit'} className='btn btn-primary'>Submit</button>
                        <Link to="/login"> Already have an account? Login now!</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;