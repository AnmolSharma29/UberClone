import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfrimRidePopUp = (props) => {
    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h5 className="p-1 text-center absolute w-[93%] top-0" onClick={()=>{
                props.setRidePopupPanel(false)
            }}><i className="text-2xl text-gray-400 ri-arrow-down-wide-line"/></h5>
            <h3 className="text-2xl font-semibold mb-5">Confirm this ride to start</h3>

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
                <div className='mt-6 w-full'>
                    <form onSubmit={()=>{
                        submitHandler(e)
                    }}> 
                    <input value={otp} onChange={(e) => setOtp(e.target.value)} type="number" 
                    className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5"
                    placeholder='Enter OTP'/>
                        <Link to='/captain-riding' className='text-lg mt-5 w-full flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</Link>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false)
                            props.setRidePopupPanel(false)
                        }} className='mt-4 text-lg w-full bg-red-600 text-white font-semibold p-3 rounded-lg'>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ConfrimRidePopUp