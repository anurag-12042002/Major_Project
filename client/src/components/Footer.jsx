import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white mt-20'>
            {/* Main Footer Content */}
            <div className='max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8'>
                
                {/* Company Info */}
                <div>
                    <h3 className='text-2xl font-bold mb-4 text-primary'>CarRental</h3>
                    <p className='text-gray-400 text-sm mb-6'>
                        Your trusted platform for renting and listing luxury vehicles. Experience premium service and seamless booking.
                    </p>
                    <div className='flex gap-4'>
                        <a href='#' className='text-gray-400 hover:text-primary transition-colors'>
                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                            </svg>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-primary transition-colors'>
                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.08-7.81 0-11z'/>
                            </svg>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-primary transition-colors'>
                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.834 8.207 11.57.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.735 8.205-6.267 8.205-11.569 0-6.627-5.373-12-12-12z'/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
                    <ul className='space-y-2 text-sm text-gray-400'>
                        <li>
                            <a href='/' className='hover:text-primary transition-colors'>Home</a>
                        </li>
                        <li>
                            <a href='/car' className='hover:text-primary transition-colors'>Browse Cars</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary transition-colors'>About Us</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary transition-colors'>How It Works</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary transition-colors'>Contact Us</a>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className='text-lg font-semibold mb-4'>Services</h4>
                    <ul className='space-y-2 text-sm text-gray-400'>
                        <li>
                            <a href='#' className='hover:text-primary transition-colors'>Car Rental</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary transition-colors'>List Your Car</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary transition-colors'>Insurance</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary transition-colors'>Driver Verification</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary transition-colors'>Support</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
                    <ul className='space-y-3 text-sm text-gray-400'>
                        <li className='flex gap-2'>
                            <span>📍</span>
                            <span>123 Business Ave, Tech City, TC 12345</span>
                        </li>
                        <li className='flex gap-2'>
                            <span>📧</span>
                            <a href='mailto:support@carrental.com' className='hover:text-primary transition-colors'>support@carrental.com</a>
                        </li>
                        <li className='flex gap-2'>
                            <span>📞</span>
                            <a href='tel:+1234567890' className='hover:text-primary transition-colors'>+1 (234) 567-890</a>
                        </li>
                        <li className='flex gap-2'>
                            <span>🕐</span>
                            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className='bg-gray-950 border-t border-gray-800 py-8'>
                <div className='max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-sm text-gray-500'>
                        &copy; 2024 CarRental. All rights reserved.
                    </p>
                    <div className='flex gap-6 text-sm text-gray-500'>
                        <a href='#' className='hover:text-primary transition-colors'>Privacy Policy</a>
                        <a href='#' className='hover:text-primary transition-colors'>Terms of Service</a>
                        <a href='#' className='hover:text-primary transition-colors'>Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
