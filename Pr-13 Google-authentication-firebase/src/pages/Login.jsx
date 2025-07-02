import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleAuthProvider } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    return (
        <div className='container' align="center">
            <div className="login-box">
                <h1>Sign in with Google in React</h1>
                <img onClick={() => handleSubmit()} src="./public/google.webp" alt="google.webp" width={'100%'} />
            </div>
        </div>
    )
}

export default Login