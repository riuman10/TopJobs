

import Logo from './icons/Logo'

const NavBar = () => {
    return (
        <div className="flex justify-between">
            <div className='flex'>
                <Logo />
                <p>Find the job that fits you the best</p>
            </div>
            <div>
                <a>Find a job</a>
                <a>Categories</a>
                <a>Community</a>
            </div>
        </div>
    )
}

export default NavBar;