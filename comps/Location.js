import { useState } from "react";

const Import = () => {
    const [location, setLocation] = useState('')
    return (
        <>
        <div>
        <p className="font-bold text-gray-900 mb-3">Location</p>
        <input type="text" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg py-2 px-4 w-full outline-none" placeholder="Location..." onChange={(e) => {setLocation(e.target.value)}} required></input>
        </div>
        </>
    )
}


export default Import;