import React from 'react';
import { Calendar, EarningCards, Footer, LinkAccount, OrderRequest, PackersNav, Reviews } from '../../components';

const Earnings = () => {
    return (
        <div className='flex flex-col overflow-hidden'>
            <PackersNav />
              <div className="flex flex-col md:flex-row ">
                <EarningCards />
                <LinkAccount />
              </div>
              
            <Footer />
        </div>
    );
}

export default Earnings;
