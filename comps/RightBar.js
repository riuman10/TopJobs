

const RightBar = () => {

    const views = [
        {id : 1, title : 'UI UX Designer', industry : 'Template Factory'},
        {id : 2 , title : 'Front-End Developer (Website)' , industry : 'Agency Analytics'},
        {id : 3 , title : 'Senior Staff React Developer' , industry : 'Clever Tech'},
        {id : 4 , title : 'UI UX Designer' , industry : 'Practice'}
    ]
    return (
        <>
        <div className="w-72">
            <p className="font-bold mb-3">Recent View</p>
            {views.map((item) => (
                <div key={item.id} className = 'mb-3'>
                    <h1 className="text-xs text-gray-700">{item.industry}</h1>
                    <p className="text-gray-900">{item.title}</p>
                </div>
            ))}
        </div>
        </>
    )
}


export default RightBar;