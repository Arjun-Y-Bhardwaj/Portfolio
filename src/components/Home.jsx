import React from 'react'
import myPhoto from '../photo.jpg'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
    const a = 'PROGRAMMER'
    return (
        <div
            id='home'
            className='h-screen w-screen flex flex-row justify-center items-center gap-40'
        >
            <div className=' '>
                <div className='text-6xl font-bold '>
                    ARJUN BHARDWAJ
                </div>
                <p className='text-3xl flex flex-row mt-8 items-end h-8'>
                    <div>I am a &nbsp;</div>
                    <span className='font-bold text-fuchsia-400 text-4xl'>
                        <Typewriter
                            words={['Developer', 'Competitive Programmer']}
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            pauseSpeed={2000}
                            loop={true}
                        />
                    </span>
                </p>
            </div>
            <img
                src={myPhoto}
                className=' h-3/5 rounded-full shadow-md  shadow-fuchsia-400'
            />
        </div>
    )
}
