import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        
        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            // Clear form
            setEmail('')
            setPassword('')
            // Redirect to home
            navigate('/')
        }, 1500)
    }

    return (
        <div className='min-h-screen bg-light flex items-center justify-center px-4 py-12'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
                
                {/* Header */}
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h1>
                    <p className='text-gray-600'>Login to your CarRental account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className='space-y-5'>
                    {/* Email Field */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 mb-2'>
                            Email Address
                        </label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='you@example.com'
                            required
                            className='w-full px-4 py-3 rounded-lg border border-borderColor focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 mb-2'>
                            Password
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='••••••••'
                                required
                                className='w-full px-4 py-3 rounded-lg border border-borderColor focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-3 top-3 text-gray-500 hover:text-gray-700'
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <div className='text-right'>
                        <Link to='#' className='text-sm text-primary hover:text-primary-dull transition-colors'>
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full py-3 bg-primary hover:bg-primary-dull disabled:bg-gray-400 transition-all text-white font-semibold rounded-lg cursor-pointer'
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                {/* Divider */}
                <div className='flex items-center gap-3 my-6'>
                    <div className='flex-1 border-t border-borderColor'></div>
                    <span className='text-sm text-gray-500'>OR</span>
                    <div className='flex-1 border-t border-borderColor'></div>
                </div>

                {/* Social Login */}
                <div className='flex justify-center mb-6'>
                    <button className='py-3 px-8 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 hover:from-blue-600 hover:via-red-600 hover:to-yellow-600 shadow-lg hover:shadow-xl transition-all text-white font-semibold text-sm rounded-lg transform hover:scale-105'>
                        🔍 Sign in with Google
                    </button>
                </div>

                {/* Signup Link */}
                <div className='text-center'>
                    <p className='text-gray-600'>
                        Don't have an account?{' '}
                        <Link to='/signup' className='text-primary hover:text-primary-dull font-semibold transition-colors'>
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
