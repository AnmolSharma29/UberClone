import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain);
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

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
                        className="bg-[#d1d1d1] mb-7 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base"
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
                        className="bg-[#d1d1d1] mb-7 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="password" 
                        placeholder="password" 
                        />
                    <button
                        className="bg-black text-white font-semibold mb-3 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base">
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
                    className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-3 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base"
                    >Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin;