import React from 'react'
import { dummyMyBookingsData, assets } from '../assets/assets'

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY || '$'

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen'>
      <div className='text-sm text-gray-500 mb-6'>
        <span>Home</span> / <span className='text-primary font-medium'>My Bookings</span>
      </div>

      <h1 className='text-3xl font-semibold mb-8 border-b pb-4 border-gray-200'>My Bookings</h1>

      <div className='flex flex-col gap-6'>
        {dummyMyBookingsData.map((booking, index) => (
          <div key={booking._id} className='bg-white border text-gray-700 border-borderColor p-6 rounded-2xl flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow duration-300'>
            {/* Left: Car Image */}
            <div className='md:w-1/4 bg-light rounded-xl flex items-center justify-center p-4 min-h-[160px]'>
              <img src={booking.car.image} alt={booking.car.brand} className='w-full h-auto object-contain max-h-32 group-hover:scale-105 transition-transform' />
            </div>

            {/* Middle: Details */}
            <div className='md:w-2/4 flex flex-col justify-center'>
              <div className='flex items-center gap-3 mb-2'>
                <span className='bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide'>
                  Booking #{index + 1}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide capitalize ${
                  booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {booking.status}
                </span>
              </div>

              <h2 className='text-xl font-bold mb-1'>
                {booking.car.brand} {booking.car.model}
              </h2>
              <p className='text-gray-500 text-sm mb-4'>
                {booking.car.category} • {booking.car.year} • {booking.car.transmission}
              </p>
              
              <div className='bg-gray-50 rounded-lg p-3 inline-block'>
                <p className='text-sm font-medium'>
                  Total Price: <span className='text-primary text-lg ml-1'>{currency}{booking.price}</span>
                </p>
              </div>
            </div>

            {/* Right: Dates & Location */}
            <div className='md:w-1/4 flex flex-col justify-center gap-4 md:border-l md:border-gray-100 md:pl-6'>
              <div className='flex items-start gap-3'>
                <img src={assets.calendar_icon_colored} alt="date" className='w-5 h-5 mt-0.5 opacity-80' />
                <div>
                  <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1'>Rental Period</p>
                  <p className='text-sm font-medium'>
                    {formatDate(booking.pickupDate)} <br />
                    <span className='text-gray-400'>to</span> <br />
                    {formatDate(booking.returnDate)}
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <img src={assets.location_icon_colored} alt="location" className='w-5 h-5 mt-0.5 opacity-80' />
                <div>
                  <p className='text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1'>Location</p>
                  <p className='text-sm font-medium'>{booking.car.location}</p>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {dummyMyBookingsData.length === 0 && (
        <div className='text-center py-20'>
          <p className='text-gray-500 text-lg'>You have no bookings yet.</p>
        </div>
      )}
    </div>
  )
}

export default MyBookings
