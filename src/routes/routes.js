import React from 'react'
import {BrowserRouter, Route ,  Switch} from 'react-router-dom';
import Home from '../container/home/home'
import Login from '../container/login/login'
import CreatePassword from '../container/signup/createpassword';
import Signup from '../container/signup/signup'
import VerifyOtp from '../container/signup/verifyotp';
const Routes = ()=>{
   return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Signup}></Route>
        <Route exact path="/verify" component={VerifyOtp}></Route>
        <Route exact path="/regitserpassword" component={CreatePassword}></Route>
        <Route exact path="*"></Route>
    </Switch>
   </BrowserRouter> 
   )
}

export default Routes ; 