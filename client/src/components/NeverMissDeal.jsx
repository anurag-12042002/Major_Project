import React, { useState } from 'react'

const NeverMissDeal = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (email.trim()) {
            setSubscribed(true)
            setEmail('')
            setTimeout(() => setSubscribed(false), 3000)
        }
    }

    return (
        <section className='max-w-6xl mx-auto px-8 py-20'>
            {/* Main Content */}
            <div className='bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl px-8 md:px-16 py-16 md:py-20'>
                <div className='text-center'>
                    {/* Heading */}
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                        Never Miss a Deal
                    </h2>
                    
                    {/* Subheading */}
                    <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
                        Subscribe to our newsletter and get exclusive offers, latest updates, and special deals delivered right to your inbox.
                    </p>

                    {/* Email Subscription Form */}
                    <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto'>
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='flex-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-500 text-gray-900'
                        />
                        <button
                            type='submit'
                            className='px-8 py-3 bg-primary hover:bg-primary-dull transition-all text-white font-semibold rounded-lg whitespace-nowrap cursor-pointer'
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Success Message */}
                    {subscribed && (
                        <p className='mt-4 text-green-600 font-medium animate-pulse'>
                            ✓ Thank you! Check your email for exclusive deals.
                        </p>
                    )}

                    {/* Benefits Section */}
                    <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='flex flex-col items-center'>
                            <div className='text-4xl mb-3'>🎁</div>
                            <h3 className='font-semibold text-gray-900 mb-2'>Exclusive Offers</h3>
                            <p className='text-sm text-gray-600'>Get special discounts and early access to new deals</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='text-4xl mb-3'>📢</div>
                            <h3 className='font-semibold text-gray-900 mb-2'>Latest Updates</h3>
                            <p className='text-sm text-gray-600'>Stay informed about new features and services</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='text-4xl mb-3'>⚡</div>
                            <h3 className='font-semibold text-gray-900 mb-2'>Flash Sales</h3>
                            <p className='text-sm text-gray-600'>Be first to know about limited-time offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NeverMissDeal
