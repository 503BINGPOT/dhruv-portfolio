import {FaDownload} from 'react-icons/fa'
import profileImage from '../public/DhruvMantri.jpg'
import cvPdf from '../public/DhruvMantri.pdf'

const About = () => 
  {
  return (
    <section
      id="about"
      className="pt-24 min-h-screen flex flex-col justify-center items-center px-8 md:px-20 bg-gradient-to-tl from-gray-900/80 to-black/80 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        <div className='flex-1'>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Me</span>
          </h2>
          <p className="text-gray-400 mb-4">
            I'm a 3rd-year B.Tech student at NIT Silchar, pursuing Electronics and Instrumentation Engineering. My passion lies in the world of technology, particularly in areas like Artificial Intelligence, Machine Learning, and Web Development. I have a strong foundation in frontend development, with experience building responsive and user-friendly interfaces.
            <br></br>Alongside this, I actively explore Data Structures and Algorithms (DSA) to sharpen my problem-solving skills and enhance my technical depth.
          </p>
          <p className="text-gray-400 mb-6">
           I'm always eager to learn, build, and contribute to impactful projects that bridge the gap between innovation and real-world solutions.
          </p>
            <button 
            onClick={() => window.open(cvPdf,'_black')}
            className='flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md text-sm font-semibold'>
                <FaDownload/> Download CV
            </button>
        </div>

<div className="flex-1 flex justify-center hover:scale-105 transition-all duration-300">
  <div className="bg-[#131313] p-4 rounded-2xl border border-gray-800 w-[350px] h-[420px] md:w-[400px] md:h-[460px] lg:w-[450px] lg:h-[500px]">
    <img
      src={profileImage}
      alt="About me"
      className="rounded-xl object-cover w-full h-full"
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default About;
