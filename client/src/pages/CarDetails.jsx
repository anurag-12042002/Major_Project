import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dummyCarData, assets } from '../assets/assets'

const CarDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const currency = import.meta.env.VITE_CURRENCY || '$'

  useEffect(() => {
    const foundCar = dummyCarData.find((c) => c._id === id)
    if (foundCar) {
      setCar(foundCar)
    }
  }, [id])

  if (!car) {
    return <div className='text-center py-20 text-xl'>Loading Car Details...</div>
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      {/* Breadcrumb */}
      <div className='text-sm text-gray-500 mb-6'>
        <span className='cursor-pointer hover:text-primary' onClick={() => navigate('/')}>Home</span> /{' '}
        <span className='cursor-pointer hover:text-primary' onClick={() => navigate('/cars')}>Cars</span> /{' '}
        <span className='text-primary font-medium'>{car.brand} {car.model}</span>
      </div>

      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Image Section */}
        <div className='lg:w-3/5 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-8'>
          <img src={car.image} alt={`${car.brand} ${car.model}`} className='w-full h-auto object-contain max-h-[500px]' />
        </div>

        {/* Details Section */}
        <div className='lg:w-2/5 flex flex-col'>
          <div className='mb-6'>
            <div className='flex justify-between items-start'>
              <div>
                <h1 className='text-3xl font-bold mb-2'>{car.brand} {car.model}</h1>
                <p className='inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3'>
                  {car.category}
                </p>
              </div>
              <div className='text-right'>
                <p className='text-3xl font-bold text-primary'>{currency}{car.pricePerDay}</p>
                <p className='text-gray-500 text-sm'>/ day</p>
              </div>
            </div>

            <div className='flex items-center gap-2 mb-6'>
              <div className='flex text-yellow-400'>
                {'★'.repeat(5)}
              </div>
              <span className='text-gray-600 text-sm'>4.8 (256 Reviews)</span>
            </div>
          </div>

          {/* Specifications */}
          <div className='grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-6 rounded-xl'>
            <div className='flex flex-col'>
              <span className='text-gray-500 text-sm mb-1'>Transmission</span>
              <span className='font-semibold flex items-center gap-2'>
                <img src={assets.car_icon} alt="transmission" className='w-4 h-4 opacity-70' />
                {car.transmission}
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-500 text-sm mb-1'>Seats</span>
              <span className='font-semibold flex items-center gap-2'>
                <img src={assets.users_icon} alt="seats" className='w-4 h-4 opacity-70' />
                {car.seating_capacity} Persons
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-500 text-sm mb-1'>Fuel Type</span>
              <span className='font-semibold flex items-center gap-2'>
                <img src={assets.fuel_icon} alt="fuel" className='w-4 h-4 opacity-70' />
                {car.fuel_type}
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='text-gray-500 text-sm mb-1'>Year</span>
              <span className='font-semibold flex items-center gap-2'>
                <img src={assets.calendar_icon_colored} alt="year" className='w-4 h-4 opacity-70' />
                {car.year}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className='mb-8'>
            <h3 className='text-xl font-semibold mb-3'>Description</h3>
            <p className='text-gray-600 leading-relaxed'>
              {car.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className='mt-auto flex flex-col gap-4'>
            <button className='w-full py-4 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary-dull transition-colors cursor-pointer shadow-lg shadow-primary/30'>
              Rent Now
            </button>
            <button 
              onClick={() => navigate('/cars')}
              className='w-full py-4 bg-white border border-gray-200 text-gray-700 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-colors cursor-pointer'
            >
              Back to Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetail
