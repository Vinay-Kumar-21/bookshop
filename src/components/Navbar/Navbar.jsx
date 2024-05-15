import React from 'react'
import Logo from "../../assets/website/logo.png"
import { FaCaretDown } from 'react-icons/fa'

const Menu=[
    {
        id:1,
        name:"Home",
        link:"/#"
    },
    {
        id:2,
        name:"Best Seller",
        link:"/#services"
    }
];

const DropdownLinks=[
    {
        name:"Best Books",
        link:"/#"
    },
    {
        name:"Authors",
        link:"/#",
    },
    {
        name:"Rental Books",
        link:"/#"
    }
];

function Navbar() {
  return (
    <div className='shadow-lg'>
      <div className="container py-3 sm:-y-0">
        <div className="flex justify-between items-center">
            <div>
                <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={Logo} alt='' className='w-10'/>Books
                </a>
                
            </div>
            <div>
                <ul className='items-center gap-4 hidden sm:flex'>
                    {
                        Menu.map((menu)=>(
                            <li key={menu.id}>
                                <a href={menu.link} className='inline-block py-4 px-4 hover:text-primary duration-200'>{menu.name}</a>
                            </li>
                        ))
                    }

                    <li className="group relative cursor-pointer">
                        <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                        Quick Links
                            <span>
                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                            <ul className="space-y-3">
                                {DropdownLinks.map((data) => (
                                    <li key={data.name}>
                                        <a
                                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                            href={data.link}
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
