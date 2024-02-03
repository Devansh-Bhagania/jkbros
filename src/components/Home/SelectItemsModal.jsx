import React, { useEffect, useState } from 'react'
import { Modal } from '../../ui'
import { Tab } from '@headlessui/react'
import { appliancesData, cartonsData, furnitureData } from '../../data/items'
import { Minus, Plus } from 'phosphor-react'

const itemTypeObject = {
    "Furniture": furnitureData,
    "Appliances": appliancesData,
    "Cartons": cartonsData,
} 

const itemTypeKeys = Object.keys(itemTypeObject);

const SelectItemsModal = ({ open, setOpen, setSteps, setData }) => {
    
    const [ selectedTab, setSelectedTab ] = useState(0);
    const [ tabView, setTabView ] = useState(itemTypeObject[itemTypeKeys[selectedTab]]); 
    const sectionNames = Object.keys(tabView);
    const [ currentView, setCurrentView ] = useState(itemTypeKeys[selectedTab])
    const [ selectedSubGroup, setSelectedSubGroup ] = useState(sectionNames[0])
    const [ itemsList, setItemsList ] = useState(tabView[selectedSubGroup]);

   
    const [selectedItems, setSelectedItems] = useState({});
    
    useEffect(() => {
        setTabView(itemTypeObject[itemTypeKeys[selectedTab]]);
        setCurrentView(itemTypeKeys[selectedTab])
        setItemsList(tabView[selectedSubGroup])
    }, [selectedTab, tabView, selectedTab, currentView, selectedSubGroup]);

    useEffect(() => (
        setSelectedSubGroup(sectionNames[0])
    ), [tabView])

    

    const calculateTotalItemCount = (tab) => {
        let totalCount = 0;
      
        Object.keys(selectedItems).forEach((key) => {
          const [currentTab] = key.split('-');
          if (currentTab === tab) {
            totalCount += selectedItems[key].count;
          }
        });
      
        return totalCount;
      };

    const addItem = (item) => {
        setSelectedItems((prevItems) => {
            const updatedItems = { ...prevItems };
            const key = `${currentView}-${selectedSubGroup}-${item.item}`;
        
            if (updatedItems[key]) {
                updatedItems[key].count += 1;
            } else {
                updatedItems[key] = { ...item, count: 1 };
            }
        
            return updatedItems;
        });
    };
      

    const removeItem = (item) => {
        setSelectedItems((prevItems) => {
            const updatedItems = { ...prevItems };
            const key = `${currentView}-${selectedSubGroup}-${item.item}`;
        
            if (updatedItems[key] && updatedItems[key].count > 0) {
            updatedItems[key].count -= 1;
            }
        
            return updatedItems;
        });
    };

    const calculateTotalItemCountAllTabs = () => {
        let totalCount = 0;
      
        Object.keys(selectedItems).forEach((key) => {
          totalCount += selectedItems[key].count;
        });
      
        return totalCount;
      };

    const handleSubmitClick = () => {
        if(calculateTotalItemCountAllTabs() > 0) {
            setSteps(2);
            setData((prevData) => ({...prevData, selectedItems: selectedItems}));
        }
    }

  return (
    <Modal 
        title="Select items"
        open={open}
        setOpen={setOpen}
        onCloseClick={() => setOpen(false)}
        closeText={"Close"}
        onSubmitClick={handleSubmitClick}
        submitText={"Proceed"}
        label={"Step 1 / 6"}
    >   
        <div className='pl-[1rem]'>
            <Tab.Group vertical 
                selectedIndex={selectedTab} 
                onChange={(index) => setSelectedTab(index)}
                >
                <Tab.List>
                    {Object.keys(itemTypeObject).map((tab, index) => (
                        <Tab key={index} 
                            className={({ selected }) => 
                                `outline-none 
                                ${selected 
                                    ? 'border-b-2 border-primary text-primary' 
                                    : 'text-gray-400'}`}>

                            <div key={index} className='flex items-center gap-[0.5rem] mr-4'>
                                <p className='ml-2 my-2'>{tab}</p>
                                    <div className='bg-primary w-[1rem] h-[1rem] p-1 rounded-full min-w-max flex items-center'>
                                    <p className='text-xs text-white'>
                                        {calculateTotalItemCount(tab)}
                                    </p>
                                </div>
                            </div>

                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                {itemTypeKeys.map((tab, index) => (
                    <Tab.Panel className={`${tab}-section`} key={index}>
                        <div className='flex'>
                            <div className='fill-available'>
                                {    
                                <div className='flex flex-row relative'>
                                <Tab.Group 
                                    vertical={false}
                                    selectedIndex={sectionNames.indexOf(selectedSubGroup)} 
                                    onChange={(index) => setSelectedSubGroup(sectionNames[index])}
                                    >
                                        <Tab.List className="flex flex-col pr-2 gap-y-2 mt-4">
                                            {
                                                Object.keys(tabView).map((item, index) => {

                                                    return(
                                                        <Tab 
                                                            key={index}
                                                            className={({ selected }) => 
                                                            `outline-none text-left px-2 py-1 text-sm rounded-3xl
                                                            ${selected 
                                                                ? 'text-white bg-primary rounded' 
                                                                : 'text-gray-400'}`}
                                                            >
                                                                {item}
                                                        </Tab>
                                                    )
                                                })
                                            }
                                        </Tab.List>
                                    <div className='
                                            flex flex-col h-[60svh] md:h-[70svh]
                                            md:w-[40rem] bg-secondary border-b-2
                                            overflow-y-auto scrollbar-style 
                                            border-x-2 border-t-2 border-outline flex-1
                                            relative
                                            '>
                                                    
                                        {
                                            itemsList?.items?.map((item, index) => {
                                                const key = `${currentView}-${selectedSubGroup}-${item.item}`;
                                                const selectedItem = selectedItems[key] || { count: 0 };

                                                return (
                                                <div
                                                    key={index}
                                                    className={`
                                                    flex gap-x-2 
                                                    justify-between 
                                                    w-auto 
                                                    border-b-2 border-outline
                                                    bg-secondary pt-[1rem] py-[0.5rem] px-4`}
                                                >
                                                    <h1 className='text-xs flex-1'>
                                                        {item.item}
                                                    </h1>

                                                    <div className='text-xs flex items-center justify-center border-2 border-outline rounded-3xl '>
                                                    <button
                                                        className='hover:bg-outline rounded-l-3xl p-1'
                                                        onClick={() => removeItem(item)}
                                                        disabled={selectedItem.count === 0}
                                                    >
                                                        <Minus size={16}/>
                                                    </button>
                                                    <div className='border-x-2 boder-rounded px-4 border-outline text-xs bg-white'>
                                                        {selectedItem.count}
                                                    </div>
                                                    <button
                                                        className='hover:bg-primary bg-outline rounded-r-3xl p-1 hover:text-white'
                                                        onClick={() => addItem(item)}
                                                    >
                                                        <Plus size={16}/>
                                                    </button>
                                                    </div>
                                                </div>
                                                );
                                            })
                                            }
                                        </div>


                                        <div className='absolute bottom-0  bg-outline w-[100%] px-4 py-1 md:text-sm text-xs
                                                flex justify-between
                                        '>
                                            <h1 className='text-primary'>
                                            {calculateTotalItemCountAllTabs()} items added
                                            </h1>
                                        <button className='text-primary' onClick={() => setSelectedItems([])}>
                                            Clear all
                                        </button>
                                </div>
                                </Tab.Group>
                                </div>
                                }
                            </div>
                        </div>
                    </Tab.Panel> 
                ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    </Modal>
  )
}

export default SelectItemsModal