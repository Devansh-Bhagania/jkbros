import React from 'react';
import line from "/assets/line.svg";
import dottedline from "/assets/dottedline.svg"
import location from "/assets/Location.svg"
import progressv from '/assets/progressv.svg'
import progressh from '/assets/progressh.svg'
import VerticalShippingIndicator from './VerticalShippingIndicator';


const steps = [
    { id: 1, value: '', display: 'Arrived at the location', stepComplete: true },
    { id: 2, value: '', display: 'Started with the designated task', stepComplete: true },
    { id: 3, value: '', display: 'Designated task completed', stepComplete: false },
];


const OrderOngoingTwo = () => {
    return (
        <div className='w-[100svw] mb-7 flex justify-center'>
            <div className='lg:w-[70%] w-[%] mt-[1rem]  mx-auto md:mt-[7rem]'>

                <div className='  md:w-[10%] flex md:flex-row flex-col md:items-start items-center'>
                    <div className='w-[40%] min-w-[20rem] mt-[2rem] md:mt-[-4rem]'>

                        <div className='flex justify-between mx-4 my-2'>
                            <h1 className='text-xl font-semibold text-textPrimary font-serif'>Order Tracking</h1>
                            <div className='flex flex-col'>
                                <p className='text-right text-xs text-zinc-500'>Status </p>
                                <p className='text-xs font-semibold text-zinc-500'><a href="" >On going</a> </p>
                            </div>
                        </div>

                        <div className='flex justify-between mx-4 '>
                            <h1 className='text-xs text-zinc-500'>On <br />24th Sep 2023</h1>
                            <div className='flex flex-col'>
                                <p className='text-right text-xs text-zinc-500'>Between </p>
                            <p className='text-xs text-blue-400'><a href="" >10:00Am-12:00Pm</a> </p>
                            </div>
                        </div>
                        
                        <img src={line} className='mt-2' alt="" />
                        <div className='flex p-4 bg-[#F5F7FE] '>
                            <img src={location} className='p-2 cursor-pointer' alt="" />
                            <p className="text-xs mt-2 text-zinc-500 mb-2">B-35 Naginawadi society, Sumul dairy road, katargam, Surat, Gujarat. 395004</p>
                        </div>
                        <img src={line} className='' alt="" />
                        <div className='bg-[#F5F7FE] w-[100%]   min-h-[20rem] p-8 '>
                            {/* <div className='flex mx-auto '>
                                <div className="mx-auto xl:-ml-1 2xl:mx-auto">
                                    <img src={progressv} alt="" />
                                </div>
                                <div className="flex flex-col  ">
                                    <p className="text-sm my-auto ">Arrived at the Location</p>
                                    <p className="text-sm my-auto ">Starting with the Designated task</p>
                                    <p className="text-sm my-auto ">Designated task completed</p>
                                </div>
                               
                            </div> */}
                          
                            <VerticalShippingIndicator steps={steps} />
                            
                            <img src={dottedline} className='mt-4 mb-4' alt="" />
                            <div className='flex justify-between '>
                                <h1 className='text-md '>Budget</h1>
                                <p className='text-sm font-semibold'>₹356</p>
                            </div>

                        </div>

                       

                        <img src={line} className=' mb-4' alt="" />
                        <div className="flex justify-center">
                            <img src={progressh} className='mt-4 ' alt="" />
                        </div>

                        <form className='md:pt-6 pt-4' onSubmit={(e) => { e.preventDefault() }}>
                            <p className="text-sm mb-4 text-center">Started with designated work?</p>
                            <button className='bg-primary rounded-xl px-1 md:px-2 text-white w-full p-2 hover:bg-blue-500'>
                                Confirm & Update
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default OrderOngoingTwo;
