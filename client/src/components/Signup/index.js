import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth.js'

const SignupForm = () => {
    return (
        <h1>
            SIGN UP FOR AN ACCOUNT SO YOU CAN DO ALL THE THINGS
        </h1>
    )
}

export default SignupForm;