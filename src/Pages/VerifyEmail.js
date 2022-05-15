import React, {
    useEffect,
    // useState
} from 'react';
import { AiOutlineMail } from "react-icons/ai";
import auth from '../Firebase/FirebaseConfig';
import {
    useAuthState,
    useSendEmailVerification
} from 'react-firebase-hooks/auth';
import Spinner from '../components/Common/Spinner';
import UseNotify from '../Hooks/useNotify';
import { useLocation, useNavigate } from 'react-router-dom';
// import { sendSignInLinkToEmail } from "firebase/auth";
// import actionCodeSettings from '../Firebase/FirebaseAction';

const VerifyEmail = () => {
    const [user, ,] = useAuthState(auth);

    const [sendEmailVerification, sending,] = useSendEmailVerification(auth);
    const { notifySuccess,
        notifyError
    } = UseNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.dir(user)
        if (user) {
            if (user.emailVerified) {
                navigate(from, { replace: true });
            }
        }
    }, [user, from, navigate])

    if (sending) {
        return <Spinner />
    }
    // if (loading) {
    //     return <Spinner />
    // }

    // const sendLink = async () => {
    //     setLoading(true);
    //     try {
    //         console.log(user);
    //         if (user) {
    //             await sendSignInLinkToEmail(auth, user.email, actionCodeSettings)
    //                 .then(() => {
    //                     setLoading(false);
    //                     notifySuccess('A link has been sent to your email')
    //                     // The link was successfully sent. Inform the user.
    //                     // Save the email locally so you don't need to ask the user for it again
    //                     // if they open the link on the same device.
    //                     window.localStorage.setItem('emailForSignIn', user.email);
    //                     // ...
    //                 })
    //                 .catch((error) => {
    //                     console.dir(error)
    //                     // const errorCode = error.code;
    //                     // const errorMessage = error.message;
    //                     // ...
    //                 });
    //         } else {
    //             notifyError('your are not signed in');
    //             setLoading(false);
    //         }
    //     } finally {
    //         // console.log('nothing');
    //     }
    // }

    return (
        <div className='w-full p-2 border flex flex-col h-[90vh] justify-center items-center'>
            <div className='p-10 shadow-xl'>
                <div className='text-left mr-auto'><AiOutlineMail className='text-6xl text-sky-600' /></div>
                <div>
                    <h1 className='font-bold text-xl mt-4'>Verify its you.</h1>
                    <h2 className='my-4 font-semibold text-lg'>Hi there!</h2>
                    <small>Thank you for signing up for Doctors Portal, to get started, we need to verify your email address.</small>
                    <small className='block'>To activate your account, please click the button below to very your email address:</small>
                    <small>If you are not getting email within 30 minutes, check your email is correct or not.</small>
                </div>
                <div>
                    <button
                        className='bg-accent hover:bg-secondary text-white px-10 py-2 my-5 rounded'
                        onClick={async () => {
                            // await sendLink()
                            await sendEmailVerification()
                            if (user) {
                                notifySuccess('A verification link has been sent to your email')
                            } else {
                                notifyError('Sorry! You are not logged in')
                            }
                        }}>
                        Very Your Email Address
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;