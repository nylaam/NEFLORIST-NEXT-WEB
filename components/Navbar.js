import React from 'react'
import Link from "next/link"


const Navbar = () => {
  return (
    <div className=' bg-[#fff5f1] h-16 fixed left-0 w-full top-0'>
        <div className="flex flex-row justify-center lg:justify-between md:ml-20 gap-5 md:gap-7 mt-4">
            <div className='font-semibold text-2xl'>FLORIST</div>
            <div className="flex flex-row justify-center md:mr-12 lg:justify-between items-center gap-4 md:gap-5">
              <Link href={'/'} className="hover:text-[#7270dd] text-sm md:text-base font-semibold">
                Home 
              </Link>
              {/* <Link href='#about' className="hover:text-[#7270dd] text-base font-semibold pr-4">
                About 
              </Link> */}
              <Link href='#values' className="hover:text-[#7270dd] text-sm md:text-base font-semibold">
                Values 
              </Link>
              <Link href='#product' className="hover:text-[#7270dd] text-sm md:text-base font-semibold">
                Product 
              </Link>
              <Link href='#moreinfo' className="hover:text-[#7270dd] text-sm md:text-base font-semibold">
                More Info 
              </Link>
              <Link href='#contact' className="hover:text-[#7270dd] text-sm md:text-base font-semibold">
                Contact 
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar