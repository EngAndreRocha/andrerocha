import React from 'react';
import './Page.css';
/* import Me_Photo from '../images/AndreWebP/avatar.png'; */
import HCard from '../components/Cards/HCard';

/* import FacebookIcon from '../images/icons/124009-social-networks-logos/svg/facebook.svg';
import InstagramIcon from '../images/icons/124009-social-networks-logos/svg/instagram.svg'; */


const PageAndreRocha = ({onRouteChange}) => {

    return(
            <div className="andrerocha-div" id="andrerocha-div">
                <div><h1>André Rocha</h1></div>
                <div>{/* <img className="andre-rocha-img" src={Me_Photo} alt="Andre Rocha"></img> */}</div>
                <div><h2 className="email">rochandre@gmail.com</h2></div>
                <div><h2 className="cell">925112378</h2></div>
                <div className="redes">
                    {/* <img src={FacebookIcon} alt="FacebookIcon" height="42" width="42" />
                    <img src={InstagramIcon} alt="InstagramIcon" height="42" width="42" /> */}
                </div>
                <HCard onClick={() => onRouteChange('MainPage',0)}/>
            </div>
    );
}


export default PageAndreRocha;
