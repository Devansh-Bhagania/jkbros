import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Button } from '../../ui';

const PSignupTwo = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');

    const handlePhoneNumberChange = (e) => {
        const inputPhoneNumber = e.target.value;
        // Validate phone number: must be 10 digits
        if (/^\d{0,10}$/.test(inputPhoneNumber)) {
            setPhoneNumber(inputPhoneNumber);
        }
    };

    const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.value);
    };

    const handleNextClick = () => {
        // Check if both phone number and country code are filled and phone number is 10 digits
        if (phoneNumber && /^\d{10}$/.test(phoneNumber)) {
            // Navigate to /verification
            window.location.href = '/pverification';
        } else {
            // Show an alert if either phone number or country code is not filled, or phone number is not 10 digits
            alert('Please enter a valid 10-digit phone number and select a country code.');
        }
    };


    return (
        <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
            <div className='container sm:p-10 mx-auto md:mb-2 md:mt-2 xl:mx-14 bg-white p-7  rounded-lg md:p-10 h-full w-auto'>
                <h1 className='text-3xl font-extrabold text-textPrimary font-serif mb-4'>Welcome</h1>

                <p className='text-left text-md mb-5 text-black font-semibold'>Movers & Packers account
                    sign-up/login</p>
                <div className='flex '>
                    <select
                        value={selectedCountryCode}
                        onChange={handleCountryCodeChange}
                        className='  bg-gray-5  ml-1 p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6 '
                    >
                        <option value='+91'>+91</option>
                        <option value='+1'>+1</option>
                        {/* Add more country codes as needed */}
                    </select>
                    <input
                        type='number'
                        placeholder='Mobile Number'
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
                    />
                </div>
                <Link to="#">
                    <Button onClick={handleNextClick}>Next</Button>
                </Link>
            </div>
        </div>
    );
};

export default PSignupTwo;
