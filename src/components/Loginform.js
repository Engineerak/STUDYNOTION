
import React,{useState} from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Loginform = ({setIsLoggedIn}) => {
 
    const[formData,setFormData] = useState(
        { email:"" ,password:""}
     )
    
     const navigate = useNavigate();

     const[showPassword, setShowPassword] = useState(false);
 
     function changeHandler(event){
         setFormData((prevData)=>(
             {
              ...prevData,
                 [event.target.name]:event.target.value
             }
         ) )
     }
 

     function submitHandler(event)
     {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the log in data ");
        console.log(formData)
        navigate("/dashboard");
     }
 
 
 
   return (
     <div>
       
        <form className='flex flex-col w-full gap-y-4 mt-6'
            onSubmit={submitHandler}>
           
            <label className='w-full'>
                 <p className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem] '> 
                 Email address <sub className='text-pink-200'>*</sub> </p>
                 <input 
                    className=' text-richblack-5 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] '
                     required
                     type="email"
                     value={formData.email}
                     onChange={changeHandler}
                     placeholder="Enter email address "
                     name='email'
                 />
            </label>
 
            <label className=' w-full relative'>
                <p  className='text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem] '>
                password  <sup className='text-pink-200'>*</sup> </p>
                <input 
                    className=' text-richblack-5 bg-richblack-800 rounded-[0.5rem] w-full p-[12px] '
                    required
                    type= {showPassword ? ("text") : ("password")}
                    value = {formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password" 
                    name="password" 
                />
                <span 
                    className='absolute right-3 top-[38px]'
                    onClick={() => setShowPassword( (prev)=>!prev)} >
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  />)
                    :(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
 
                <Link  to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'> forgot password</p>
                </Link>
 
                <button className='bg-yellow-50 w-full mt-8 rounded-[8px] font font-medium text-richblack-900
                py-[8px] px-[12px] ' >
                    sign in
                </button>
             </label>
 
         </form>
 
     </div>
   )
}

export default Loginform
