function CurrentCourse() {
    return ( 
        <>
            <div className="course-details">
                <div key={102} className="p-2 shadow-lg w-full sm:w-full md:w-1/2 lg:w-1/3">
                    {/* <h1 className="font-bold ">{course.title}</h1> */}
                    {/* <img src={course.image} alt="" className="w-full"/>
                    <p>{course.description}</p> */}
                </div>
            </div>

            <div className="vidio-links">
                {/* vidio links */}
            </div>
            <div className="notes">
                {/* notes */}
            </div>

            <div className="summary">
                {/* short summary */} 
            </div>
        </>
    );
}

export default CurrentCourse;