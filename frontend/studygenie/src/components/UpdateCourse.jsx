import { useState } from "react";

const initialState={
    title:"",
    level:"",
    description:""
}
function UpdateCourse() {
    const CourseTitleArr=['FullStack'];
    const [formState,setFormState]=useState(initialState);
    const handelSubmit=(e)=>{
        e.preventDefault()
    }
    const handelChange=(e)=>{
        const {name,value}=e.target
        setFormState({...formState,[name]:value});
        console.log(formState)
    }
    return (  
        <>
            <form action="" className="updatecourse">
                <input type="text" placeholder="Enter Course Title" />
                <select name="courseTitle" id="courseTitle" onChange={handelChange}>
                    {CourseTitleArr.map((course)=>{
                        return <option value="course">course</option>
                    })}
                </select>
                <select name="level" id="level" onChange={handelChange}>
                    <option value="">Select Level of Course</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <textarea name="description" id="description" placeholder="Details of Course" onChange={handelChange}>

                </textarea>
            </form>
        </>
    );
}

export default UpdateCourse;