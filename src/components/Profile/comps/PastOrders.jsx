import React from 'react'
import { Button } from '../../../ui'

const PastOrders = () => {
  return (
    <div className='md:w-[100%]'>
      <h1 className='font-playfair text-2xl text-textPrimary'>Notification</h1>

      <div className='mt-5 flex flex-col gap-y-10 md:h-[100svh] md:overflow-y-scroll pr-[2rem] scrollbar-style'>
        { Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
          <div className='border-2 p-4 border-outline rounded-3xl bg-secondary '>

          <div className='border-b-2 border-outline border-dashed my-2 pb-2 flex flex-col gap-2 '>
              <div className='flex text-xs justify-between'>
                <p >Move From</p>
                <p className='text-gray-400'>B-35 Naginawadi ... ...Gujarat. 395004</p>
              </div>
              <div className='flex text-xs justify-between'>
                <p >Move From</p>
                <p className='text-gray-400'>Sumul dairy road ... ...katargam, Surat</p>
              </div>
          </div>

          <div className='border-b-2 border-outline border-dashed my-2 pb-2 flex flex-col gap-2 '>
              <div className='flex text-xs justify-between'>
                <p >Amount Quoted</p>
                <p className='font-semibold'>₹ 2,698</p>
              </div>
              <div className='flex text-xs justify-between'>
                <p >Shifting Date</p>
                <p >23/08/2023</p>
              </div>
              <div className='flex text-xs justify-between'>
                <p >No. of items added</p>
              </div>
          </div>
          <p className='text-xs'>Driver Details</p>

          <div className='gap-4 my-[1rem] flex justify-between'>
            <div className='flex gap-[1rem]'>

              <div className='h-[2.5rem] w-[2.5rem] bg-gray-400 rounded-xl'>
                {/* Profile Image */}
              </div> 

              <div>
                <h1 className='text-sm text-gray-400'>Dhruvil Jogiwala</h1>
                <p className='text-sm text-gray-400'>+91 99999 99999</p>
              </div>

            </div>
          </div>
          
          <div className='flex items-center justify-end gap-x-2'>
              <div className='min-w-[5rem] h-[2.5rem]'>
                <Button variant='secondary' className='bg-primary p-2 px-4 rounded-3xl text-primary'>
                    Rate Service
                </Button>
              </div>
              <div className='min-w-[5rem] h-[2.5rem]'>
                <Button variant='secondary' className='bg-primary p-2 px-4 rounded-3xl text-primary'>
                    Rate Driver
                </Button>
              </div>
          </div>


          </div>
        ))}

      </div>
      
    </div>
  )
}

export default PastOrders