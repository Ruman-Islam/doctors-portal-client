import React from 'react';
import auth from '../Firebase/FirebaseConfig';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../components/Common/Spinner';
import { useEffect } from 'react';
import UseNotify from '../Hooks/useNotify';
import SignupBox from '../components/SignupBox/SignupBox';
import SocialLogin from '../components/SocialLogin/SocialLogin';

const Signup = () => {
    const { notifyError } = UseNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) notifyError(error.message.split('/')[1].split(')')[0])
    }, [error, notifyError]);

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='flex flex-col justify-center items-center h-[100vh] border'>
            <div>
                <div className="flex flex-col border-opacity-50 shadow-lg border py-4 rounded-lg w-80 md:w-96">
                    <SignupBox
                        createUserWithEmailAndPassword={createUserWithEmailAndPassword} />
                    <div className="divider">OR</div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Signup;