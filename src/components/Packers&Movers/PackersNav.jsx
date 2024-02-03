import React from 'react';
import { NavLink } from 'react-router-dom';
import jkbLogo from '/assets/logojkbros.svg';
import homeIcon from '/assets/homeicon.svg';
import earningsIcon from '/assets/walleticon.svg';
import profileIcon from '/assets/profileicon.svg';
import ordersIcon from '/assets/ordericon.svg';

const PackersNav = () => {
    return (
        <div className='w-[100svw] h-[10svh] flex bg-[#F5F7FE] border-b-2 border-outline'>
            <div className='w-[50svw] flex items-center justify-start md:ml-5'>
                <NavLink to="/">
                    <img
                        src={jkbLogo}
                        className='md:w-[5rem] w-[4rem] ml-[1rem] md:ml-[5rem] lg:ml-[8rem]'
                        alt='Logo'
                    />
                </NavLink>
            </div>

            <div className='w-[150svw] lg:w-[50svw] flex items-center justify-center'>
                <div className='flex gap-x-4 lg:gap-x-8 items-center text-textPrimary font-semibold'>
                    <NavLink
                        to="/tracking"
                        className='text-sm flex items-center'
                        activeClassName='border-b-2 border-blue-500'
                    >
                        <img src={homeIcon} alt="Home Icon" className="w-4 h-4 mr-1" />
                        Home
                    </NavLink>
                    <NavLink
                        to="/orders"
                        className='text-sm flex items-center'
                        activeClassName='border-b-2 border-blue-500'
                    >
                        <img src={ordersIcon} alt="Orders Icon" className="w-4 h-4 mr-1" />
                        Orders
                    </NavLink>
                    <NavLink
                        to="/earnings"
                        className='text-sm flex items-center'
                        activeClassName='border-b-2 border-blue-500'
                    >
                        <img src={earningsIcon} alt="Earnings Icon" className="w-4 h-4 mr-1" />
                        Earnings
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className='text-sm flex items-center'
                        activeClassName='border-b-2 border-blue-500'
                    >
                        <img src={profileIcon} alt="Profile Icon" className="w-4 h-4 mr-1" />
                        Profile
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PackersNav;
