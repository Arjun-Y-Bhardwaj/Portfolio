import React from 'react'

export default function Contact() {
    return (
        <div
            id='contact'
            className='h-screen w-screen flex justify-center items-center text-white '
        >
            <div className='bg-purple-300 w-3/4 h-2/3 bg-opacity-50 shadow-gray-900 shadow-md'>
                <div className='ml-20 mt-40 w-1/5'>
                    <div className='mt-[-8vh] '>
                        <h1 className='text-2xl font-bold  '>EMAIL ID</h1>
                        <p className='text-xl font-bold' >arjunyiannisbhardwaj@gmail.com</p>
                    </div>
                    <div className='mt-[8vh] '>
                        <h1 className='text-2xl font-bold'>PHONE NUMBER</h1>
                        <p className='text-xl font-bold'>8851449651</p>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-45 left-1/2 h-3/4 w-1/3 bg-purple-800 rounded-lg z-0 shadow-purlple-600 shadow-lg'>
            <form action="mailto:arjunyiannisbhardwaj@gmail.com" method="post" enctype="text/plain"

                    className='flex flex-col items-center mt-12 gap-4'
                >
                    <input type="text" placeholder='Enter your name'
                        className='input-box'
                    />
                    <input type="email" placeholder='Enter your email'
                        className='input-box'
                    />
                    <textarea name='message' id='message'  placeholder='Enter your message'
                        className='textarea-box'
                    />
                    <input type="submit" value='Send' className='bg-purple-900 px-6 py-2 rounded-xl text-white cursor-pointer hover:bg-purple-400 hover:text-purple-950 linear duration-100 shadow-sm shadow-black' />
                    
                </form>
            </div>
        </div>
    )
}
