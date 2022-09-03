

const Filter = () => {
    return (
    <>
        <div className="flex flex-col gap-3 text-gray-500">
            <p className="font-bold text-gray-900">Filters</p>
            <div className="flex gap-2">
                <input type="radio" id="huey" name="drone" value="huey" className="text-blue-200"/>
                <label htmlFor="huey">All offers</label>
            </div>
            <div className="flex gap-2">
                <input type="radio" id="huey" name="drone" value="huey"/>
                <label htmlFor="huey">Most Relevent</label>
            </div>
            <div className="flex gap-2">
                <input type="radio" id="huey" name="drone" value="huey"/>
                <label htmlFor="huey">Recommended</label>
            </div>
            <div className="flex gap-2">
                <input type="radio" id="huey" name="drone" value="huey"/>
                <label htmlFor="huey">Most Recent</label>
            </div>
        </div>
    </>
    )
}

export default Filter