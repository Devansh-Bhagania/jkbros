import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui';

const PVerificationTwo = () => {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
            // Focus on the previous input box on backspace if the current box is empty
            inputRefs.current[index - 1].focus();
        }
    };

    const handleResendClick = () => {
        // Add logic for handling "Resend OTP" button click
    };

    const isAllFieldsFilled = otp.every(value => value !== '');

    return (
        <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
            <div className='container sm:p-10 mx-auto md:mb-2 md:mt-2 xl:mx-14 bg-white p-7  rounded-lg md:p-10 h-full w-auto'>
                <h1 className=' text-textPrimary mb-10 font-playfair text-2xl'>Verification</h1>
                <div className='flex justify-between '>
                    <h4 className='mb-1 font-semibold'>+91 99999 99999</h4>
                    <Link to="/change-number" className='text-sm no-underline text-blue-500 hover:text-blue-700 focus:outline-none'>
                        Change
                    </Link>
                </div>

                <p className='text-left text-sm mb-12 lg:mb-1 text-zinc-400'>
                    One Time Password (OTP) has been sent to this number.
                </p>
                <div className='flex mb-1 lg:p-5 xl:p-10 gap-1 sm:gap-3 justify-center'>
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type='text'
                            placeholder='_'
                            maxLength='1'
                            value={value}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className='flex-1 text-center bg-gray-4  ml-1 w-1  h-auto p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
                        />
                    ))}
                </div>

                <div className='flex justify-between  '>
                    <button
                        onClick={handleResendClick}
                        className='text-sm -mt-5 md:mb-9 text-blue-500 hover:text-blue-700 focus:outline-none '
                    >
                        Resend OTP
                    </button>
                </div>
                <div>
                    {/* Use Link to navigate to /paccount when all fields are filled */}
                    {isAllFieldsFilled ? (
                        <Link to="/emailscreen">
                            <Button>Submit</Button>
                        </Link>
                    ) : (
                        <Button disabled>Submit</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PVerificationTwo;
