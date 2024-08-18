import React from 'react'
import { LuParkingCircle } from "react-icons/lu";
import {motion} from 'framer-motion'




const NavbarMenu = [

    {
        id: 1,
        title: "Home",
        link:"/",
    },
    {
        id: 2,
        title: "Admin",
        link:"/Login1",
    },
    {
        id: 3,
        title: "About Us",
        link:"/AboutUs",
    },
    {
        id: 4,
        title: "Login",
        link:"/Login",
    },
    {
        id: 5,
        title: "Register",
        link:"/SignUp",
    },

];
   
const Navbar = () => {
  return (
    
    
   <nav className="bg-third/40">
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5, delay:0.5}}
    
    className="container flex justify-between items-center- py-4 md:pt-4 gap-14">
        {/*  Logo section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
        <p className="text-primary">Valley<span className='text-secondary'>360</span></p>
        <p className="text-primary">Parking</p>
       
        <LuParkingCircle className='text-green-700'/>
        </div>

        <div className='hidden md:block '>
            <ul className='flex items-center gap-6 text-gray-600'>
                {NavbarMenu.map((menu)=>(
                    <li key={menu.id} className='text-xl'>
                        <a href={menu.link}
                        className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'
                        >{menu.title}</a>
                        </li>
                    ))}
                    
            </ul>
            
        </div>
           
    </motion.div>

   </nav>

  )
}

export default Navbar