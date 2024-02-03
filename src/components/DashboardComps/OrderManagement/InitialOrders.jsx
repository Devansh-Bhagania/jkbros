

const InitialOrders = () => {
    return[
        { orderId: '#AFD296', name: 'John Doe', address: '123 Main Street, Mumbai', pickupLocation: 'Surat', dropLocation: 'Bangalore', status: 'Completed', date: "25 Dec 2023", services: "Pickup", fee: "20698" },
        { orderId: '#BDE456', name: 'Jane Smith', address: '456 Park Avenue, Delhi', pickupLocation: 'Jaipur', dropLocation: 'Chennai', status: 'On Delivery', date: "28 Dec 2023", services: "Delivery", fee: "15000" },
        { orderId: '#CDE789', name: 'Mike Johnson', address: '789 High Street, Kolkata', pickupLocation: 'Kolkata', dropLocation: 'Mumbai', status: 'On Delivery', date: "30 Dec 2023", services: "Pickup", fee: "18000" },
        { orderId: '#DEF012', name: 'Emily Brown', address: '101 Galaxy Road, Hyderabad', pickupLocation: 'Hyderabad', dropLocation: 'Delhi', status: 'Returned', date: "02 Jan 2024", services: "Delivery", fee: "12000" },
        { orderId: '#EFG345', name: 'Robert Miller', address: '345 Universe Lane, Chennai', pickupLocation: 'Chennai', dropLocation: 'Hyderabad', status: 'Completed', date: "05 Jan 2024", services: "Pickup", fee: "22000" },
        { orderId: '#FGH678', name: 'Sophia Wilson', address: '678 Star Avenue, Jaipur', pickupLocation: 'Jaipur', dropLocation: 'Mumbai', status: 'On Delivery', date: "08 Jan 2024", services: "Delivery", fee: "13500" },
        { orderId: '#GHI901', name: 'Daniel White', address: '901 Cloud Street, Kolkata', pickupLocation: 'Kolkata', dropLocation: 'Hyderabad', status: 'Completed', date: "12 Jan 2024", services: "Pickup", fee: "19000" },
        { orderId: '#HIJ234', name: 'Olivia Davis', address: '234 Rainbow Road, Delhi', pickupLocation: 'Delhi', dropLocation: 'Bangalore', status: 'On Delivery', date: "15 Jan 2024", services: "Delivery", fee: "16000" },
        { orderId: '#IJK567', name: 'William Jones', address: '567 Sky Lane, Mumbai', pickupLocation: 'Mumbai', dropLocation: 'Chennai', status: 'Returned', date: "18 Jan 2024", services: "Pickup", fee: "12500" },
        { orderId: '#JKL890', name: 'Emma Taylor', address: '890 Garden Street, Chennai', pickupLocation: 'Chennai', dropLocation: 'Jaipur', status: 'On Delivery', date: "22 Jan 2024", services: "Delivery", fee: "19500" },
        { orderId: '#KLM123', name: 'Liam Johnson', address: '123 Horizon Avenue, Hyderabad', pickupLocation: 'Hyderabad', dropLocation: 'Kolkata', status: 'Completed', date: "25 Jan 2024", services: "Pickup", fee: "17000" },
        { orderId: '#LMN456', name: 'Ava Brown', address: '456 Sunset Lane, Jaipur', pickupLocation: 'Jaipur', dropLocation: 'Delhi', status: 'On Delivery', date: "28 Jan 2024", services: "Delivery", fee: "14000" },
        { orderId: '#MNO789', name: 'Noah Wilson', address: '789 Crescent Street, Delhi', pickupLocation: 'Delhi', dropLocation: 'Bangalore', status: 'On Delivery', date: "02 Feb 2024", services: "Pickup", fee: "18500" },
        { orderId: '#NOP012', name: 'Isabella Davis', address: '012 Starlight Road, Mumbai', pickupLocation: 'Mumbai', dropLocation: 'Chennai', status: 'Returned', date: "05 Feb 2024", services: "Delivery", fee: "13000" },
        { orderId: '#OPQ345', name: 'Mason White', address: '345 Twilight Avenue, Kolkata', pickupLocation: 'Kolkata', dropLocation: 'Hyderabad', status: 'Completed', date: "08 Feb 2024", services: "Pickup", fee: "20000" },
        { orderId: '#PQR678', name: 'Sophie Jones', address: '678 Eclipse Lane, Chennai', pickupLocation: 'Chennai', dropLocation: 'Jaipur', status: 'Returned', date: "12 Feb 2024", services: "Delivery", fee: "16500" },
        { orderId: '#QRS901', name: 'Jackson Taylor', address: '901 Stardust Street, Hyderabad', pickupLocation: 'Hyderabad', dropLocation: 'Kolkata', status: 'On Delivery', date: "15 Feb 2024", services: "Pickup", fee: "17500" },
        { orderId: '#RST234', name: 'Aria Johnson', address: '234 Solar Road, Delhi', pickupLocation: 'Delhi', dropLocation: 'Bangalore', status: 'Completed', date: "18 Feb 2024", services: "Delivery", fee: "14500" },
        { orderId: '#STU567', name: 'Ethan Brown', address: '567 Meteor Avenue, Mumbai', pickupLocation: 'Mumbai', dropLocation: 'Chennai', status: 'Returned', date: "22 Feb 2024", services: "Pickup", fee: "15500" },
        { orderId: '#TUV890', name: 'Mia Wilson', address: '890 Nebula Lane, Jaipur', pickupLocation: 'Jaipur', dropLocation: 'Delhi', status: 'On Delivery', date: "25 Feb 2024", services: "Delivery", fee: "18000" },
        { orderId: '#UVW123', name: 'Liam Johnson', address: '123 Aurora Street, Kolkata', pickupLocation: 'Kolkata', dropLocation: 'Hyderabad', status: 'Completed', date: "28 Feb 2024", services: "Pickup", fee: "21000" },
        { orderId: '#VWX456', name: 'Emma Taylor', address: '456 Starry Lane, Chennai', pickupLocation: 'Chennai', dropLocation: 'Jaipur', status: 'Returned', date: "02 Mar 2024", services: "Delivery", fee: "17000" },
        { orderId: '#WXY789', name: 'Noah Brown', address: '789 Infinity Road, Hyderabad', pickupLocation: 'Hyderabad', dropLocation: 'Kolkata', status: 'On Delivery', date: "05 Mar 2024", services: "Pickup", fee: "19000" },
        { orderId: '#XYZ012', name: 'Ava White', address: '012 Galaxy Avenue, Delhi', pickupLocation: 'Delhi', dropLocation: 'Bangalore', status: 'Completed', date: "08 Mar 2024", services: "Delivery", fee: "16000" },
        { orderId: '#YZA345', name: 'Jackson Davis', address: '345 Milky Way Street, Mumbai', pickupLocation: 'Mumbai', dropLocation: 'Chennai', status: 'Returned', date: "12 Mar 2024", services: "Pickup", fee: "14500" },
        { orderId: '#ZAB678', name: 'Sophie Wilson', address: '678 Celestial Lane, Jaipur', pickupLocation: 'Jaipur', dropLocation: 'Delhi', status: 'Returned', date: "15 Mar 2024", services: "Delivery", fee: "15500" },
        { orderId: '#ABC901s', name: 'Ethan Taylor', address: '901 Star Cluster Road, Kolkata', pickupLocation: 'Kolkata', dropLocation: 'Hyderabad', status: 'On Delivery', date: "18 Mar 2024", services: "Pickup", fee: "20000" },
        { orderId: '#BCD2s34', name: 'Mia Johnson', address: '234 Comet Avenue, Chennai', pickupLocation: 'Chennai', dropLocation: 'Jaipur', status: 'Completed', date: "22 Mar 2024", services: "Delivery", fee: "17500" },
        { orderId: '#CDE5s67', name: 'Liam Brown', address: '567 Solaris Street, Hyderabad', pickupLocation: 'Hyderabad', dropLocation: 'Kolkata', status: 'On Delivery', date: "25 Mar 2024", services: "Pickup", fee: "18500" },
    ];
};

export default InitialOrders;


