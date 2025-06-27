import React from 'react'

const Education = () => {
  return (
    <section
    id="education"
    className='min-h-screen snap-start bg-gradient-to-br from-gray-900/80 to-black/80 text-white px-6 py-20 flex flex-col items-center'>
    <h2 className='text-5xl font-bold mb-4'>
        My <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500'>Education</span>
    </h2>
    <p className='text-center text-gray-400 max-w-xl mb-16 text-lg'>
        Building a strong foundation through continuous learning and academic excellence.
    </p>
    <div className='flex flex-col gap-10 w-full max-w-3xl'> 
        <div className='bg-[#181a1b] rounded-xl border border-gray-700 p-6 flex justify-between items-start shadow-md hover:scale-110 transistion-all duration-400'>
            <div>
                <h3 className='text-xl font-semibold'>National Institute of Technology Silchar</h3>
                <p className='text-gray-400'>Bachelors of Technology </p>
                <p className='text-gray-500 mt-2'>
                    Electronics And Instrumentation Engineering
                </p>
            </div>
            <div className='text-right'>
                <p className='text-sm text-gray-400'>2023-2027</p>
                <p className='font-bold text-gray-200 mt-1'>7.99 CGPA</p>
            </div>
        </div>

        <div className='bg-[#181a1b] rounded-xl border border-gray-700 p-6 flex justify-between items-start shadow-md hover:scale-110 transistion-all duration-400'>
            <div>
                <h3 className='text-xl font-semibold'>FIITJEE</h3>
                <p className='text-gray-400'> Higher Secondary Certificate </p>
                <p className='text-gray-500 mt-2'>
                    MPC
                </p>
            </div>
            <div className='text-right'>
                <p className='text-sm text-gray-400'>2021-2023</p>
                <p className='font-bold text-gray-200 mt-1'>94%</p>
            </div>
        </div>

        <div className='bg-[#181a1b] rounded-xl border border-gray-700 p-6 flex justify-between items-start shadow-md hover:scale-110 transistion-all duration-400'>
            <div>
                <h3 className='text-xl font-semibold'>Timpany Senior Secondary School</h3>
                <p className='text-gray-400'>Secondary School Certificate </p>
                <p className='text-gray-500 mt-2'>
                    CBSE Board
                </p>
            </div>
            <div className='text-right'>
                <p className='text-sm text-gray-400'>2010-2021</p>
                <p className='font-bold text-gray-200 mt-1'>91%</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Education