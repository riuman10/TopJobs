

const DropDown = ({title, }) => {
    return (
        <>
            <p className="font-bold text-gray-900 mb-3">{title}</p>
                <select name="cars" id="cars" className="px-4 text-sm text-gray-400 py-2 w-full border rounded-lg">
                <option value="javascript">Hello Hello</option>
                <option value="react">Work</option>
                </select>
        </>
    )
}


export default DropDown;