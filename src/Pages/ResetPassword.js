import React, { useEffect } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/FirebaseConfig';
import Spinner from '../components/Common/Spinner';
import UseNotify from '../Hooks/useNotify';
import { useForm } from "react-hook-form";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { notifySuccess, notifyError } = UseNotify();
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();



    // handle submit 
    const onSubmit = async (data) => {
        const email = data.email;
        await sendPasswordResetEmail(email)
        notifySuccess('A link has been sent to your email');
    };

    useEffect(() => {
        if (resetError) notifyError(resetError);
    }, [resetError, notifyError]);

    if (sending) {
        return <Spinner />
    }


    return (
        <div className='w-full flex flex-col justify-center items-center h-full mt-36 xl:mt-36 2xl:mt-64'>
            <div className='w-5/6 xl:w-1/4 2xl:w-1/5 rounded-lg shadow-xl h-4/5 md:h-3/5 flex flex-col mx-auto border p-2 2xl:py-10'>
                <div className='px-10'>
                    <h1 className='text-left text-xl mt-2 primary-color font-semibold'>Reset Password</h1>
                    <p className='text-xs text-slate-500 text-justify'>Please enter the email address that you used to register, and we will send you an email with a link to reset your password.</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col p-10 py-4'>
                    <div className='flex justify-center items-center'>
                        <div className='border p-2'>
                            <AiOutlineMail />
                        </div>
                        <input
                            className='border border-l-0 w-full p-2 text-xs  outline-0 ' type="email" placeholder='Email' name="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide valid email'
                                }
                            })}
                        />
                    </div>
                    <label className='text-red-500 text-xs'>
                        {errors.email && errors.email?.message}
                    </label>
                    <input
                        className='bg-accent hover:bg-secondary duration-300 rounded text-white mt-2 py-1 cursor-pointer w-32 mx-auto' type="submit" value="Send code"
                    />
                </form>
            </div>
            <button onClick={() => navigate('/login')}
                className='mt-5 text-md hover:text-blue-800 underline'>
                Return to login
            </button>
        </div>
    );
};

export default ResetPassword;