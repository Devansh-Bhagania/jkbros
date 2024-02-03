import React from 'react';
import { AccountOne, EmailVerify, SignupOne } from '../../components';
import logojkbros from '/assets/logojkbros.svg'

const EmailScreen = () => {
    return (

        <div className='flex md:flex-row flex-col'>
            <SignupOne logoSrc={logojkbros} />
            <EmailVerify />
        </div>

    );
}

export default EmailScreen;
