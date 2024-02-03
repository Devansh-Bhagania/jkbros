import React from 'react';
import { PSignupTwo, SignupOne, } from '../../components';
import logojkbros from '/assets/logojkbros.svg'
const PSignUp = () => {
    return (

        <div className='flex md:flex-row flex-col'>
            <SignupOne logoSrc={logojkbros}/>
            <PSignupTwo />
        </div>

    );
}

export default PSignUp;
