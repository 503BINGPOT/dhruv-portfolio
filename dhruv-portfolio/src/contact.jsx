import React, { useRef,useState} from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const  Contact = () => {
    const [loading, setLoading] = useState(false);
    const form = useRef()
    const [success ,setSuccess] = useState(false)

const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true); // start loading

  emailjs.sendForm('service_lzu2ene', 'template_ri9f77r', form.current, 'p05DiZKTFCWFDwgFG')
    .then((result) => {
      console.log(result.text);
      setLoading(false);
      setSuccess(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setLoading(false);
    });
};

  return (
    <section
    id="contact"
    className='min-h-screen flex flex-col justify-center items-center px-8 md:px-20 py-10 md:py-20 bg-gradient-to-br from-gray-900/80 to-black/80 text-white'>
      <div className=" flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-6 md:gap-10">
        <div className='flex-1'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          Let's <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500'>Connect</span>
        </h2>
        <p className='text-gray-400 mb-4'>
          I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
        </p>


        <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
          <div className='flex-1 space-y-2'>
          <div className='flex items-center gap-4'>
          <div className='p-4 bg-gray-800 rounded-full text-white hover:scale-110 transition-all duration-200 bg-gradient-to-br from-gray-900/90 to-gray-800'>
          <FaEnvelope size={20}/>
          </div>
          <div>
            <p className='font-semibold'>Email</p>
            <p className='text-gray-400'>dhruv_ug_23@ei.nits.ac.in</p>
          </div>
          </div>

                <div className="flex items-center gap-4">
            <div className="p-4 bg-gray-800 rounded-full text-white bg-gradient-to-br from-gray-900/90 to-gray-800 hover:scale-110 transition-all duration-200">
              <FaPhone size={20} />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-400">+91 6281558501</p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='p-4 bg-gray-800 rounded-full text-white bg-gradient-to-br from-gray-900/90 to-gray-800 hover:scale-110 transition-all duration-200'>
              <FaMapMarkedAlt size={20}/>
            </div>
            <div>
            <p className='font-semibold'>Location</p>
            <p className='text-gray-400'>Silchar,Assam</p>
          </div>
          </div>
        </div>
        </div>
                </div>

      <form ref={form} onSubmit={sendEmail} className='flex-1 bg-[#111827] p-6 md:p-8 rounded-xl space-y-4 md:space-y-6 shadow-md mt-6 md:mt-8'>
        <div>          
          <label className='block font-semibold mb-1'>Name</label>
            <input
            type='text'
            name='user_name'
            placeholder='Your Name'
            required
            className='w-full px-4 py-2 bg-[#0f1172a] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500'
            />
            </div>


            <div>
          <label className='block font-semibold mb-1'>Email</label>
            <input
            type='email'
            name='user_email'
            placeholder='your.email@example.com'
            required
            className='w-full px-4 py-2 bg-[#0f1172a] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500'
            />
            </div>

            <div>
          <label className='block font-semibold mb-1'>Message</label>
       <textarea
        name='message'
        rows="4"
        placeholder='Tell me about your project...'
        required
        className='w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
       />
            </div>
   <button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 rounded-md font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
>
  {loading ? 'Sending...' : 'Send Message'}
</button>
{success && <p className='text-green-400 text-sm mt-2'>Message sent Successfully!</p>}

      </form>
        </div>

  <div className="flex justify-center mt-4 md:mt-8">
        <div className=' flex flex-row gap-4 md:gap-6 text-2xl md:text-3xl text-gray-300 '>
          <h3 className='py-2 md:py-4 flex text-lg md:text-2xl font-semibold '>Find me on</h3>
           <div className='p-3 md:p-4  bg-gray-800 rounded-full text-white hover:scale-110 transition-all duration-200'>
          <a
          href='https://www.linkedin.com/in/dhruv-mantri-952965266/'
          target='_blank'
          rel="noopener noreferrer"
          >
            <FaLinkedin/>
          </a>
          </div>
          <div className='p-3 md:p-4 bg-gray-800 rounded-full text-white hover:scale-110 transition-all duration-200'>
          <a
          href='https://github.com/503BINGPOT'
          target='_blank'
          rel="noopener noreferrer"
          >
            <FaGithub/>
          </a>
          </div>
        </div>
        </div>
    </section>
    
  )
}

export default Contact