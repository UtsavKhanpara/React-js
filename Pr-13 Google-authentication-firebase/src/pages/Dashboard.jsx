import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = async () => {
        try {
            await signOut(auth);
            alert('Logout SuccessFully...');
            navigate('/');
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <div align="center">
            <h1>Dashboard</h1>
            <button onClick={() => logout()}>LogOut</button>    
        </div>
    )
}

export default Dashboard