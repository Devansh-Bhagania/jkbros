import React, { useState } from 'react'
import { Contact, Help, Legal } from '../../components/Profile/comps'
import { EditProfileComponent, PAccountDetails, PackersNav } from '../../components'

const profileOptions = [
    {
        value: "editProfile",
    },
 
    {
        value: "help",
        title: "Help",
        subtitle: "FAQs & Links",
    },
    {
        value: "legal",
        title: "Legal",
        subtitle: ""
    },
    {
        value: "contactUs",
        title: "Contact Us",
        subtitle: "For ay queries or help",
        subSection: {
            title: `Mail us at`,
            email: `yourcompany@gmail.com`
        }
    },
    {
        value: "logOut",
        title: "Log out",
        subtitle: ""
    }
]

const Logout = () => {
    return (
        <div className='md:w-[100%]'>
            <h1 className='font-playfair text-2xl text-textPrimary'>Log out</h1>

        </div>
    )
}

const sectionMap = {
    "editProfile": PAccountDetails,
    "help": Help,
    "legal": Legal,
    "contactUs": Contact,
    "logOut": Logout
}

const PProfileInfo = () => {

    const [section, setSection] = useState()
    const handleClick = (value) => {
        setSection(value)
    }
    const selectedSection = section?.value
    const SelectedComp = selectedSection && sectionMap[selectedSection]

    return (
        
        <div className='w-[100svw] flex justify-center'>
            <div className='md:w-[70%] w-[90%] py-14 flex md:flex-row flex-col md:justify-between flex-wrap gap-y-10'>
                <div className='md:w-[40%] flex-1'>


                    <EditProfileComponent
                        onChange={(value) => handleClick(value)}
                        value={section}
                        config={profileOptions}
                    />
                </div>

                <div className='flex-1 md:w-[60%]'>
                    {SelectedComp && <SelectedComp />}
                </div>

            </div>

        </div>
    )
}

export default PProfileInfo