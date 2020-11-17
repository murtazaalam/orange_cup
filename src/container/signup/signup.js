import { NavLink } from 'react-router-dom'
import Appbar from '../../component/header/appbar'
const SignUp = ()=>{

    return (
        <>
        <div className="home-wrapper">
            <div className="screen">
               <div className="upper-backgroud">
                   <Appbar path="/"></Appbar>
                   Progress tabbar
                <div className="header-wrapper">
                    <h5 className="title text-white">Signup</h5>
                    <p className="sub-title">We're so happy that you're joining us!</p>
                </div>
                <div className="form-group">
                    <input className="input-custom" placeholder="Enter Name">  
                    </input>
                </div>
                <div className="form-group">
                    <input className="input-custom" placeholder="Enter Email">  
                    </input>
                </div>
                <div className="form-group">
                    <input className="input-custom" placeholder="Enter Phone">  
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
                       <button className="btn btn-theme btn-block">Next</button>
                   </div>
                   <div className="form-group center-colum">
                       <p className="mb-0">Already have an account?</p>
                       <NavLink to="/login"><a className="text-theme">Login</a></NavLink>

                   </div>
               </div>

            </div>
        </div>
        </>
    )
}
export default SignUp  ;