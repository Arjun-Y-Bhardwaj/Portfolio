import React from 'react'

import { RxHome } from 'react-icons/Rx'
import { BsPerson } from 'react-icons/Bs'
import { AiOutlineFundProjectionScreen } from 'react-icons/Ai'
import { BiPhoneCall } from 'react-icons/Bi'

import { Link } from 'react-scroll'
export default function Navbar() {
    return (
        <div className='fixed bottom-4 flex justify-center items-center w-full z-10'>
            <div className='flex gap-24 justify-between p-4 bg-purple-400 rounded-2xl border-black border-2 border-solid z-10 shadow-md shadow-black'>
                <Link
                    to='home'
                    className='nav-items'
                >
                    <RxHome />
                </Link>

                <Link
                    to='about'
                    className='nav-items'
                >
                    <BsPerson />
                </Link>

                <Link
                    to='project'
                    className='nav-items'
                >
                    <AiOutlineFundProjectionScreen />
                </Link>

                <Link
                    to='contact'
                    className='nav-items'
                >
                    <BiPhoneCall />
                </Link>
            </div>

        </div>
    )
}
