import Image from 'next/image'
import Loopcraft from '../images/Loopcraft.png'
import Agency from '../images/Agency.png'

const Companies = () => {

    const companies = [
        {id : 1 , title : 'Template Factory' , img : Loopcraft },
        {id : 2 , title : 'Agency Analytics' , img : Agency },

    ]
    return (
        <>
        <div>
            <p className='font-bold mb-3'>Top Companies</p>
            {companies.map((item) => (
                <div key={item.id} className = 'flex gap-2 mb-2 items-center'>
                    <Image
                     alt={item.title}
                     src = {item.img}
                     width = {40}
                     height = {40}
                     className = 'rounded-full'
                     />
                    <p>{item.title}</p>
                </div>
            ))}

        </div>
        </>
    )
}


export default Companies