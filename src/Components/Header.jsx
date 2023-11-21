import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'



export default function Header() {
  return (
   <header className='bg-gray-300 shadow-md  '>
   <div className="flex  justify-between items-center max-w-6xl mx-auto p-3">
    <Link to='/'>
   <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
   <span ><img className='h-8' src="\src\assets\Screenshot_2023-11-19_091600-removebg-preview.png" alt="" srcset="" /></span>
        <span >Smart</span>
        <span className='text-red-600'>Style</span>
       
    </h1>
    </Link>

    <form  className='bg-gray-200 p-3 rounded-lg flex items-center'>
        <input type="text" className='bg-transparent focus:outline-none w-24 sm:w-64 ' placeholder='Search...' />
        <FaSearch className='text-gray-700'/>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>  <li className='hidden sm:inline text-gray-700 hover:underline'>Home</li></Link>
          <Link to='/about'>  <li  className='hidden sm:inline text-gray-700 hover:underline'>About</li></Link>
           <Link to='/sign-in'> <li  className=' text-gray-700 hover:underline'>Sign in</li></Link>
        </ul>
   
   </div>
   </header>
  )
}
