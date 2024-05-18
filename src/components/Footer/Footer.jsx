import React from 'react'
import { FaInstagram,FaFacebook,FaLinkedin,FaLocationArrow,
    FaMobileAlt
 } from 'react-icons/fa'
import FooterLogo from '../../assets/website/logo.png'

function Footer() {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-950'>
        <div className="container">
            <div className='grid md:grid-cols-3 py-5'>
                {/* company Details */}
                <div className='py-8 px-4'>
                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left
                    text-justify mb-3 flex items-center gap-3'>Books Store</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Deleniti, consequatur? Sapiente facere cumque fugit{" "}</p>
                    <br/>
                    {/* social links */}
                    <div className='flex items-center gap-3 mt-3'>
                        <FaLocationArrow/>
                        <p>Banglore,Karnataka</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaMobileAlt/>
                        <p>+91 1234567897</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <a href='#'>
                            <FaInstagram className='text-2xl'/>
                        </a>
                        <a href='#'>
                            <FaFacebook className='text-2xl'/>
                        </a>
                        <a href='#'>
                            <FaLinkedin className='text-2xl'/>
                        </a>
                    </div>
                </div>
                {/* Links section */}
                <div></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
