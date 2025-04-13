import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center absolute w-[93%] top-0" onClick={()=>{
                    props.setVehiclePanel(false)
                }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-line"/></h5>
            <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
            <div onClick={()=>{
                props.setConfirmRidePanel(true)
            }} className="grid grid-cols-4 border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full px-3 py-2 items-center justify-between">
                <img className="h-20" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="Uber-car" />
                <div className="ml-2 col-span-2">
                    <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className="font-medium text-sm">2 min away</h5>
                    <p className="font-normal text-xs text-gray-600">Affordable, Compact Rides</p>
                </div>
                <h2 className="text-lg font-semibold text-right">₹193.20</h2>
            </div>
            <div onClick={()=>{
                props.setConfirmRidePanel(true)
            }} className="grid grid-cols-4 border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full px-3 py-2 items-center justify-between">
                <img className="h-20" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_Green_v1.png" alt="Uber-auto" />
                <div className="ml-2 col-span-2">
                    <h4 className="font-medium text-base">UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className="font-medium text-sm">2 min away</h5>
                    <p className="font-normal text-xs text-gray-600">Affordable, Auto Rides</p>
                </div>
                <h2 className="text-lg font-semibold text-right">₹118.68</h2>
            </div>
            <div onClick={()=>{
                props.setConfirmRidePanel(true)
            }} className="grid grid-cols-4 border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full px-3 py-2 items-center justify-between">
                <img className="h-20" src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/Uber_Moto_India1.png" alt="Uber-bike" />
                <div className="ml-2 col-span-2">
                    <h4 className="font-medium text-base">UberMoto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className="font-medium text-sm">3 min away</h5>
                    <p className="font-normal text-xs text-gray-600">Affordable, Motorcycle Rides</p>
                </div>
                <h2 className="text-lg font-semibold text-right">₹65.20</h2>
            </div>
        </div>
    )
}

export default VehiclePanel