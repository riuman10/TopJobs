import Filter from './Filter'
import Location from './Location'
import DropDown from './DropDown'

const LeftBar = () => {
    return (
        <>
        <div className='w-72 flex flex-col gap-4'>
        <Filter />
        <Location />
        <DropDown title= 'Type of work'/>
        <DropDown title= 'Industries'/>
        </div>
        </>
    )
}


export default LeftBar;