import auth from '../../Firebase/FirebaseConfig';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { useEffect } from 'react';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, ,] = useSignInWithGoogle(auth);
    const [signInWithFacebook, , ,] = useSignInWithFacebook(auth);

    useEffect(() => {
        if (googleUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, navigate, from]);

    return (
        <div className='px-5'>
            <GoogleLoginButton onClick={async () => await signInWithGoogle()} />
            <FacebookLoginButton onClick={async () => await signInWithFacebook()} />
        </div>
    );
};

export default SocialLogin;