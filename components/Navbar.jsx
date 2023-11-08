import Link from 'next/link'
import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  return (
    <>
    <ToastContainer/>
            <header className="w-full md:w-[70%] py-3 px-2 mx-auto ">
                <nav className='w-full flex justify-between items-center'>
                    <Link href={'/'} className='font-bold text-2xl'>
                        Crud App
                    </Link>
                    <ul className='flex gap-x-4 font-semibold'>
                        <li>
                            <Link href={'/'} className=''>Home</Link>
                        </li>
                        <li>
                        <Link href={'/about'} className=''>About</Link>

                        </li>
                        <li>
                        <Link href={`/contact/${Math.random()*1000}`} className=''>Contact</Link>

                        </li>
                    </ul>
                </nav>
            </header>
    </>
  )
}

export default Navbar