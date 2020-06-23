import React from 'react';
import './Footer.css';

const Footer = ({onRouteChange}) => {
    
    return(
        <div className="footer-div">
            <div></div>
            {/* <a href="#!"className="footer-link" title="Sugestoes" onClick={() => onRouteChange('PageSugestoes',0)}>
                <p>Dê-nos Sugestões!</p>
            </a> */}
            {/* <div></div> */}
            {/* <a href="#!"className="footer-link" title="SiteMap" onClick={() => onRouteChange('PageJobs',0)}>
                <p>Junta-te a nós!</p>
            </a> */}
            <a href="#!"className="footer-link" title="Privacy Policy" onClick={() => onRouteChange('PagePrivacyPolicy',0)}>
                <p>Política de Privacidade</p>
            </a>
            <a href="#!"className="footer-link" title="Conditions of Use" onClick={() => onRouteChange('PageConditionsOfUse',0)}>
                <p>Condições de Uso</p>
            </a>
            <a href="#!"className="footer-link" title="Cookies" onClick={() => onRouteChange('PageCookies',0)}>
                <p>Cookies</p>
            </a>
            <div></div>
            <div className="by">
                {/* <a href="#!"className="footer-link" title="author" onClick={() => onRouteChange('PageAndreRocha',0)}> */}
                    <p>Developed By &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; André Correia Rocha </p>
               {/*  </a> */}
            </div>
        </div>
    );
}

export default Footer;
