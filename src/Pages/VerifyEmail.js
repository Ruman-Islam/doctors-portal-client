import React, { useEffect } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import auth from '../Firebase/FirebaseConfig';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Spinner from '../components/Common/Spinner';
import UseNotify from '../Hooks/useNotify';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import actionCodeSettings from '../Firebase/FirebaseAction';

const VerifyEmail = () => {
    const [user, ,] = useAuthState(auth);
    const [sendEmailVerification, sending,] = useSendEmailVerification(auth);
    const { notifySuccess } = UseNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        // if (user) {
        //     console.dir(user)
        //     if (user.emailVerified) {
        //         navigate(from, { replace: true });
        //     }
        // }
    }, [user, from, navigate])

    if (sending) {
        return <Spinner />
    }

    const sendLink = async () => {
        console.log(actionCodeSettings);
        await sendSignInLinkToEmail(auth, user.email, actionCodeSettings)
            .then(() => {
                alert('successfull');
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', user.email);
                // ...
            })
            .catch((error) => {
                console.dir(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
            });
    }

    return (
        <div className='w-full p-2 border flex flex-col min-h-screen justify-center items-center'>
            <div>
                <div className='text-left mr-auto'><AiOutlineMail className='text-6xl text-sky-600' /></div>
                <div>
                    <h1 className='font-bold text-xl mt-4'>Verify its you.</h1>
                    <h2 className='my-5 font-semibold text-lg'>Hi there!</h2>
                    <p>Thank you for signing up for Doctors Portal, to get started, we need to verify your email address.</p>
                    <p>To activate your account, please click the button below to very your email address:</p>
                </div>
                <div>
                    <button
                        className='bg-accent hover:bg-secondary text-white px-10 py-2 mt-2 rounded'
                        onClick={async () => {
                            sendLink()
                        }}>
                        Very Your Email Address
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;