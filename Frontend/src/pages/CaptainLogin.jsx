import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [captainData, setCaptainData] = useState({});
    
        const submitHandler = (e) => {
            e.preventDefault();
            setCaptainData({
                email: email,
                password: password
            })
            setEmail('')
            setPassword('')
        }

    return (
        <div className="p-7 h-screen flex flex-col justify-between font-poppins">
            <div>
                <img className="w-20" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber-driver-logo" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your email?</h3>
                    <input 
                        required 
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}
                        className="bg-[#d1d1d1] mb-7 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="email" 
                        placeholder="some@thing.com"
                        />
                    <h3 className="text-lg font-medium mb-2">Hide your Password...</h3>
                    <input 
                        required 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        className="bg-[#d1d1d1] mb-7 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="password" 
                        placeholder="password" 
                        />
                    <button
                        className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base">
                        Login
                    </button>

                </form>
                <p className="text-center">Join a fleet? {' '}
                    <Link to='/captain-signup' className="text-blue-900">Register as a Captain</Link>
                </p>
            </div>

            <div>
                <Link
                    to='/login' 
                    className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-3 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                    >Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin;