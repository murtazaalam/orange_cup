import React from 'react'
import Appbar from '../../component/header/appbar'
import {NavLink} from 'react-router-dom'
const CreatePassword = ()=>{
    return (
        <>
        <div className="home-wrapper">
          <div className="screen">
             <div className="upper-backgroud">
                 <Appbar path="/verify"></Appbar>
                 Progress tabbar
              <div className="header-wrapper">
                  <h5 className="title text-white">Set Password</h5>
                  <p className="sub-title">Don't worry! Your secret is safe with us!</p>
              </div>
              <div className="form-group">
                  <input className="input-custom" placeholder="Enter Password">  
                  </input>
              </div>
              <div className="form-group">
                  <input className="input-custom" placeholder="Enter Confirm Password">  
                  </input>
              </div>
             
              
             </div>
             {/* Lowe White part */}
             <div className="lower-backgroud">
                 <div>
                 <p>
                     Your password must include
                 </p>
                 <ul>
                     <li>
                         Rule 1
                     </li>
                     <li>
                         Rule 2
                     </li>
                     <li>
                         Rule 3
                     </li>
                     <li>
                         Rule 4
                     </li>

                 </ul>
                 </div>
                 <div className="form-group w-h-100 ">
                     <button className="btn btn-theme btn-block">Create Account</button>
                 </div>
                 
             </div>

          </div>
      </div>
      </>
    )

}
export default CreatePassword ; 