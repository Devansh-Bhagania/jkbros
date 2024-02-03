import React, { useState } from 'react';
import classNames from 'classnames';
import OrderRequest from './OrderRequest';

const Calendar = () => {
    // Sample data for the calendar
    const calendarData = [
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        { day: 21, text: 'Today' },
        


        // Add more data as needed
    ];

    const [selectedDay, setSelectedDay] = useState(null);

    const handleBoxClick = (day) => {
        // Handle box click, show details for the selected day
        setSelectedDay(day);
        // Add logic to display details based on the selected day
    };

    return (

        <div className='h-[18svh] w-[100svw] flex items-center justify-center'>
            <div className='md:w-[70%] w-[130%]'>
                <div className='max-h-[2%]  rounded-3xl'>
                    <div className="overflow-x-auto scrollbar-style">
                        <div className="flex container mx-2  md:mb-2 md:mt-2 bg-white   rounded-lg  h-full w-auto">
                            {calendarData.map((item) => (
                                <div
                                    key={item.day}
                                    className={classNames(
                                        'flex-shrink-0 p-2 h-13 w-13 rounded-xl m-1 cursor-pointer border border-gray-400 bg-white',
                                        { 'bg-blue-500 text-white border-blue-500': selectedDay === item.day }
                                    )}
                                    onClick={() => handleBoxClick(item.day)}
                                >
                                    <div className="text-sm">{item.text}</div>
                                    <div className="text-sm text-center text-blue-500">{item.day}</div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>


            </div>
        </div>


    );
};

export default Calendar;
