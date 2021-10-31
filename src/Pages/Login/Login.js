import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
        // .finally(() =>setIsLoading(false))
    }
    return (
        <div className="text-center my-5">
            <h3 className="login-account">Log in to your account</h3>
            <button className="google-sign" onClick={handleGoogleLogin}> <i className="fab fa-google pe-2"></i>Login with Google</button>
        </div>
    );
};

export default Login;