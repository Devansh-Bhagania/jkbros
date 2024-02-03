import React, { useState } from 'react';
import cameraIcon from '/assets/camera.svg'; 
import { Link } from 'react-router-dom'; 

const PAccountTwo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState({
        day: '',
        month: '',
        year: '',
    });
    const [purpose, setPurpose] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);

    

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleBirthdateChange = (field, value) => {
        setBirthdate((prevBirthdate) => ({
            ...prevBirthdate,
            [field]: value,
        }));
    };

    const handlePurposeChange = (e) => {
        setPurpose(e.target.value);
    };

    const handleProfilePhotoChange = (e) => {
        const file = e.target.files[0];
        setProfilePhoto(file);
    };

    const handleSubmit = () => {
        // Add logic to handle form submission
        // You can access the values of name, email, birthdate, purpose, and profilePhoto here
    };

    const isAllFieldsFilled = name !== '' && email !== '' && birthdate.day !== '' && birthdate.month !== '' && birthdate.year !== '' && purpose !== '' && profilePhoto;

    return (
        <div className='flex-1 md:bg-gray-200 bg-white md:p-11 pt-1'>
            <div className='container sm:p-10 mx-auto md:mb-2 md:mt-2 xl:mx-14 bg-white p-7  rounded-lg md:p-10 h-full w-auto'>
                <h1 className='text-3xl font-extrabold text-textPrimary font-serif mb-10'>Account Details</h1>

                {/* Profile Photo Input */}
                <div className='mb-4 relative'>
                    <label htmlFor='profilePhoto' className='text-sm  text-gray-700'>
                        Profile Photo
                    </label>
                    <div className='relative '>
                        <input
                            type='file'
                            id='profilePhoto'
                            accept='image/*'
                            onChange={handleProfilePhotoChange}
                            className='absolute opacity-0 h-0 w-0 '
                        />
                        <div className='flex items-center  cursor-pointer border-2 border-[#D8E3FF] justify-center bg-gray-5 w-12 h-12 rounded-xl overflow-hidden'>
                            {profilePhoto ? (
                                <img src={URL.createObjectURL(profilePhoto)} alt='Profile' className='w-full h-full object-cover' />
                            ) : (
                                <img src={cameraIcon} alt='Camera' className='w-6 h-6' />
                            )}
                        </div>
                    </div>
                </div>

                {/* Other Input Fields */}
                <div className='mb-4'>
                    <input
                        type='text'
                        id='name'
                        placeholder='Enter your name'
                        value={name}
                        onChange={handleNameChange}
                        className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
                    />

                    <input
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={handleEmailChange}
                        className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
                    />
                    <div className='birthdate-label'>
                        <label className='label-text text-sm text-gray-700'>Birthdate</label>
                    </div>
                    <div className='flex mb-2'>
                        <div className='flex  gap-3 small-input-container'>
                            <input
                                type='text'
                                placeholder='DD'
                                value={birthdate.day}
                                onChange={(e) => handleBirthdateChange('day', e.target.value)}
                                className='flex-1  bg-gray-5  ml-1 w-full h-12 p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
                            />
                            <input
                                type='text'
                                placeholder='MM'
                                value={birthdate.month}
                                onChange={(e) => handleBirthdateChange('month', e.target.value)}
                                className='flex-1  bg-gray-5  ml-1 w-full h-12 p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
                            />
                            <input
                                type='text'
                                placeholder='YYYY'
                                value={birthdate.year}
                                onChange={(e) => handleBirthdateChange('year', e.target.value)}
                                className='flex-1  bg-gray-5 ml-1 w-full p-2 h-12 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
                            />
                        </div>
                    </div>

                    <label htmlFor='purpose' className='label-text text-sm text-gray-700'>
                        I'm here for...
                    </label>
                    <select
                        id='purpose'
                        value={purpose}
                        onChange={handlePurposeChange}
                        className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-sm mb-4'
                    >
                        <option value=''>Select</option>
                        <option value='delivery'>Delivery</option>
                        <option value='other'>Other services</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <Link to="/accountscreen">
                    <button
                        onClick={handleSubmit}
                        className={`bg-${isAllFieldsFilled ? 'primary' : 'blue-100'} rounded-xl px-1 md:px-2 text-white w-full p-2 hover:bg-${isAllFieldsFilled ? 'blue-500' : 'blue-100'} ${isAllFieldsFilled ? '' : 'cursor-not-allowed'}`}
                        disabled={!isAllFieldsFilled}
                    >
                        Submit
                    </button>
                </Link>
             
            </div>
        </div>
    );
};

export default PAccountTwo;
