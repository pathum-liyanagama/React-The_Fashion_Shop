import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signinpage.styles.scss';

const SignInPage = () => (
    <div className="signinpage">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInPage;
