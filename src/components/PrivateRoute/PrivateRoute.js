import React, { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/FirebaseConfig';
import Spinner from '../Common/Spinner';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [user, loading,] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.dir(user)
            if (!user.emailVerified) {
                navigate('/verify-email');
            }
        }
    }, [user, navigate])

    if (loading) { // Preventing redirecting to login page //
        return <Spinner />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
};

export default PrivateRoute;