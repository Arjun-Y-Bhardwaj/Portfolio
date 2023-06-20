import React from 'react'
import {Link} from 'react-scroll'
export default function Header() {
    return (
        <div
            id='header'
            className='inset-0 fixed h-12 w-full bg-slate-900 z-50'
        >
            <div className='mx-20 text-yellow-200 flex flex-row justify-between'>
                <div className='flex flex-col items-center'>
                    <div>Arjun</div>
                    <div>Bhardwaj</div>
                </div>
                <Link to='contact' className='flex flex-col items-center cursor-pointer'>
                    <div>Contact</div>
                    <div>Me</div>
                </Link>
            </div>

        </div>
    )
}
