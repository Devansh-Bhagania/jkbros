import React from 'react'

import logojkbros from '/assets/logojkbros.svg'
import {  SignupOne, PVerificationTwo} from '../../components'

const VerificationScreen = () => {
    return (

        <div className='flex md:flex-row flex-col'>

            <SignupOne logoSrc={logojkbros} />
            <PVerificationTwo />


        </div>

    )
}

export default VerificationScreen