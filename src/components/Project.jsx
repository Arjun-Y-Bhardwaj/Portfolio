import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaExternalLinkAlt } from 'react-icons/fa'
import todo from '../images/todo.png'
import banking from '../images/banking.png'

export default function Project() {
    const projects = [
        {
            id: uuidv4(),
            name: 'Todo App',
            link: 'https://github.com/Arjun-Y-Bhardwaj/Todo-List'it,
            discription: 'A todo list made using HTML, CSS and JAVASCRIPT.',
            image: todo
        },
        {
            id: uuidv4(),
            name: 'Banking',
            link: 'https://banking-ayb.netlify.app/',
            discription: 'A responsive webiste to make deposit and make transactions.',
            image: banking
        },
    ]
    const makeProjects = projects.map((project) => {
        return (
            <div className='flex flex-col items-center justify-center m-4 '>
                <div className='flex gap-6 items-center'>
                    <div className='text-[5vh] font-bold'>
                        {project.name}
                    </div>
                    <a href={project.link} className="animate-project">
                        <FaExternalLinkAlt className='text-2xl hover:scale-125 duration-150 ease-out' />
                    </a>
                </div>
                <p className='text-xl m-2'>
                    {project.discription}
                </p>
                <img
                    src={project.image}
                    alt="hello"
                    className=" h-[32vh] w-[28vw] rounded-2xl mt-4 shadow-black shadow-md"
                />
            </div>
        )
    })
    return (
        <div
            id='project'
            className='h-screen w-screen '
        >
            <div className='text-6xl text-center pt-[15vh] pb-[5vh] font-bold'>
                Projects

            </div>
            <div className='w-screen grid grid-cols-2 px-[10vw]'>
                {makeProjects}
            </div>
        </div>
    )


}
