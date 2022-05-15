import React from 'react';
import auth from '../Firebase/FirebaseConfig';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
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
    const [updateProfile, ,] = useUpdateProfile(auth);

    useEffect(() => {
        if (error) notifyError(error.message.split('/')[1].split(')')[0]);
        if (user) {
            if (!user.user?.emailVerified) {
                navigate('/verify-email')
            } else {
                navigate(from, { replace: true });
            }
        }
    }, [user, error, from, notifyError, navigate]);

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='flex flex-col justify-center items-center my-20 md:my-0 md:h-[95vh] 2xl:h-[90vh]'>
            <div>
                <div className="flex flex-col border-opacity-50 shadow-lg border py-4 rounded-lg w-80 md:w-96">
                    <SignupBox
                        createUserWithEmailAndPassword={createUserWithEmailAndPassword}
                        updateProfile={updateProfile} />
                    <div className="divider w-64 mx-auto"><small>OR</small></div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Signup;