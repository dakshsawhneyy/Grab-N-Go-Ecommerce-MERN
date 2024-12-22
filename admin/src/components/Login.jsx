import React, { useState } from 'react'

const Login = () => {

    // state variables required to change state in input field by on change
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();
            // console.log(email,password)
        } catch (error) {
            console.log(error);
        }
    }
return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className='sm:h-[40%] sm:w-[25%] border items-center p-5 bg-white shadow-md drop-shadow-lg'>
            <h1 className='font-bold text-3xl'>Admin Panel</h1>
            <form  onSubmit={handleSubmit} action="" className='flex-col flex gap-6 mt-4'>
                <div className='min-w-32'>
                    <p className='text-gray-700 text-sm font-md'>Email Address</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" className='w-full p-1 rounded mt-2 border-gray-300 outline-none border' placeholder='your@email.com' required/>
                </div>
                <div className='min-w-32'>
                    <p className='text-gray-700 text-sm font-md'>Password</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" className='w-full p-1 rounded mt-2 border-gray-300 outline-none border' placeholder='Enter your password' required/>
                </div>
                <button type='submit' className='bg-black w-[30%] m-auto text-white p-2 rounded mt-4'>Login</button>
            </form>
        </div>
    </div>
)
}
export default Login