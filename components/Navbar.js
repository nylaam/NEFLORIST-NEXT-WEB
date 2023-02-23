import Link from "next/link"
import React, { useState } from "react"
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
    const links =[
        {
            id: 1,
            name:'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Values',
            link: '#values'
        },
        {
            id: 3,
            name: "Product",
            link: '#product'
        },
        {
            id: 4,
            name: "More Info",
            link: '#moreinfo'
        },
        {
          id: 5,
          name: "Contact",
          link: '#contact'
      },
    ]
    return (
    <>
        <div className=' bg-[#fff5f1] h-16 fixed left-0 w-full top-0'>
        <div className="flex flex-row justify-center lg:justify-between md:ml-20 gap-80 md:gap-7 mt-4">
        <div className='font-semibold text-2xl'>NEY FLORIST</div>

                <ul className="hidden md:flex gap-4 justify-between items-center px-14">
                    <li>
                    <Link href='/' className="hover:text-[#d042ac] text-sm md:text-base font-semibold">
                            Home  
                        </Link>
                    </li>
                    <li>
                    <Link href='#values' className="hover:text-[#d042ac] text-sm md:text-base font-semibold">
                            Values
                        </Link>
                    </li>
                    <li>
                    <Link href='#product' className="hover:text-[#d042ac] text-sm md:text-base font-semibold">
                            Product
                        </Link>
                    </li>
                    <li>
                    <Link href='#moreinfo' className="hover:text-[#d042ac] text-sm md:text-base font-semibold">
                            More Info
                        </Link>
                    </li>
                    <li>
                    <Link href='#contact' className="hover:text-[#d042ac] text-sm md:text-base font-semibold">
                            Contact
                        </Link>
                    </li>
                </ul>
                
                
                <div onClick={() => setNav(!nav)} className="block cursor-pointer md:hidden text-[24px] text-[#d042ac]  pr-4">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                    {nav && (
                        <>
                        <ul className="flex flex-col justify-center items-center absolute top-14 left-0 w-full h-200 bg-gradient-to-b from-pink-200 to-pink-200 text-white">
                        {links.map(({id, name, link}) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize py-4 text-2xl"
                                    onClick={() => setNav(!nav)}
                                >
                                <Link href={link}>{name}</Link>
                                </li>
                            ))}
                        </ul>
                        </>
                    )}
            </div>
        </div>
    </>
    )
}

export default Navbar