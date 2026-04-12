import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('overview')

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <div className='min-h-screen bg-light'>
            {/* Header */}
            <div className='bg-white border-b border-borderColor sticky top-0 z-40'>
                <div className='max-w-6xl mx-auto px-8 py-4 flex items-center justify-between'>
                    <h1 className='text-2xl font-bold text-gray-900'>Owner Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className='px-6 py-2 bg-red-500 hover:bg-red-600 transition-all text-white rounded-lg font-semibold'
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className='max-w-6xl mx-auto px-8 py-12'>
                {/* Navigation Tabs */}
                <div className='flex gap-4 mb-8 border-b border-borderColor'>
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`px-4 py-3 font-semibold transition-colors ${
                            activeTab === 'overview'
                                ? 'text-primary border-b-2 border-primary'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('vehicles')}
                        className={`px-4 py-3 font-semibold transition-colors ${
                            activeTab === 'vehicles'
                                ? 'text-primary border-b-2 border-primary'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        My Vehicles
                    </button>
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`px-4 py-3 font-semibold transition-colors ${
                            activeTab === 'bookings'
                                ? 'text-primary border-b-2 border-primary'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Bookings
                    </button>
                    <button
                        onClick={() => setActiveTab('earnings')}
                        className={`px-4 py-3 font-semibold transition-colors ${
                            activeTab === 'earnings'
                                ? 'text-primary border-b-2 border-primary'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Earnings
                    </button>
                    <button
                        onClick={() => setActiveTab('settings')}
                        className={`px-4 py-3 font-semibold transition-colors ${
                            activeTab === 'settings'
                                ? 'text-primary border-b-2 border-primary'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Settings
                    </button>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                            <div className='bg-white rounded-lg p-6 shadow-md border-l-4 border-primary'>
                                <div className='text-gray-600 text-sm font-semibold'>Total Earnings</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>$12,450</div>
                                <div className='text-green-600 text-sm mt-2'>↑ 12.5% this month</div>
                            </div>
                            <div className='bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500'>
                                <div className='text-gray-600 text-sm font-semibold'>Active Vehicles</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>5</div>
                                <div className='text-gray-600 text-sm mt-2'>2 available</div>
                            </div>
                            <div className='bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500'>
                                <div className='text-gray-600 text-sm font-semibold'>Total Bookings</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>24</div>
                                <div className='text-gray-600 text-sm mt-2'>3 pending</div>
                            </div>
                            <div className='bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500'>
                                <div className='text-gray-600 text-sm font-semibold'>Rating</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>4.8/5</div>
                                <div className='text-gray-600 text-sm mt-2'>Based on 24 reviews</div>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='bg-white rounded-lg p-6 shadow-md'>
                                <h3 className='text-xl font-bold text-gray-900 mb-4'>Recent Bookings</h3>
                                <div className='space-y-3'>
                                    <div className='flex justify-between items-center p-3 bg-gray-50 rounded-lg'>
                                        <div>
                                            <div className='font-semibold text-gray-900'>Toyota Camry</div>
                                            <div className='text-sm text-gray-600'>Apr 10 - Apr 12</div>
                                        </div>
                                        <span className='px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold'>Completed</span>
                                    </div>
                                    <div className='flex justify-between items-center p-3 bg-gray-50 rounded-lg'>
                                        <div>
                                            <div className='font-semibold text-gray-900'>BMW X5</div>
                                            <div className='text-sm text-gray-600'>Apr 15 - Apr 17</div>
                                        </div>
                                        <span className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold'>Pending</span>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white rounded-lg p-6 shadow-md'>
                                <h3 className='text-xl font-bold text-gray-900 mb-4'>Monthly Earnings</h3>
                                <div className='h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500'>
                                    [Chart Placeholder - Ready for integration]
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* My Vehicles Tab */}
                {activeTab === 'vehicles' && (
                    <div className='space-y-6'>
                        <div className='flex justify-end mb-4'>
                            <button className='px-6 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg font-semibold'>
                                + Add New Vehicle
                            </button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                                    <div className='h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white'>
                                        [Vehicle Image]
                                    </div>
                                    <div className='p-4'>
                                        <h3 className='text-lg font-bold text-gray-900'>Vehicle {i}</h3>
                                        <p className='text-sm text-gray-600 mt-1'>Make: BMW X{4 + i}</p>
                                        <p className='text-sm text-gray-600'>Status: Active</p>
                                        <div className='flex gap-2 mt-4'>
                                            <button className='flex-1 px-3 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded text-sm font-semibold'>
                                                Edit
                                            </button>
                                            <button className='flex-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-all text-gray-900 rounded text-sm font-semibold'>
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bookings Tab */}
                {activeTab === 'bookings' && (
                    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                        <div className='overflow-x-auto'>
                            <table className='w-full'>
                                <thead className='bg-gray-50 border-b border-borderColor'>
                                    <tr>
                                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Vehicle</th>
                                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Guest</th>
                                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Dates</th>
                                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Status</th>
                                        <th className='px-6 py-3 text-left text-sm font-semibold text-gray-900'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3].map((i) => (
                                        <tr key={i} className='border-b border-borderColor hover:bg-gray-50'>
                                            <td className='px-6 py-4 text-sm text-gray-900'>Toyota Camry</td>
                                            <td className='px-6 py-4 text-sm text-gray-600'>John Doe</td>
                                            <td className='px-6 py-4 text-sm text-gray-600'>Apr {10 + i} - Apr {12 + i}</td>
                                            <td className='px-6 py-4'>
                                                <span className='px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold'>Completed</span>
                                            </td>
                                            <td className='px-6 py-4'>
                                                <button className='text-primary hover:text-primary-dull font-semibold text-sm'>View Details</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Earnings Tab */}
                {activeTab === 'earnings' && (
                    <div className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <div className='bg-white rounded-lg p-6 shadow-md'>
                                <div className='text-gray-600 text-sm font-semibold'>This Month</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>$3,450</div>
                            </div>
                            <div className='bg-white rounded-lg p-6 shadow-md'>
                                <div className='text-gray-600 text-sm font-semibold'>This Year</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>$12,450</div>
                            </div>
                            <div className='bg-white rounded-lg p-6 shadow-md'>
                                <div className='text-gray-600 text-sm font-semibold'>Pending Payout</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>$850</div>
                            </div>
                        </div>
                        <div className='bg-white rounded-lg p-6 shadow-md'>
                            <h3 className='text-xl font-bold text-gray-900 mb-4'>Earnings Breakdown</h3>
                            <div className='h-80 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500'>
                                [Earnings Chart - Ready for integration]
                            </div>
                        </div>
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div className='bg-white rounded-lg p-6 shadow-md space-y-6'>
                        <div>
                            <h3 className='text-lg font-bold text-gray-900 mb-4'>Account Settings</h3>
                            <div className='space-y-4'>
                                <div>
                                    <label className='block text-sm font-semibold text-gray-900 mb-2'>Full Name</label>
                                    <input
                                        type='text'
                                        placeholder='John Doe'
                                        className='w-full px-4 py-2 border border-borderColor rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-semibold text-gray-900 mb-2'>Email</label>
                                    <input
                                        type='email'
                                        placeholder='john@example.com'
                                        className='w-full px-4 py-2 border border-borderColor rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                                    />
                                </div>
                                <div>
                                    <label className='block text-sm font-semibold text-gray-900 mb-2'>Phone</label>
                                    <input
                                        type='tel'
                                        placeholder='+1 (234) 567-890'
                                        className='w-full px-4 py-2 border border-borderColor rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                                    />
                                </div>
                            </div>
                        </div>
                        <button className='px-6 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg font-semibold'>
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dashboard
