import React from 'react';
import {  PAccountTwo, SignupOne} from '../../components';
import logojkbros from '/assets/logojkbros.svg'

const PAccount = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            <SignupOne logoSrc={logojkbros} /> 
            <PAccountTwo />
        </div>

    );
}

export default PAccount;
