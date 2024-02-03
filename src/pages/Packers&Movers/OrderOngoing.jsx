import React from 'react'
import { Footer, PackersNav, SignupOne } from '../../components';
import OrderOngoingTwo from '../../components/Packers&Movers/OrderOngoingTwo';
import trackMapDemo from '/assets/trackMapDemo.png'



const Ongoing = () => {
    return (
        <div className='overflow-x-hidden'>
            <PackersNav />    
            <div className='flex md:flex-row flex-col '>
                <div className='w-[100svw] flex justify-center'>
                    <div className='md:w-[70%] w-[90%] py-14 flex md:flex-row flex-col md:justify-between flex-wrap gap-y-10'>

                        <div className='md:w-[50%] flex-1'>
                            {/* will be replaced by Map component */}
                            <img src={trackMapDemo} className='' />
                        </div>

                    </div>

                </div>
                <OrderOngoingTwo />
            </div>
            <Footer />
        </div>
    )
}

export default Ongoing;