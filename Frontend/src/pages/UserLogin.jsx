import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const { user, setUser } = useContext(UserDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between font-poppins">
            <div>
                <img className="w-16 mt-5 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
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
                        placeholder="Password" 
                        />
                    <button
                        className="bg-black text-white font-semibold mb-3 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base">
                        Login
                    </button>

                </form>
                <p className="text-center">New here? {' '}
                    <Link to='/signup' className="text-blue-900">Create new Account</Link>
                </p>
            </div>

            <div>
                <Link
                    to='/captain-login' 
                    className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-3 rounded-lg px-4 py-2 border-none w-full text-lg placeholder:text-base"
                    >Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin;