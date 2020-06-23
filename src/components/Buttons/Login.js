import React from 'react';
import Login from '../../images/icons/148705-essential-compilation/svg/login.svg';

const Login = ({login_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="Edit" onClick={login_click}>
                <img className="icons" width="24" src={Login} alt="Login"></img>
            </a>
        </div>
    );
}

export default Login;
