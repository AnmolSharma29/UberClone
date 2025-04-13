import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 className="p-1 text-center absolute w-[93%] top-0" onClick={()=>{
            props.setConfirmRidePanel(false)
        }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-line"/></h5>
        <h3 className="text-2xl font-semibold">Confirm your Ride</h3>

        <div className='flex justify-between flex-col items-center'>
            <img className='h-40' src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="" />
            <div className='w-full mt-5'>
                <div className='flex gap-5 items-center p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-2-fill" />
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A,</h3>
                        <p className='text-sm -mt-1 text-gray-700'>kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-user-fill" />
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A,</h3>
                        <p className='text-sm -mt-1 text-gray-700'>kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center p-3'>
                    <i className="text-lg ri-currency-line" />
                    <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm -mt-1 text-gray-700'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)
            }} className='mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide