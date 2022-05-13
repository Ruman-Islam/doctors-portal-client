import LoginBox from '../components/LoginBox/LoginBox';
import SocialLogin from '../components/SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/FirebaseConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../components/Common/Spinner';
import { useEffect } from 'react';
import UseNotify from '../Hooks/useNotify';

const Login = () => {
    const { notifyError } = UseNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user, loading, error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) notifyError(error.message.split('/')[1].split(')')[0])
        if (user) navigate(from, { replace: true });
    }, [user, error, loading, from, notifyError, navigate]);

    if (loading) {
        return <Spinner />
    };

    return (
        <div className='flex flex-col justify-center items-center h-[90vh] border'>
            <div>
                <div className="flex flex-col border-opacity-50 shadow-lg border py-8 rounded-lg w-80 md:w-96">
                    <LoginBox
                        signInWithEmailAndPassword={signInWithEmailAndPassword} />
                    <div className="divider w-64 mx-auto"><small>OR</small></div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;