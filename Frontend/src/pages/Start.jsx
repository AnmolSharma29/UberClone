import React from "react";
import { Link } from "react-router-dom"

const Start = () => {
    return (
        <div className="font-poppins">
            <div className="bg-cover bg-bottom bg-[url(https://plus.unsplash.com/premium_photo-1682048358624-8471ced24a65?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full">
                <img className="w-20 ml-9" src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="uber-logo" />
                <div className="bg-white pb-7 py-4 px-4">
                    <h2 className="text-3xl font-bold">Get Started with Uber</h2>
                    <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start;