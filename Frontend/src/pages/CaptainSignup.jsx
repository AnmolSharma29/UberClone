import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [captainData, setCaptainData] = useState({});

    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
        
    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname:{
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle:{
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if(response.status === 201){
            const data = response.data
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');

    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between font-poppins">
            <div>
            <img className="w-20" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="uber-driver-logo" />
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your name?</h3>
                    <div className="flex gap-2 mb-5">
                        <input 
                            required 
                            className="bg-[#d1d1d1] rounded-lg px-4 py-2 w-1/2 border-none text-lg placeholder:text-base"
                            type="text" 
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <input 
                            className="bg-[#d1d1d1] rounded-lg px-4 py-2 w-1/2 border-none text-lg placeholder:text-base"
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
                        className="bg-[#d1d1d1] mb-5 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base"
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
                        className="bg-[#d1d1d1] mb-6 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base"
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} 
                        />

                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-7'>
                        <input
                        required
                        className='bg-[#d1d1d1] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        type="text"
                        placeholder='Vehicle Color'
                        value={vehicleColor}
                        onChange={(e) => {
                            setVehicleColor(e.target.value)
                        }}
                        />
                        <input
                        required
                        className='bg-[#d1d1d1] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        type="text"
                        placeholder='Vehicle Plate'
                        value={vehiclePlate}
                        onChange={(e) => {
                            setVehiclePlate(e.target.value)
                        }}
                        />
                    </div>
                    <div className='flex gap-4 mb-7'>
                        <input
                        required
                        className='bg-[#d1d1d1] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        type="number"
                        placeholder='Vehicle Capacity'
                        value={vehicleCapacity}
                        onChange={(e) => {
                            setVehicleCapacity(e.target.value)
                        }}
                        />
                        <select
                        required
                        className='bg-[#d1d1d1] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                        value={vehicleType}
                        onChange={(e) => {
                            setVehicleType(e.target.value)
                        }}
                        >
                        <option value="" disabled>Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="moto">Moto</option>
                        </select>
                    </div>

                    <button
                        className="bg-black text-white font-semibold mb-3 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base">
                        Create Captain Account
                    </button>

                </form>
                <p className="text-center mb-10">Already have an account? {' '}
                    <Link to='/captain-login' className="text-blue-900">Login here</Link>
                </p>
            </div>

            <div>
                <p className="text-xs leading-tight font-light text-center mb-8"
                >This site is protected by reCAPTCHA and the <span className="font-bold underline">Google Privacy Policy</span> and <span className="font-bold underline">Terms of Service</span> apply.</p>
            </div>
        </div>
    )
}

export default CaptainSignup;