import React from 'react';
import { CardVerify, SignupOne } from '../../components';
import logojkbros from '/assets/logojkbros.svg'

const PAccount = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            <SignupOne logoSrc={logojkbros} />
            <CardVerify />
        </div>

    );
}

export default PAccount;
