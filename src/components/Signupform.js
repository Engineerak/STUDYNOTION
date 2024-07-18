import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const Signupform = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData]= useState(
        { 
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    )

    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

    function changeHandler(event){
        setFormData((prevData)=>(
            {
             ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
    }

    function submitHandler(event){
        event.preventDefault();
         if( formData.password !== formData.confirmPassword ){
            toast.error("password not matched");
            return;
         }
         setIsLoggedIn(true);
         toast.success("ACCOUNT CREATED");
         navigate("/dashboard");

         const finalData={
            ...formData,
            accountType
         }

         console.log("printing sign up data");
        console.log(finalData);

    }

const[accountType,setAccountType]=useState("student")


  return (

    <div  className='h-fit bg-richblack-900' >
    
        {/*  student and instructor */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-4 rounded-full max-w-max'>
            <button   className={`${accountType === "student" 
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("student")}>student
                </button>

            <button  className={`${accountType === "instructor" 
                ?
                "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setAccountType("instructor")}>   instructor
                </button>
        </div>



        <form onSubmit={submitHandler} >

            {/* first name and last name */}
            <div className=' flex gap-x-4 mt-[10px]'>
                <label className='w-full'>
                    <p className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem] '> 
                     first name<sup className='text-pink-200'>*</sup></p>
                    <input
                        className=' text-richblack-5 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] '
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                    />
                </label>

                <label className='w-full'>
                    <p  className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem] '> 
                    last name<sup  className='text-pink-200'>*</sup></p>
                    <input
                        className=' text-richblack-5 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] '
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter last Name"
                        value={formData.lastName}
                    />
                </label>
            </div> 

            {/* email  */}
            <div className='mt-[10px]'>
                <label className='w-full mt-[20px]'>
                    <p className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem] '>
                    email address<sup className='text-pink-200'>*</sup></p>
                    <input
                        className=' text-richblack-5 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] '
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        value={formData.email}
                    />
                </label>
            </div>

            {/* password ,confirm passwrod  */}
            <div className='flex gap-x-4 mt-[10px]'>
                <label className='w-full relative' >
                    <p className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem] '>
                    create password<sup  className='text-pink-200'>*</sup></p>
                    <input
                        className=' text-richblack-5 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] '
                            required
                        type={ showPassword? ("text"):("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter password"
                        value={formData.password}
                    />
                    <span  className='absolute right-3 top-[38px]'
                     onClick={()=> setShowPassword( (prev) =>!prev)} >
                        {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>

                </label>

                <label className='w-full relative'>
                    <p  className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem] '>
                     confirm password<sup  className='text-pink-200' >*</sup></p>
                    <input
                        className=' text-richblack-5 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] '
                        required
                        type={ showPassword? ("text"):("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="confirm password"
                        value={formData.confirmPassword}
                    />
                    <span className='absolute right-3 top-[38px]'
                     onClick={()=> setShowConfirmPassword( (prev) =>!prev)} >
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>

                </label>
            </div>

            <button className='bg-yellow-50 w-full mt-8 rounded-[8px] font font-medium text-richblack-900
                py-[8px] px-[12px] '>
                create account
            </button>
        </form>


    </div>
  )
}

export default Signupform
