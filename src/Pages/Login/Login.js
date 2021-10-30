import React from 'react';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h3>Log in to your account</h3>
            <button onClick={signInUsingGoogle}>Login with Google</button>
        </div>
    );
};

export default Login;