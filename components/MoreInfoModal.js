import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
const MoreInfoModal = () => {
  const info=[
    {
      title:'What are the most popular types of flowers for gifts?',
      des:'Types of flowers that are currently popular at certain events and are not only suitable for events but you can give to special people are written flowers'
    },
    {
      title:'Can your florist create a special flower arrangement for a specific event such as a wedding or birthday?',
      des:'Of course, we provide services according to customer requests'
    },
    {
      title:'Can your florist help me choose flowers that suit my budget?',
      des:'Very possible, we offer many price variants and also types of flowers that suit your financial budget'
    },
    {
      title:'Can I order flowers online and pick them up at your shop?',
      des:'To customers who choose to take orders to the store directly is very welcome, you can also browse our collections'
    },
    {
      title:'Is there a price difference between buying flowers online and buying them in person at your flower shop?',
      des:'The difference in price of the two methods is fairly cheap, there will be admin fees if you make transactions online'
    },
    {
      title:'What should I do if I am not satisfied with the flowers I received from your store?',
      des:'You can make a complaint using the available means at our contact, give us suggestions, feedback and criticism to improve the quality of our services'
    },
  ]
  return (
    <section id='moreinfo'>
      <div className="container mx-auto py-20">
            <p className="text-gray-500 text-2xl font-medium uppercase my-3">
          MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
      Common questions
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      {info.map((inf,i)=>{
        return(
      
    <Disclosure key={i} >
        {({ open }) => (
          <div className='group'>
            <Disclosure.Button className="flex flex-col group-hover:bg-[#524fd5] group-focus:bg-[#524fd5] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
              <div className="flex justify-between items-center w-full">
              <span className='group-hover:text-white  group-focus:text-white'>{inf.title}</span>
              <BsFillPlusCircleFill
                className={`${
                  open ? 'rotate-180 transform' : ''
                }  text-[#524fd5] text-2xl group-hover:text-white  group-focus:text-white `}
              />
              </div>
           
                   <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
              {inf.des}
            </Disclosure.Panel>
            </Disclosure.Button>
       
          </div>
        )}
      </Disclosure>
       
        )
      })}
  
 
    </div>
  </div>
    </section>
    
  )
}

export default MoreInfoModal