import React from 'react';

import './signin_and_signup.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = ()=>(
    <div className='sign-in_and_sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUp;