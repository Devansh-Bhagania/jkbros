import React, { useState } from 'react';
import { Calendar, Footer, OrderRequest, PackersNav, ProgressButton } from '../../components';

const OrderDetails = () => {
    const [selectedTab, setSelectedTab] = useState('All');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        // Add logic to handle click, update data, etc.
    };

    return (
        <div className='flex flex-col overflow-hidden'>
            <PackersNav />

            <div className='flex justify-start mb-2  mx-auto md:mx-12  mt-5 space-x-4'>
                <TabButton
                    tab="All"
                    count={2} 
                    selected={selectedTab === 'All'}
                    onClick={() => handleTabClick('All')}
                />
                <TabButton
                    tab="Accepted"
                    count={0} 
                    selected={selectedTab === 'Accepted'}
                    onClick={() => handleTabClick('Accepted')}
                />
                <TabButton
                    tab="Assigned"
                    count={0} 
                    selected={selectedTab === 'Assigned'}
                    onClick={() => handleTabClick('Assigned')}
                />
                <TabButton
                    tab="Completed"
                    count={0} 
                    selected={selectedTab === 'Completed'}
                    onClick={() => handleTabClick('Completed')}
                />
            </div>

            

            <div className='flex  mx-auto md:mx-7 lg:mx-12  gap-y-2 flex-wrap gap-2 md:flex-row lg:flex-col flex-col mb-5'>
                <div className='section mt-7'>
                    <p className='mb-2 text-sm  text-left text-gray-500'>Ongoing</p>
                    <div className='flex flex-col md:flex-row md:flex-wrap md:gap-2'>
                        <ProgressButton />
                       
                        
                    </div>
                </div>
                
                <div className='section mt-7 '>
                    <p className='mb-2 text-sm text-left text-gray-500'>Accepted</p>
                    <div className='flex flex-col md:flex-row md:flex-wrap md:gap-7'>
                        <OrderRequest />
                        <OrderRequest />
                        <OrderRequest />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

const TabButton = ({ tab, count, selected, onClick }) => {
    return (
        <div
            className={
                `cursor-pointer text-xs text-${selected ? 'blue-500' : 'gray-500'}
                 ${selected ? 'border-b-2 border-blue-500' : ''}`}
            onClick={onClick}
        >
            <span>{tab}</span>
            {count >= 0 && (
                <span className="ml-1 text-xs bg-blue-500 text-white  rounded-full px-2">
                    {count}
                </span>
            )}
        </div>
    );
};

export default OrderDetails;
