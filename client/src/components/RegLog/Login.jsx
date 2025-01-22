import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Login = () => {
    const [LoginFrom, setLoginFrom] = useState({
        email: "",
        password: "",
    })
    const handlechange = (event) => {
        setLoginFrom({ ...LoginFrom, [event.target.name]: event.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(LoginFrom),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            // console.log('ResponseLogin:', data);
            window.location.href = "/"
        } catch (error) {
            console.error('Error:', error);
        }
    }
    // console.log(form)
    return (
        <div id="AuthContainer" className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                </div>

                <div className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700">Email
                                <span className='text-red-600'> *</span>
                            </label>
                            <input
                                value={LoginFrom.email}
                                onChange={handlechange}
                                type="email" id="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700">Password
                                <span className='text-red-600'> *</span>
                            </label>
                            <input
                                value={LoginFrom.password}
                                onChange={handlechange}
                                type="password" id="password"
                                name="password"
                                minLength={5}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label
                                    htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">Forgot password?</a>
                        </div>

                        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Log in
                        </button>
                    </form>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Don't have an account?
                    <RouterLink to='/register'>
                        <button className="ml-1 font-medium text-blue-600 hover:text-blue-800">Register</button>
                    </RouterLink>

                </p>
            </div>
        </div>
    )
}

export default Login
