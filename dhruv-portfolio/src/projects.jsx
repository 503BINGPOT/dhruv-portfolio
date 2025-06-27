import React from 'react'


const projects = [
  {
    title: "Grocify",
    description:"Developed a responsive grocery store website named **Grocify** using Tailwind CSS, featuring clean UI, product sections, and modern design elements.",
    image: 'hq720.jpg',
    tags: ['Tailwind CSS'],
    link: "https://github.com/503BINGPOT/Grocify-Tailwind-CSS"
  },
    {
    title: "TicTacToe",
    description:"A simple React-based Tic-Tac-Toe game with interactive UI, player turns, win detection, and reset functionality for replaying matches.",
    image: 'tictactor.png',
    tags: ['Tailwind css', 'React'],
    link: "https://github.com/503BINGPOT/Tic-Tac-Toe"
  },
  //   {
  //   title: "",
  //   description:"",
  //   image: "",
  //   tags: [],
  //   link: ""
  // },
]

const Project = () => {
  return (
    <section 
    id="project"
    className='min-h-screen bg-gradient-to-br from-gray-900/80 to-black/80 text-white px-6 py-20 flex flex-col items-center'>
        <h2 className='text-5xl font-bold mb-4'>
          My <span className='text-transparent bg-clip-text bg-gradient-to-tr from-gray-300 to-gray-500'>Projects</span>
        </h2>
        <p className='text-center text-gray-400 mb-16 text-lg'>
          Here are some of my recent projects that showcase my skills and passion for development
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4'>
          {projects.map((project,index) => (
            <div
            key={index}
            className='bg-[#0e121c] rounded-2xl overflow-hidden shadow-md hover:scale-105 transition duration-300 ease-in-out w-90'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover'/>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <p className='text-gray-400 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, i) => (
                    <span
                    key={i}
                    className='bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className='text-white font-medium hover:underline flex items-center gap-1'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>

            </div>
          ))}
        </div>
    </section>
  )
}

export default Project