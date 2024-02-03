import React, { useState } from 'react'
// import CreditCard from './CreditCard'
import { Plus } from '@phosphor-icons/react'
import logohdfc from '/assets/logohdfc.svg'
import { Link } from 'react-router-dom'
import { Button } from '../../ui'
import line from "/assets/line.svg"



const LinkAccount = () => {

    const [addCard, setAddCard] = useState(false)

    const toggleAddCard = () => {
        setAddCard(!addCard)
    }

    return (
        <div className='md:w-[50%] h-[35rem] md:ml-[4rem] mt-12 md:mr-[12rem] border-1 bg-secondary rounded-xl border-zinc-500 flex flex-col md:justify-left items-left items-center'>

            <div className='md:w-[90%] w-[50%] h-[90%] '>
                <h1 className='font-playfair  text-md mb-4 mt-4 text-textPrimary'>Linked Bank Account</h1>
                <div className="flex mb-3 -mx-3 ">
                    <img className=" mx-3"src={logohdfc} alt="" />
                    <div className="fle">
                        <p>HDFC bank 1170</p>
                        <p className="text-xs">Savings account <br />Primary</p>
                    </div>
                   
                </div>
                <img src={line} alt="" />
                
                <button className='style flex  items-center gap-x-4 my-4' onClick={toggleAddCard}>
                    <div className='w-[2rem]'>
                        <div className="flex border-primary  rounded-lg border-2 p-1">
                            <Plus size={20} weight="bold" className='text-primary' />
                        </div>
                    </div>
                    <p className='uppercase text-sm text-primary'>Add Bank Account</p>
                </button>
                <Button variant="Primary" className=' mt-[17rem] w-auto'>
                    <h1 className='text-'>
                        Withdraw Funds
                    </h1>
                </Button>
            </div>
           
        </div>
    )
}

export default LinkAccount;