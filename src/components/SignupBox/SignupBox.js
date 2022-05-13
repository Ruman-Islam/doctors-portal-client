import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineUser, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignupBox = ({ createUserWithEmailAndPassword, updateProfile }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'onTouched'
    });

    //    check password event 
    const password = watch('password');

    // handle password eye
    const [passwordEye, setPasswordEye] = useState(false);

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye);
    };

    // handle confirm password eye
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye);
    };

    // handle submit 
    const onSubmit = async (data) => {
        const displayName = data.username;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName })
    };


    return (
        <div>
            <h1 className='text-left underline text-2xl my-2 ml-5 font-semibold text-accent'>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col p-5 py-1'>
                <>
                    <div className='flex justify-center items-center'>
                        <div className='border p-4'>
                            <AiOutlineUser />
                        </div>
                        <input
                            className='border border-l-0 w-full p-3 text-md my-2 outline-0'
                            type="text"
                            placeholder='Username'
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: 'Username is Required'
                                }
                            })} />
                    </div>
                    <label className='text-red-500 text-xs'>
                        {errors.username?.type === 'required' && errors.username?.message}
                    </label>
                </>
                <>
                    <div className='flex justify-center items-center'>
                        <div className='border p-4'>
                            <AiOutlineMail />
                        </div>
                        <input
                            className='border border-l-0 w-full p-3 text-md my-2 outline-0'
                            type="email"
                            placeholder='Email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide valid email'
                                }
                            })} />
                    </div>
                    <label className='text-red-500 text-xs'>
                        {errors.email && errors.email?.message}
                    </label>
                </>
                <>
                    <div className='flex justify-center items-center relative'>
                        <div className='border p-4'>
                            <AiOutlineUnlock />
                        </div>
                        <input
                            className='border border-l-0 w-full p-3 text-md my-2 outline-0'
                            type={passwordEye === false ? "password" : "text"}
                            placeholder='Password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be characters or longer'
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
                                    message: 'At least one letter, one number and one special character'
                                }
                            })} />
                        {/* eye section */}
                        <div className="text-xl absolute top-6 right-5">
                            {passwordEye === false ? (
                                <AiFillEyeInvisible onClick={handlePasswordClick} />
                            ) : (
                                <AiFillEye onClick={handlePasswordClick} />
                            )}
                        </div>
                    </div>
                    <label
                        className='text-red-500 text-xs'>
                        {errors.password && errors.password?.message}
                    </label>
                </>
                <>
                    <div className='flex justify-center items-center relative'>
                        <div className='border p-4'>
                            <AiOutlineUnlock />
                        </div>
                        <input
                            className='border border-l-0 w-full p-3 text-md my-2 outline-0'
                            type={confirmPasswordEye === false ? "password" : "text"}
                            placeholder='Confirm password'
                            {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: 'Confirm password is Required'
                                },
                                validate: (value) =>
                                    value === password || "The passwords do not match",
                            })} />
                        {/* eye section */}
                        <div className="text-xl absolute top-6 right-5">
                            {confirmPasswordEye === false ? (
                                <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                            ) : (
                                <AiFillEye onClick={handleConfirmPasswordClick} />
                            )}
                        </div>
                    </div>
                    <label
                        className='text-red-500 text-xs'>
                        {errors.confirmPassword && errors.confirmPassword?.message}
                    </label>
                </>
                <input
                    className='border py-1 mt-5 cursor-pointer rounded-md
                  hover:bg-secondary text-white font-bold bg-accent duration-300'
                    type="submit" value="Create" />
            </form>
            <small className='text-slate-500 flex justify-center'>
                Already have an account?
                <span
                    onClick={() => navigate('/login')}
                    className='primary-color cursor-pointer'>
                    <span className='ml-1 text-blue-600'>Login</span>
                </span>
            </small>
        </div>
    );
};

export default SignupBox;