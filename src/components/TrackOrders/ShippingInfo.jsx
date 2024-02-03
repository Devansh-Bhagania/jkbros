import React from 'react'
import directionPins from '/assets/direction.svg'
import { Button } from '../../ui';
import VerticalShippingIndicator from './VerticalShippingIndicator';
import  ShippingProgress  from './ShippingProgress'

const steps = [
    { id: 1, value: 'Package dispatched', display: 'Dispatched', stepComplete: true },
    { id: 2, value: 'Moving from location', display: 'Moving From Location', stepComplete: true },
    { id: 3, value: 'Packing and uninstalling', display: 'Packing and Uninstalling', stepComplete: true  },
    { id: 4, value: 'Vehicle has left', display: 'Vehicle Has Left', stepComplete: false },
    { id: 5, value: 'Unpacking and moving to location', display: 'Unpacking and Moving to Location', stepComplete: false },
  ];

const ShippingInfo = () => {
  return (
    <div className='md:w-[100%] md:px-10 px-4'>
        <div className='flex flex-col'>
            
            <div className='border-b-2 border-outline pb-2 flex justify-between px-6'>
                <div className=''>
                    <p className='text-xs text-gray-400'>On</p>
                    <p className='text-xs'>24th Sep 2023</p>
                </div>
                <div className='text-right'>
                    <p className='text-xs text-gray-400'>between</p>
                    <p className='text-xs text-primary'>10:00 AM - 12:00 PM</p>
                </div>
            </div>

            <div className=' pb-4 flex justify-between md:px-6 gap-x-9'>
                <img src={directionPins} className='py-4'/>

                <div className='flex-1 flex flex-col'>
                    <div className='border-b-2 border-outline py-4'>
                        <p className='text-xs '>Moving from</p>
                        <p className='text-xs text-gray-400 w-[90%]'>B-35 Naginawadi society, Sumul dairy road, katargam, Surat, Gujarat. 395004</p>
                    </div>
                    <div className=' py-4'>
                        <p className='text-xs'>Moving to</p>
                        <p className='text-xs text-gray-400 w-[90%]'>B-35 Naginawadi society, Sumul dairy road, katargam, Surat, Gujarat. 395004</p>
                    </div>
                </div>

            </div>
            
            {/* <VerticalShippingIndicator steps={steps} /> */}
            <ShippingProgress progress={steps}/>

            <div className='bg-secondary p-4 border-2 border-outline rounded-3xl max-w-[20rem] md:ml-[1.5rem] mt-[1rem]'>
                <p className='text-sm mb-[1rem]'>Driver Details</p>

                <div className='flex gap-[1rem] mb-[1rem]'>
                    <div className='h-[2.5rem] w-[2.5rem] bg-gray-400 rounded-xl'>
                        {/* Image here  */}
                    </div> 
                    <div>
                        <h1 className='text-sm'>Dhruvil Jogiwala</h1>
                        <p className='text-sm text-gray-400'>+91 99999 99999</p>
                    </div>
                </div>

                <p className='text-sm mb-[0.5rem]'>Vehicle details</p>
                <p className='text-md font-semibold'>GJ 01 DF 5742</p>
                <p className='italic text-sm'>Small truck</p>
                <p className='text-xs text-gray-400'>Size, capacity & description here</p>
            </div>

            <div className='bg-secondary p-4 border-2 border-outline rounded-3xl max-w-[20rem] md:ml-[1.5rem] mt-[1rem]'>
                <p className='text-sm mb-[1rem]'>Carpenter details</p>

                <div className='flex gap-[1rem] mb-[1rem]'>
                    <div className='h-[2.5rem] w-[2.5rem] bg-gray-400 rounded-xl'>
                        {/* Image here  */}
                    </div> 
                    <div>
                        <h1 className='text-sm'>Dhruvil Jogiwala</h1>
                        <p className='text-sm text-gray-400'>+91 99999 99999</p>
                    </div>
                </div>

            </div>

            <div className='bg-primary p-[1rem] mb-[1rem] md:p-[2rem] border-2 border-outline rounded-3xl max-w-[25rem] mt-[1rem] text-white'>
                <p className='text-sm mb-[1rem] border-b-2 border-opacity-50 border-outline border-dashed pb-[1rem]'>Order Summary</p>
                
                <div className='border-b-2 border-opacity-50 border-outline border-dashed pb-[1rem] flex justify-between'>
                    <div className=''>
                        <p className='text-xs pb-[0.5rem]'>Amount Quoted</p>
                        <p className='text-xs pb-[0.5rem]'>Shifting Date</p>
                        <p className='text-xs'>No. of items added</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-xs font-bold pb-[0.5rem]'>₹ 2,698</p>
                        <p className='text-xs pb-[0.5rem]'>23/08/2023</p>
                        <p className='text-xs'>5</p>
                    </div>
                </div>

                <div className='border-b-2 border-opacity-50 border-outline border-dashed py-[0.5rem] flex justify-between'>
                    <div className=''>
                        <p className='text-xs pb-[0.5rem] font-bold'>Vehicle</p>
                        <p className='text-xs pb-[0.5rem]'>Small truck</p>
                    </div>
                    <div className='text-right'>
                        <p className='text-xs font-bold pb-[0.5rem] text-primary'>-</p>
                        <p className='text-xs pb-[0.5rem]'>2</p>
                    </div>
                </div>

            </div>

            <div className='max-w-[27rem]'>
                <Button>
                    Pay remaining
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ShippingInfo