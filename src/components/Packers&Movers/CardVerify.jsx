import React, { useState } from 'react';
import arrow from '/assets/arrow.svg';

const CardVerify = () => {
    const [aadharCard, setAadharCard] = useState(null);
    const [panCard, setPanCard] = useState(null);

    const handleAadharCardChange = (e) => {
        const file = e.target.files[0];
        setAadharCard(file);
    };

    const handlePanCardChange = (e) => {
        const file = e.target.files[0];
        setPanCard(file);
    };

    const handleSubmit = () => {
        // Add logic to handle form submission
        // You can access the values of aadharCard and panCard here
    };

    const isAllFieldsFilled = aadharCard && panCard;

    return (
        <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
            <div className='container sm:p-10 mx-auto md:mb-2 md:mt-2 xl:mx-14 bg-white p-7  rounded-lg md:p-10 h-full w-auto'>
                <h1 className='text-3xl font-extrabold text-textPrimary font-serif mb-10'>Verify Identity</h1>

                {/* Aadhar Card Upload */}
                <div className='mb-4 relative'>
                    <label htmlFor='aadharCard' className='text-sm  text-gray-500'>
                        Upload Aadhar Card
                    </label>
                    <div className='relative cursor-pointer'>
                        <input
                            type='file'
                            id='aadharCard'
                            accept='image/*'
                            onChange={handleAadharCardChange}
                            className='absolute opacity-0 h-0 w-0'
                        />
                        <div className='flex  text-sm text-gray-500  items-center justify-between bg-gray-5 w-full p-2 border-2 border-[#D8E3FF] rounded-xl'>
                            <span>{aadharCard ? aadharCard.name : 'Choose from device'}</span>
                            <img src={arrow} alt='Camera' className='w-3 h-3' />
                        </div>
                    </div>
                </div>

                {/* Pan Card Upload */}
                <div className='mb-4 relative'>
                    <label htmlFor='panCard' className='text-sm text-gray-500'>
                        Upload Pan Card
                    </label>
                    <div className='relative cursor-pointer '>
                        <input
                            type='file'
                            id='panCard'
                            accept='image/*'
                            onChange={handlePanCardChange}
                            className='absolute opacity-0 h-0 w-0 '
                        />
                        <div className='flex items-center  text-sm text-gray-500 justify-between bg-gray-5 w-full p-2 border-2 border-[#D8E3FF] rounded-xl'>
                            <span>{panCard ? panCard.name : 'Choose from device'}</span>
                            <img src={arrow} alt='Camera' className='w-3 h-3' />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className={`bg-${isAllFieldsFilled ? 'primary' : 'blue-100'} rounded-xl px-1 md:px-2 text-white w-full p-2 hover:bg-${isAllFieldsFilled ? 'blue-500' : 'blue-100'} ${isAllFieldsFilled ? '' : 'cursor-not-allowed'}`}
                    disabled={!isAllFieldsFilled}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CardVerify;
