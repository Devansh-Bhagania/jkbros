import React from 'react';
import { Calendar, Footer, OrderRequest, PackersNav, Reviews } from '../../components';
import logojkbros from '/assets/logojkbros.svg';

const OrderDetails = () => {
    return (
        <div className='flex flex-col overflow-hidden'>
            <PackersNav />
            <Calendar/>
            <p className='lg:mx-24 mx-auto md:mx-2 mt-4 mb-2 text-sm  text-gray-500'>Order Request</p>
            <div className='flex md:mx-4 md:justify-between lg:justify-start  lg:mx-24  flex-wrap  md:gap-y-3 md:gap-x-4 md:flex-row flex-col mb-5'>
                
                <OrderRequest />
                 <OrderRequest /> 
                {/* <OrderRequest />
                <OrderRequest />
                <OrderRequest />
                <OrderRequest />  */}
            </div>
            <Footer />
        </div>
    );
}

export default OrderDetails;
