import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 className="p-1 text-center absolute w-[93%] top-0" onClick={()=>{
            props.setRidePopupPanel(false)
        }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-line"/></h5>
        <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className="h-12 w-12 rounded-full object-cover border-2 border-white" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" alt="" />
                <h2 className='text-lg font-medium'>Harsh Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 Km</h5>
        </div>

        <div className='flex justify-between flex-col items-center'>
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
            <div className='flex items-center justify-around mt-5 w-full'>
                <button onClick={() => {
                    props.setRidePopupPanel(false)
                }} className='bg-gray-300 text-gray-700 font-semibold p-3 px-12 rounded-lg'>Ignore</button>
                <button onClick={() => {
                    props.setConfirmRidePopupPanel(true)
                }} className='bg-green-600 text-white font-semibold p-3 px-12 rounded-lg'>Accept</button>
            </div>
        </div>
    </div>
  )
}

export default RidePopUp