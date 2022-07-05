import {NavLink,Outlet} from 'react-router-dom';
function LoginOrSignUp(){
    return(
        <div className='log'>
          <h1>Already a user</h1>
             <li className="nav-item">
                 
          <NavLink className="nav-link" to="Login">
            Login
          </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="SignUp">
            SignUp
          </NavLink>
          </li>
          <div className='container'></div>
          <Outlet />
        
                   

        </div>

    );


}
export default LoginOrSignUp;