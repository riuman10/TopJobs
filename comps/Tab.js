import { useState } from "react"
import Image from "next/image"
import Heart from './icons/Heart'
import Loopcraft from '../images/Loopcraft.png'
import CleverTech from '../images/CleverTech.png'
import NearSure from '../images/NearSure.png'
import Agency from '../images/Agency.png'
import Search from './icons/Search'

const Tab = () => {
    const [search , setSearch] = useState('');
    const [isHovered , setHovered] = useState(false);

    console.log(isHovered , 'kiwi')
    // Data
    const list = [
        {id : 1 , user : 'Shamheel', company : 'Loopcraft' , title : 'UI UX Designer' , def : 'Marketplace apps similar to olx or bigl but for EU market' , img : Loopcraft },
        {id : 2 , user : 'Kiev', company : 'Agency Analytics' , title : 'Front-End Developer (Website)' , def : 'Marketplace apps similar to olx or bigl but for EU market' , img : Agency },
        {id : 3 , user : 'Shamheel', company : 'Clever Tech' , title : 'Senior Staff React Developer' , def : 'Marketplace apps similar to olx or bigl but for EU market' , img : CleverTech },
        {id : 4 , user : 'Shamheel', company : 'Loopcraft' , title : 'UI UX Designer' , def : 'Marketplace apps similar to olx or bigl but for EU market' , img : NearSure },
        {id : 5 , user : 'Shamheel', company : 'Loopcraft' , title : 'UI UX Designer' , def : 'Marketplace apps similar to olx or bigl but for EU market' , img : Loopcraft },
        {id : 6 , user : 'Kiev', company : 'Agency Analytics' , title : 'Front-End Developer (Website)' , def : 'Marketplace apps similar to olx or bigl but for EU market' , img : Agency }
    ]
    return (
        <>
        <div className="w-full flex items-center border border-gray-200 rounded-lg px-2 mb-2">
            <Search />
            <input 
            type={'text'} 
            placeholder = 'Start Searching...' 
            onChange={e => setSearch(e.target.value)}
            className = 'ml-2 py-2 w-full focus:outline-none'
            /> 
        </div>
        {list.filter((val) => {
            if (search == '') {
                return val
            } else if (val.company.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return val
            }
        }).map((item) => (
            <div key={item.id} className = 'flex flex-col gap-3 border-b-2 border-gray-200 pt-4' 
            onMouseEnter={() => setHovered(true)} onMouseLeave = {() => setHovered(false)}>
                <div className="flex gap-2 items-center">
                    <Image src = {item.img} alt = {item.company} height = {40} width = {40} className = 'rounded-full' /> 
                    <h1 className="text-sm text-gray-700">{item.company}</h1>
                    <p className="text-xs text-gray-400">{item.user}</p>
                </div>
                <div className="relative">
                    <h1 className="font-bold">{item.title}</h1>
                    <p className="text-sm text-gray-400 pb-6">{item.def}</p>
                    <div className="absolute bottom-3 right-3">
                        <Heart className = {`${isHovered ? 'fill-red-500' : ''}`} />
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default Tab;