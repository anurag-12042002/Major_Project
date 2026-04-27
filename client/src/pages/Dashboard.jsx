import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyCarData, dummyMyBookingsData } from '../assets/assets'

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
                                <div className='text-3xl font-bold text-gray-900 mt-2'>₹10,23,500</div>
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
                                    {dummyMyBookingsData.slice(0, 2).map((booking, i) => (
                                        <div key={booking._id} className='flex justify-between items-center p-3 bg-gray-50 rounded-lg'>
                                            <div>
                                                <div className='font-semibold text-gray-900'>{booking.car.brand} {booking.car.model}</div>
                                                <div className='text-sm text-gray-600'>
                                                    {new Date(booking.pickupDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })} –{' '}
                                                    {new Date(booking.returnDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                                                </div>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                                                booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                            }`}>{booking.status}</span>
                                        </div>
                                    ))}
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
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {dummyCarData.map((car) => (
                                <div key={car._id} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                                    {/* Car Image */}
                                    <div className='h-48 bg-gray-50 flex items-center justify-center p-4 border-b border-borderColor'>
                                        <img
                                            src={car.image}
                                            alt={`${car.brand} ${car.model}`}
                                            className='h-full w-full object-contain transition-transform duration-300 hover:scale-105'
                                        />
                                    </div>

                                    {/* Car Details */}
                                    <div className='p-5'>
                                        <div className='flex items-start justify-between mb-3'>
                                            <div>
                                                <h3 className='text-lg font-bold text-gray-900'>{car.brand} {car.model}</h3>
                                                <p className='text-sm text-gray-500'>{car.category} • {car.year}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${car.isAvaliable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                                                {car.isAvaliable ? 'Available' : 'Rented'}
                                            </span>
                                        </div>

                                        {/* Specs Row */}
                                        <div className='grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600'>
                                            <div className='flex flex-col items-center bg-gray-50 rounded-lg py-2'>
                                                <span className='text-xs text-gray-400 mb-0.5'>Fuel</span>
                                                <span className='font-medium'>{car.fuel_type}</span>
                                            </div>
                                            <div className='flex flex-col items-center bg-gray-50 rounded-lg py-2'>
                                                <span className='text-xs text-gray-400 mb-0.5'>Seats</span>
                                                <span className='font-medium'>{car.seating_capacity}</span>
                                            </div>
                                            <div className='flex flex-col items-center bg-gray-50 rounded-lg py-2'>
                                                <span className='text-xs text-gray-400 mb-0.5'>Gear</span>
                                                <span className='font-medium text-center text-xs'>{car.transmission}</span>
                                            </div>
                                        </div>

                                        {/* Location & Price */}
                                        <div className='flex items-center justify-between mb-4'>
                                            <span className='text-sm text-gray-500'>📍 {car.location}</span>
                                            <span className='text-lg font-bold text-primary'>
                                                ₹{Number(car.pricePerDay).toLocaleString('en-IN')}
                                                <span className='text-xs font-normal text-gray-400'>/day</span>
                                            </span>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className='flex gap-3'>
                                            <button className='flex-1 px-3 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg text-sm font-semibold'>
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => navigate(`/car-details/${car._id}`)}
                                                className='flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-all text-gray-800 rounded-lg text-sm font-semibold'
                                            >
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
                                    {[
                                        { car: 'Mahindra XUV700', guest: 'Rajesh Kumar',    dates: 'Jun 13 – Jun 14', status: 'confirmed', color: 'green' },
                                        { car: 'Maruti Suzuki Swift', guest: 'Priya Sharma', dates: 'Jun 12 – Jun 12', status: 'pending',   color: 'yellow' },
                                        { car: 'Tata Nexon EV',     guest: 'Amit Verma',    dates: 'Jun 11 – Jun 12', status: 'pending',   color: 'yellow' },
                                        { car: 'Hyundai Creta',     guest: 'Sneha Patel',   dates: 'Jun 11 – Jun 12', status: 'confirmed', color: 'green' },
                                    ].map((row, i) => (
                                        <tr key={i} className='border-b border-borderColor hover:bg-gray-50'>
                                            <td className='px-6 py-4 text-sm font-medium text-gray-900'>{row.car}</td>
                                            <td className='px-6 py-4 text-sm text-gray-600'>{row.guest}</td>
                                            <td className='px-6 py-4 text-sm text-gray-600'>{row.dates}</td>
                                            <td className='px-6 py-4'>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                                                    row.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>{row.status}</span>
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
                                <div className='text-3xl font-bold text-gray-900 mt-2'>₹2,84,500</div>
                            </div>
                            <div className='bg-white rounded-lg p-6 shadow-md'>
                                <div className='text-gray-600 text-sm font-semibold'>This Year</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>₹10,23,500</div>
                            </div>
                            <div className='bg-white rounded-lg p-6 shadow-md'>
                                <div className='text-gray-600 text-sm font-semibold'>Pending Payout</div>
                                <div className='text-3xl font-bold text-gray-900 mt-2'>₹69,900</div>
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
