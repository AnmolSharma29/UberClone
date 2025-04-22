import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className='text-lg font-medium ri-home-5-line'/>
        </Link>
        <div className='h-1/2'>
            <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
            <img className='h-20' src="https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/UberX_v1.png" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Anmol Sharma</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>HR26AT8250</h4>
                <p className='text-sm text-gray-700'>BMW i8</p>
            </div>
            </div>

            <div className='flex justify-between flex-col items-center'>
                <div className='w-full mt-5'>
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
            </div>
            <button className='mt-5 w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding