import React from 'react'
import {NavLink} from 'react-router-dom'
const Appbar = ({path})=>{

    return (
        <div className="appbar">
           <NavLink to={path}>Back Arrow</NavLink>
        </div>
    );
}
export default Appbar ; 