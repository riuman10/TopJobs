import Image from "next/image"
import Background from '../images/BGG.png'

const Card = () => {
    return (
        <>
        <div className="relative h-96 flex flex-col justify-center pl-6 mt-4">
            <h1 className="font-bold text-2xl w-[200px] text-white mb-2">Want keep up-to-date?</h1>
                <p className="text-white">Get a daily email of all new jobs</p>
            <Image src={Background} layout = 'fill' alt="hmm" className="-z-50" />
        </div>
        </>
    )
}

export default Card;