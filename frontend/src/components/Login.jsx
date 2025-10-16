import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const BACKEND_URL = import.meta.env.VITE_BACKEND;

function Login() {
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // Check token on mount
  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/users/current-user`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        if (res.ok) {
          navigate("/admin");
        }
      } catch (error) {
        // If there's an error (e.g., network), we'll just stay on the login page.
        console.error("Not logged in:", error.message);
      }
    };

    checkUserStatus();
  }, [navigate]);

const handleLogin = async (data) => {
  setError('');
  try {
    const loginUrl = `${BACKEND_URL}/api/users/login`;

    const res = await fetch(loginUrl, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Email or password is incorrect");
    }

    await res.json();

    // redirect to admin page
    navigate("/admin");
  } catch (error) {
    setError(error.message);
  }
};

return (
  <div className='flex absolute justify-center items-center top-0 left-0 w-full h-full z-50'>
    <div className="mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10">
      <h2 className="text-center font-bold leading-tight text-black">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have an account?&nbsp;
        <Link to="/signup" className="font-medium text-primary hover:underline">
          Sign Up
        </Link>
      </p>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <form onSubmit={handleSubmit(handleLogin)} className="mt-8 text-black">
        <div className="space-y-5">
          <Input
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be valid",
              },
            })}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Sign in
          </Button>
        </div>
      </form>
    </div>
  </div>
);
}

export default Login;
