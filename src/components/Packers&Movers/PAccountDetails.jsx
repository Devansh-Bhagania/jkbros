import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button, DateInput, Dropdown, Input } from '../../ui';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import cameraIcon from '/assets/camera.svg';
import { Link } from 'react-router-dom'; 

const options = [
    { value: 'option1', display: 'Personal usage' },
    { value: 'option2', display: 'Business usage' },
    { value: 'option3', display: 'Explore' },
    { value: 'option4', display: 'Emergency need' },
];

const professions = [
    { value: 'carpenter', display: 'Carpenter' },
    { value: 'labour', display: 'Labour' },
    // Add more professions as needed
];

const availabilityOptions = [
    { value: 'available', display: 'Available' },
    { value: 'busy', display: 'Busy' },
    { value: 'away', display: 'Away' },
];

const schema = z.object({
    name: z.string().min(3).max(50).optional(),
    email: z.string().email().optional(),
    dob: z.object({
        day: z.string().refine((day) => {
            const numericDay = parseInt(day, 10);
            return numericDay >= 1 && numericDay <= 31;
        }, { message: 'Day should be between 1 and 31' }),
        month: z.string().refine((month) => {
            const numericMonth = parseInt(month, 10);
            return numericMonth >= 1 && numericMonth <= 12;
        }, { message: 'Month should be between 1 and 12' }),
        year: z.string().refine((year) => {
            const numericYear = parseInt(year, 10);
            return numericYear >= 1900 && numericYear <= 2100;
        }, { message: 'Year should be between 1900 and 2100' }),
    }),
    selectedOption: z.string().optional(),
    profession: z.string().optional(),
    location: z.string().optional(),
    aadharCard: z.string().optional(),
    panCard: z.string().optional(),
    availability: z.string().optional(),
});

const PAccountDetails = () => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: 'Dhruvil Jogiwala',
            email: '',
            dob: {
                day: '01',
                month: '01',
                year: '2000',
            },
            selectedOption: 'option1',
            availability: 'available',
        },
    });

    const fileInputRef = useRef(null);

    const handleProfilePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveProfilePhoto = () => {
        setValue('profilePhoto', null); // Assuming profilePhoto is the field name for the profile photo
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='md:w-[80%] px-10'>
            <h1 className='font-playfair text-xl mb-4 text-textPrimary'>Account Details</h1>
            {/* Profile Photo Section */}
            <div className='flex items-center'>
                <div
                    className='w-16 h-15 bg-gray-300 m-y-1 rounded-md overflow-hidden cursor-pointer relative'
                    onClick={handleProfilePhotoClick}
                >
                    {/* Display your profile photo or camera icon here */}
                    {getValues('profilePhoto') ? (
                        <>
                            <img
                                src={getValues('profilePhoto')}
                                alt='Profile'
                                className='w-full p-3 h-full object-cover'
                            />
                            <button
                                className='absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full'
                                onClick={handleRemoveProfilePhoto}
                            >
                                X
                            </button>
                        </>
                    ) : (
                        <img
                            src={cameraIcon}
                            alt='Profile'
                            className='w-full p-3 h-full object-cover'
                        />
                    )}
                </div>
                <input
                    type='file'
                    accept='image/*'
                    className='ml-4 hidden'
                    ref={fileInputRef}
                />
            </div>

            <form
                className='md:pt-6 pt-4 flex flex-col flex-grow'
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Name */}
                <Input type='name' label='Name' register={register} errors={errors} />

              

                {/* BirthDate */}

                <DateInput
                    day={getValues('dob.day', '')}
                    month={getValues('dob.month', '')}
                    year={getValues('dob.year', '')}
                    onDayChange={(value) => setValue('dob.day', value)}
                    onMonthChange={(value) => setValue('dob.month', value)}
                    onYearChange={(value) => setValue('dob.year', value)}
                    getValues={getValues}
                    label='BirthDate'
                    register={register}
                    setValue={setValue}
                    errors={errors}
                    
                    
                />

                {/* Profession Dropdown */}
                <Dropdown
                    options={professions}
                    selectedValue={getValues('profession')}
                    onValueChange={(value) => setValue('profession', value)}
                    placeholder='Select Profession'
                    label='Profession'
                />

                {/* Location */}
                <Input
                    type='text'
                    label='Location'
                    register={register}
                    errors={errors}
                />

                {/* Upload Aadhar Card */}
                <Input
                    type='text'
                    label='Upload Aadhar Card'
                    register={register}
                    errors={errors}
                />

                {/* Upload Pan Card */}
                <Input
                    type='text'
                    label='Upload Pan Card'
                    register={register}
                    errors={errors}
                />

                {/* Availability Status */}
                <Dropdown
                    options={availabilityOptions}
                    selectedValue={getValues('availability')}
                    onValueChange={(value) => setValue('availability', value)}
                    placeholder='Available'
                    label='Availability Status'
                   
                />
                <Link to="/emailverify">
                    <Button variant='primary' type='submit'>
                        Save
                    </Button>
                </Link>
               
                
            </form>
            
        </div>
    );
};

export default PAccountDetails;
