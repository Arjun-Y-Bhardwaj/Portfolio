import React from 'react'
import myImage from '../aybanimated.png'
import { SiGithub, SiLinkedin, SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'




export default function About() {
    return (
        <div id='about'
            className='h-screen w-screen flex justify-center items-center text-black'>
            <div className='container  flex flex-row h-2/3 w-2/3'>
                <img src={myImage} alt="" className='h-full w-[] mt-auto mb-auto p-2 rounded-3xl' />
                <div className='ml-20 h-full flex flex-col justify-between bg-purple-300 p-4 rounded-xl'>
                    <div>
                    <h1 className='text-3xl font-bold text-center'>ABOUT ME</h1>
                    <p className='text-xl mt-4 leading-9'>
                    I'm a front-end developer and competitive programmer. I love creating user-friendly websites. Problem-solving and efficient coding are my passions. I stay up-to-date with the latest trends and technologies to continuously improve my skills. I pay close attention to detail and strive for visually appealing designs.
                    </p>
                    </div>
                    <div className=' gap-x-[3vw] mb-10 text-center'>
                        <a href="https://github.com/arjun-y-bhardwaj"><SiGithub className='link-icon' /></a>
                        <a href="https://www.linkedin.com/in/arjun-y-bhardwaj/"><SiLinkedin className='link-icon' /></a>
                        <a href="https://leetcode.com/Arjun_Bhardwaj/"><SiLeetcode className='link-icon' /></a>
                        <a href="https://codeforces.com/profile/Arjun_Bhardwaj"><SiCodeforces className='link-icon' /></a>
                        <a href="https://www.codechef.com/users/arjun_yiannis"><SiCodechef className='link-icon' /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}
