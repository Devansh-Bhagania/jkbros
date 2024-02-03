import React, { useState } from 'react';
import LogoGoogle from '/assets/icon--google@2x.png';
import frame from '/assets/Frame.png';

const EmailVerify = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const isEmailValid = /\S+@\S+\.\S+/.test(email);

    const handleNextClick = () => {
        // Add logic to handle the "Next" button click
        if (isEmailValid) {
            // Perform the action when email is valid
        } else {
            // Handle the case when the email is not valid
        }
    };

    const handleGoogleLogin = () => {
        // Add logic to handle Google login
    };

    return (
        <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
            <div className='container sm:p-10 mx-auto md:mb-2 md:mt-2 xl:mx-14 bg-white p-6  rounded-lg md:p-10 h-full w-auto'>
                <h1 className='text-3xl font-extrabold text-textPrimary font-serif mb-10'>Email</h1>
                <div className='flex '>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}
                        className={`flex-1 bg-gray-5 ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6 ${isEmailValid ? 'text-black' : 'text-gray-500'}`}
                    />
                </div>
                <button
                    onClick={handleNextClick}
                    className={`w-full mb-12 md:mb-14 transition duration-300 text-lg rounded-3xl px-1 md:px-2 p-2 ${isEmailValid ? 'bg-primary  text-white hover:bg-blue-500' : 'bg-blue-200 text-white font-semibold cursor-not-allowed'}`}
                    disabled={!isEmailValid}
                >
                    Verify
                </button>
                <img src={frame} className='mx-auto  mt-24 mb-12 md:mb-17' alt="" />
                <button
                    onClick={handleGoogleLogin}
                    className='w-full mt-8 md:-mb-12 bg-gray-50 text-zinc-400 p-2 rounded-3xl flex items-center justify-center hover:bg-gray-200 transition duration-300'
                >
                    <img src={LogoGoogle} className='mr-8 h-6' alt="" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default EmailVerify;
