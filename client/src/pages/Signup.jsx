import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
        setError('')
    }

    const handleSignup = (e) => {
        e.preventDefault()
        
        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            return
        }
        
        if (!formData.agreeTerms) {
            setError('Please agree to Terms and Conditions')
            return
        }

        setLoading(true)
        
        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            // Clear form
            setFormData({ fullName: '', email: '', password: '', confirmPassword: '', agreeTerms: false })
            // Redirect to home
            navigate('/')
        }, 1500)
    }

    return (
        <div className='min-h-screen bg-light flex items-center justify-center px-4 py-12'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
                
                {/* Header */}
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Create Account</h1>
                    <p className='text-gray-600'>Join CarRental today</p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className='mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm'>
                        {error}
                    </div>
                )}

                {/* Signup Form */}
                <form onSubmit={handleSignup} className='space-y-5'>
                    {/* Full Name */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 mb-2'>
                            Full Name
                        </label>
                        <input
                            type='text'
                            name='fullName'
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder='John Doe'
                            required
                            className='w-full px-4 py-3 rounded-lg border border-borderColor focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 mb-2'>
                            Email Address
                        </label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='you@example.com'
                            required
                            className='w-full px-4 py-3 rounded-lg border border-borderColor focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 mb-2'>
                            Password
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
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

                    {/* Confirm Password */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-900 mb-2'>
                            Confirm Password
                        </label>
                        <div className='relative'>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder='••••••••'
                                required
                                className='w-full px-4 py-3 rounded-lg border border-borderColor focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            />
                            <button
                                type='button'
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className='absolute right-3 top-3 text-gray-500 hover:text-gray-700'
                            >
                                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className='flex items-start gap-2'>
                        <input
                            type='checkbox'
                            name='agreeTerms'
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className='mt-1 cursor-pointer'
                            required
                        />
                        <label className='text-sm text-gray-600'>
                            I agree to the{' '}
                            <Link to='#' className='text-primary hover:text-primary-dull'>
                                Terms and Conditions
                            </Link>
                            {' '}and{' '}
                            <Link to='#' className='text-primary hover:text-primary-dull'>
                                Privacy Policy
                            </Link>
                        </label>
                    </div>

                    {/* Signup Button */}
                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full py-3 bg-primary hover:bg-primary-dull disabled:bg-gray-400 transition-all text-white font-semibold rounded-lg cursor-pointer'
                    >
                        {loading ? 'Creating account...' : 'Sign Up'}
                    </button>
                </form>

                {/* Divider */}
                <div className='flex items-center gap-3 my-6'>
                    <div className='flex-1 border-t border-borderColor'></div>
                    <span className='text-sm text-gray-500'>OR</span>
                    <div className='flex-1 border-t border-borderColor'></div>
                </div>

                {/* Social Signup */}
                <div className='grid grid-cols-2 gap-3 mb-6'>
                    <button type='button' className='py-2 bg-gray-50 hover:bg-gray-100 transition-colors border border-borderColor rounded-lg font-medium text-sm'>
                        Google
                    </button>
                    <button type='button' className='py-2 bg-gray-50 hover:bg-gray-100 transition-colors border border-borderColor rounded-lg font-medium text-sm'>
                        GitHub
                    </button>
                </div>

                {/* Login Link */}
                <div className='text-center'>
                    <p className='text-gray-600'>
                        Already have an account?{' '}
                        <Link to='/login' className='text-primary hover:text-primary-dull font-semibold transition-colors'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
