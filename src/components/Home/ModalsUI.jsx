import { useEffect, useState } from "react"
import { CheckOutPreviewModal, CheckoutModal2 } from "../Profile/comps"
import ConfirmBookingModal from "./ConfirmBookingModal"
import PricingModal from "./PricingModal"
import SelectItemsModal from "./SelectItemsModal"
import SelectTrucks from "./SelectTrucks"

const ModalsUI = ({SetSelectItemsModal, selectItemsModal, steps, setSteps, formData}) => {

    const [data, setData] = useState({form: formData});
    
    // // Function to fetch data (simulating an API call)
    // const fetchData = async () => {
    //   // Simulating an API call with a delay
    //   await new Promise(resolve => setTimeout(resolve, 1000));
  
    //   // Your actual data fetching logic goes here
    //   const fetchedData = { JKBrosData: data };
  
    //   // Store the fetched data in the browser's localStorage
    //   localStorage.setItem('cachedData', JSON.stringify(fetchedData));
  
    //   // Update the state with the fetched data
    //   setData(fetchedData);
    // };
  
    // useEffect(() => {
    //   // Check if data is already in the cache (localStorage)
    //   const cachedData = localStorage.getItem('cachedData');
  
    //   if (cachedData) {
    //     // If data is found in the cache, parse and set it in the state
    //     setData(JSON.parse(cachedData));
    //   } else {
    //     // If data is not found in the cache, fetch it
    //     fetchData();
    //   }
    // }, []);

    console.log({data})

  return (
    <div>
            {
                (selectItemsModal &&  steps === 1) && (
                    <SelectItemsModal 
                        open={selectItemsModal} 
                        setOpen={() => { SetSelectItemsModal(false) }}  
                        setSteps={setSteps}
                        setData={setData}
                        />
                )
            }
            {
                (selectItemsModal &&  steps === 2) && (
                    <SelectTrucks 
                        setSteps={setSteps}  
                        setOpen={() => { SetSelectItemsModal(false) }} 
                        onCloseClick={() => setSteps(1)}
                        closeText={"Back"}
                        setData={setData}
                    />
                )
            }
            {
                (selectItemsModal &&  steps === 3) && (
                    <PricingModal 
                        setSteps={setSteps}  
                        setOpen={() => { SetSelectItemsModal(false) }} 
                        onCloseClick={() => setSteps(2)}
                        closeText={"Back"}
                        setData={setData}
                        data={data}
                    />
                )
            }
            {
                (selectItemsModal &&  steps === 4) && (
                    <ConfirmBookingModal 
                        setSteps={setSteps}  
                        setOpen={() => { SetSelectItemsModal(false) }} 
                        onCloseClick={() => setSteps(3)}
                        closeText={"Back"}
                        setData={setData}
                        data={data}
                    />
                )
            }
            {
                (selectItemsModal &&  steps === 5) && (
                    <CheckoutModal2 
                        setSteps={setSteps}  
                        setOpen={() => { SetSelectItemsModal(false) }} 
                        onCloseClick={() => setSteps(4)}
                        closeText={"Back"}
                       
                    />
                )
            }
            {
                (selectItemsModal &&  steps === 6) && (
                    <CheckOutPreviewModal 
                        open={open} 
                        setSteps={setSteps}
                        setOpen={() => { SetSelectItemsModal(false) }}
                        onCloseClick={() => setSteps(5)}
                        closeText={"Back"}
                    />
                )
            }
    </div>
  )
}

export default ModalsUI