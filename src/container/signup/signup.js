const { NavLink } = require("react-router-dom")

const SignUp = ()=>{

    return (
        <>
         <div className="class">
             Sign up page
             <NavLink to="/">Home</NavLink>
             <NavLink to="/login">Login</NavLink>
         </div>
        </>
    )
}
export default SignUp  ;