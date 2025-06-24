import { useContext, useEffect, useState } from "react";
import axios from 'axios'
export const CourseContex=useContext()

const CourseContexProvider=({children})=>{
    const [currentCourse,setCurrentCourse]=useState(null)

    const getCourse=async()=>{
        try {
            let token=localStorage.getItem('token')
            let res=await axios.get('',token)
            let data=await res.data
            console.log(data)
            setCurrentCourse(data)
        } catch (error) {
            console.log("some thing went wrong")
        }
    }
    useEffect(()=>{
        getCourse()
    },[])
    return(
        <CourseContex.Provider value={{currentCourse}}>
            {children}
        </CourseContex.Provider>
    )
}