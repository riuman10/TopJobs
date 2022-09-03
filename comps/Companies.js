import TemplateFactory from './icons/templateFactory'
import Agency from './icons/Agency'
import Image from 'next/image'

const Companies = () => {

    const companies = [
        {id : 1 , title : 'Template Factory' , img :  <TemplateFactory />},
        {id : 2 , title : 'Agency Analytics' , img :  <Agency />},

    ]
    return (
        <>
        <div>
            <p className='font-bold mb-3'>Top Companies</p>
            {companies.map((item) => (
                <div key={item.id} className = 'flex gap-2'>
                    <Image
                     alt={item.title}
                     src = {item.img}
                     size ={500}
                     />
                    <p>{item.title}</p>
                </div>
            ))}

        </div>
        </>
    )
}


export default Companies