

import Logo from './icons/Logo'

const NavBar = () => {
    return (
        <div className="flex justify-between items-center ml-24 my-6">
            <div className='flex items-center gap-4'>
                <Logo />
                <p className='text-xs text-gray-500'>Find the job that fits you the best</p>
            </div>
            <div className='flex items-center text-sm text-gray-500'> 
                <div className='flex gap-6'>
                    <a href=''>Find a job</a>
                    <a href=''>Categories</a>
                    <a href=''>Community</a>
                </div>
                <button className='bg-violet-600 text-white font-medium py-2 px-4 ml-8 mr-24 rounded-md'>Post a job</button>
            </div>
        </div>
    )
}

export default NavBar;