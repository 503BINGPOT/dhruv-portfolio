import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SkillsData = [
    {
        title: 'Frontend',
        skills: ['React','Tailwind CSS','JavaScript','Next.js']
    },
    {
        title: 'Backend',
        skills: ['Node.js','mySQL']
    },
    {
        title: 'Tools & Others',
        skills: ['GitHub','Figma','MATLAB']
    },
    {
        title: 'AI/ML',
        skills: ['Python','numPy'],
    },
];

const Skills = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <section
    id="skills"
    className='min-h-screen bg-gradient-to-tl from-gray-900 to-black/80 text-white px-6 py-20 flex flex-col items-center '>
        <h2 className='text-5xl font-bold mb-4'>
            My <span className='text-transparent bg-clip-text bg-gradient-to-tr from-gray-300 to-gray-500'>Skills</span>
        </h2>
        <p className='text-centre text-gray-400 mb-16 text-lg'>
        Technologies and tools I use to bring ideas to life.
        </p>

        <div className='px-3 flex flex-col md:flex-row justify-center w-full max-w-6xl gap-6 md:gap-5'>
        {SkillsData.map((section, index) => (
            <div
            key={index}
            className='border border-gray-800 p-6 md:p-8 rounded-xl shadow-md max-w-sm w-full md:w-60 h-75 bg-gradient-to-br from-gray-00 to-gray-900 hover:scale-110 transistion-all duration-300 mb-6 md:mb-0'
            >
                <h3 className='text-xl font-semibold text-center mb-6'>{section.title}</h3>
                <ul className='mt-10 space-y-4 text-gray-400 text-md font-medium'>
                    {section.skills.map((skill,i) => (
                        <li key={i} className='text-center'>{skill}</li>
                    ))}
                </ul>
            </div>
        ))}
        </div>

        <div ref={ref} className='mt-20 grid grid-cols-1 sm:grid-cols-4 gap-6 text-center'>
            {[
                { value: 4,label: 'Hackathons joined',color:'text-blue-400'},
                { value: 50,label:'DSA Questions Solved',color:'text-green-400'},
                { value: 5,label:'Projects Made',color:'text-green-400'},
                { value: 20,label:'Github Commits',color:'text-orange-400'},
            ].map((item,index) => (
                <div key={index} className='bg-[#111214] border border-gray-700 py-8 px-4 rounded-2xl shadow-md'>
                    <h3 className={'text-3xl font-bold ${item.color}'}>
                        {inView && (
                            <CountUp end={item.value} duration={2}/>
                        )}
                        {item.suffix || '+'}
                    </h3>
                    <p className='mt-2 text-gray-300'>{item.label}</p>
                </div>
            ))}
        </div>

        <div className='mt-10 flex justify-center'>
            <div className='bg-[#111214] border border-gray-700 px-8 py-4 rounded-full flex items-center gap-3 shadow-md'>
                <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                <span className='w-3 h-3 bg-blue-500 rounded-full'></span>
                <span className='w-3 h-3 bg-purple-500 rounded-full'></span>
                <span className='ml-3 text-gray-200 font-medium'>
                Always learning and exploring new technologies
                </span>
            </div>
        </div>
    </section>
  )
}

export default Skills;