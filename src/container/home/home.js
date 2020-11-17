import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = ()=>{
    return (
        <>
         <div className="container">This is Home Page

             <NavLink to="/register">
                 Register

             </NavLink>
         </div>
        </>
    )

}
export default Home ; 