import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';




function Login() {
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm();

    const Login = async (data) => {
        setError('')
        try {
            console.log(import.meta.env.BACKEND);
            const res = await fetch('https://shophub-9rig.onrender.com/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result =  res
            // console.log(res);
            
            if (!res.ok) {
                throw new Error("email or password is incorrect")
            }
            console.log("Login successful", result);
            // redirect to home page
            window.location.href = '/'
        } catch (error) {
            setError(error.message)
        }
        
    }
    return (

        <div
            className='flex absolute justify-center items-center top-0 left-0 w-full h-full z-50'
        >
            <div className={`mx-auto w-full max-w-lg  rounded-xl p-10 border border-black/10  `}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        {/* <Logo width="100%" /> */}
                    </span>
                </div>
                <h2 className="text-center  font-bold leading-tight text-black">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(Login)} className='mt-8 text-black'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login