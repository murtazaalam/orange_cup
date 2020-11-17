import React from 'react'
import {NavLink} from 'react-router-dom'
import Appbar from '../../component/header/appbar'
const VerifyOtp = ()=>{

    return (
        <>
          <div className="home-wrapper">
            <div className="screen">
               <div className="upper-backgroud">
                   <Appbar path="/register"></Appbar>
                   Progress tabbar
                <div className="header-wrapper">
                    <h5 className="title text-white">Enter OTP</h5>
                    <p className="sub-title">Enter the 6-digit OTP sent on your registered number</p>
                </div>
                <div className="form-group">
                    <input className="input-custom" placeholder="Enter Name">  
                    </input>
                </div>
               
                
               </div>
               {/* Lowe White part */}
               <div className="lower-backgroud">
                   
                   <div className="form-group w-h-100 ">
                       <button className="btn btn-theme btn-block">Confirm</button>
                   </div>
                   <div className="form-group center-colum">
                       <p className="mb-0">Didn't receive the code?</p>
                       <NavLink to="/login"><a className="text-theme">Resend</a></NavLink>

                   </div>
               </div>

            </div>
        </div>
        </>
    )

}
export default VerifyOtp ; 