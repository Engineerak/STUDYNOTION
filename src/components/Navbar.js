import { logDOM } from '@testing-library/react';
import React from 'react'
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"


const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div  className='flex justify-between items-center w-11/12 max-w-[1160px] py-5 mx-auto  ' >
    
        <Link to="/"> 
            <img src={logo}  width={160} height={32} loading="lazy"/>
        </Link>

        <nav >
            <ul className=' flex gap-6 text-richblack-100 '>
                <li>  
                <Link to="/" > Home</Link>
                </li>

                <li> 
                <Link to="/" > about</Link>
                </li>

                <li> 
                <Link to="/" > contact</Link>
                </li>
            </ul>
        </nav>
        


        <div className='flex items-center gap-x-4 ml-5 mr-3'>

                {  !isLoggedIn &&
                     <Link  to="/login" > 
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                      border border-richblack-700 tracking-wider '>
                          Log in
                        </button>
                    </Link>
                }


                { !isLoggedIn &&
                    <Link  to="/signup" > 
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                      border border-richblack-700 tracking-wider '> Sign up</button>
                    </Link>
                }


                { isLoggedIn && 
                      <Link  to="/" > 
                        <button
                        className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                        border border-richblack-700 tracking-wider '
                         onClick={ () =>{
                            setIsLoggedIn(false);
                            toast.success("LOGGED OUT")
                        }
                        } > Log out</button>
                    </Link>
                }


                {isLoggedIn &&
                    <Link  to="/deshboard" > 
                        <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] 
                              border border-richblack-700 tracking-wider '
                        > Dashboard</button>
                    </Link>
                }


        </div>

 
    </div>
  )
}

export default Navbar;
