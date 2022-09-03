import Image from "next/image"
import Logo from '../images/hero.png'

const Hero = () => {
    return (
        <>
        <div className="h-[400px] flex flex-col items-center justify-center relative">
            <h1 className='text-5xl font-bold mb-6 text-white w-96 text-center'>Top job boards for professionals</h1>
            <p className='w-96 text-center text-white'>
                Discover your next career move with over 15 000 opening vacancies, customer support, sowtware, design anywhere in the world or remotely.
            </p>
            <Image src={Logo} layout = 'fill' alt="hero" objectFit="cover" className="-z-50" />
        </div>
        </>
    )
}


export default Hero