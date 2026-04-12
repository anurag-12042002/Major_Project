import React, { useState } from 'react'
import { dummyCarData, assets } from '../assets/assets'
import CarCard from '../components/CarCard'

const Cars = () => {
  const [category, setCategory] = useState('All')
  const [fuelType, setFuelType] = useState('All')

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4'>
        <div className='text-sm text-gray-500'>
          <span>Home</span> / <span className='text-primary font-medium'>Cars</span>
        </div>
        <div className='relative w-full md:w-auto'>
          <input type="text" placeholder="Search cars..." className='w-full md:w-72 border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:border-primary' />
          <img src={assets.search_icon} alt="search" className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50' />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Sidebar Filters */}
        <div className='w-full lg:w-64 flex-shrink-0 space-y-8'>
          <div>
            <h3 className='font-semibold text-lg mb-4 text-gray-800'>Categories</h3>
            <div className='space-y-3'>
              {['All', 'Sedan', 'SUV', 'Hatchback', 'Luxury'].map((cat) => (
                <label key={cat} className='flex items-center gap-3 cursor-pointer'>
                  <input type="radio" name="category" checked={category === cat} onChange={() => setCategory(cat)} className='w-4 h-4 text-primary focus:ring-primary appearance-none border border-gray-300 rounded-full checked:bg-primary checked:border-transparent' />
                  <span className='text-gray-600'>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className='font-semibold text-lg mb-4 text-gray-800'>Fuel Type</h3>
            <div className='space-y-3'>
              {['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'].map((fuel) => (
                <label key={fuel} className='flex items-center gap-3 cursor-pointer'>
                  <input type="radio" name="fuel" checked={fuelType === fuel} onChange={() => setFuelType(fuel)} className='w-4 h-4 text-primary focus:ring-primary appearance-none border border-gray-300 rounded-full checked:bg-primary checked:border-transparent' />
                  <span className='text-gray-600'>{fuel}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className='flex-1'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {dummyCarData.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cars
