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
    const [addUser] = useMutation(ADD_USER);

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
        <div className='container' style={{maxWidth: "500px"}}>
            <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <div className='form-group'>
                    <label for='usernameSignup'>Username</label>
                    <input
                        type={'text'}
                        className='form-control'
                        id='usernameSignup'
                        name='username'
                        placeholder='Username'
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label for='passwordSignup'>Password</label>
                    <input
                        type={'password'}
                        className='form-control'
                        id='passwordSignup'
                        name='password'
                        placeholder='********'
                        onChange={handleChange}
                    />
                </div>
                <button type={'submit'} className='btn btn-primary'>Submit</button>
                <Link to="/login">Already have an account? Login now!</Link>
            </form>
        </div>
    )
}

export default SignupForm;