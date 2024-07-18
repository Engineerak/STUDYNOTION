import React from 'react'
import frameImage from "../assets/frame.png";
import SignupForm from "./Signupform";
import Loginform from "./Loginform";
import {FcGoogle} from "react-icons/fc"

const Template = ({title ,desc1 , desc2 , image , formType , setIsLoggedIn}) => {

  return (
    <div className='flex h-screen justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 '>


        <div className=' w-11/12 max-w-[450px]' >
            <h1 className='text-richblack-5 font-semibold text-[1.785rem] mb-[20px] leading-[1.4] '>{title}</h1>
            <p className=' text-[1.125rem] leading-[1.65rem]  '> 
                <span className='text-richblack-100 '>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'> {desc2}</span>
            </p>

            {formType ==="signup" ?
             (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
             (<Loginform setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className=' h-[1px] w-full bg-richblack-700  '></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className=' h-[1px] w-full bg-richblack-700  '></div>
            </div>

            <button className='w-full flex justify-center items-center font-medium rounded-[8px]
            text-richblack-100 border border-richblack-700  px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p> signup with Google</p>
            </button>
        </div>



        <div className='relative max-w-[450px] w-11/12'>
            <img
             src={frameImage} width={558} height={504} loading="lazy"/>

            <img className=' absolute -top-4 right-4'
             src={image} width={558} height={590} loading="lazy"/>
        </div>



    </div>
  )
}

export default Template
