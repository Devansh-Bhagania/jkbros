import React from 'react'
import { Button } from '../../ui'
import line from '/assets/line.svg'
import location from '/assets/Location.svg'
import dottedline from '/assets/dottedline.svg'
//import { EarningCards } from '..'

const EarningCards = () => {
    return (
        <div className='md:w-[80%] md:ml-7'>
            <h1 className='font-playfair text-lg mt-4 mb-3 text-textPrimary mx-5'>Earnings</h1>
            <div className='flex justify-between mx-4 border-1 p-5 mr-12 border-outline rounded-3xl bg-secondary'>
                <p className='text-right text-sm text-zinc-500'>Balance </p>
                <p className='text-xs text-blue-400'><a href="" >₹5278.00 INR</a> </p>
            </div>

            <div className='mt-5  flex flex-col gap-y-10 md:h-[100svh] md:overflow-y-scroll pr-[2rem] scrollbar-style'>
                {Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
                    
                    <div className=' mx-auto border-1 p-4 border-outline rounded-3xl bg-secondary '>
                        
                    

                        <div className='flex justify-between mx-4 '>
                            <h1 className='text-xs text-zinc-500'>On <br />24th Sep 2023</h1>
                            <div className='flex flex-col'>
                                <p className='text-right text-xs text-zinc-500'>Between </p>
                                <p className='text-xs text-blue-400'><a href="" >10:00Am-12:00Pm</a> </p>
                            </div>
                        </div>

                        <img src={dottedline} className='mt-4 mb-4 w-full' alt="" />
                        <div className='flex bg-[#F5F7FE] '>
                            <img src={location} className='mx-3 cursor-pointer' alt="" />
                            <p className="text-sm  text-zinc-500 ">B-35 Naginawadi society, Sumul dairy road, katargam, Surat, Gujarat. 395004</p>
                        </div>
                       
                        <img src={dottedline} className='mt-4 mb-4 w-full' alt="" />
                        <div className='flex justify-between '>
                            <h1 className='text-md '>Budget</h1>
                            <p className='text-sm font-semibold'>₹356</p>
                        </div>
                        <img src={dottedline} className='mt-4 mb-4 w-full' alt="" />

                        <Button variant="secondary">
                            <h1 className='text-'>
                                View Details
                            </h1>
                        </Button>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default EarningCards