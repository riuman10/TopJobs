import Views from "./Views";
import Companies from './Companies'
import Card from './Card'

const RightBar = () => {
    return (
        <>
        <div className="w-72 flex flex-col gap-3">
           <Views />
           <Companies />
           <Card />
        </div>
        </>
    )
}


export default RightBar;