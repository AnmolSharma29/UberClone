import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});
    

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName:{
                firstName: firstName,
                lastName: lastName,
            },
            email: email,
            password: password
        })
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between font-poppins">
            <div>
                <img className="w-16 mt-5 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your name?</h3>
                    <div className="flex gap-2 mb-5">
                        <input 
                            required 
                            className="bg-[#d1d1d1] rounded px-4 py-2 w-1/2 border-none text-lg placeholder:text-base"
                            type="text" 
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <input 
                            className="bg-[#d1d1d1] rounded px-4 py-2 w-1/2 border-none text-lg placeholder:text-base"
                            type="text" 
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                    </div>

                    <h3 className="text-lg font-medium mb-2">What's your email?</h3>
                    <input 
                        required
                        className="bg-[#d1d1d1] mb-5 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="email" 
                        placeholder="some@thing.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <h3 className="text-lg font-medium mb-2">Hide your Password...</h3>
                    <input 
                        required 
                        className="bg-[#d1d1d1] mb-6 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} 
                        />
                    <button
                        className="bg-black text-white font-semibold mb-3 rounded px-4 py-2 border-none w-full text-lg placeholder:text-base">
                        Sign up
                    </button>

                </form>
                <p className="text-center">Already have an account? {' '}
                    <Link to='/login' className="text-blue-900">Login here</Link>
                </p>
            </div>

            <div>
                <p className="text-xs leading-tight font-light text-center"
                >This site is protected by reCAPTCHA and the <span className="font-bold underline">Google Privacy Policy</span> and <span className="font-bold underline">Terms of Service</span> apply.</p>
            </div>
        </div>
    )
}

export default UserSignup;