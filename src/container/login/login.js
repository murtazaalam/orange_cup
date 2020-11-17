import React from 'react'
import { NavLink } from 'react-router-dom'
import Appbar from '../../component/header/appbar'
const Login = ()=>{

    return (
        <>
        <div className="home-wrapper">
            <div className="screen">
               <div className="upper-backgroud">
                   <Appbar path="/"></Appbar>
                <div className="header-wrapper">
                    <h5 className="title text-white">Login</h5>
                    <p className="sub-title">We are really happy to see you</p>
                </div>
                <div className="form-group">
                    <input className="input-custom" placeholder="Enter Mobile">  
                    </input>
                </div>
                <div className="form-group">
                    <input className="input-custom" placeholder="Enter Password">  
                    </input>
                </div>
                <p className="pl-3">
                    <NavLink to="/forget">Forget Password?</NavLink>
                </p>
               </div>
               {/* Lowe White part */}
               <div className="lower-backgroud">
                   <p className="alert-error">
                       If any error
                    
                   </p>
                   <div className="form-group w-h-100 ">
                       <button className="btn btn-theme btn-block">Submit</button>
                   </div>
                   <div className="form-group center-colum">
                       <p className="mb-0">Don't have an account </p>
                       <NavLink to="/register"><a className="text-theme">Signup</a></NavLink>

                   </div>
               </div>

            </div>
        </div>
        </>
    )
}
export default Login ;