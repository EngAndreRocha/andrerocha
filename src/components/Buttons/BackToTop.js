import React from 'react';
import up from '../../images/icons/149629-essential-compilation/svg/up.svg';

const BackToTop = ({ backtotop_click }) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="backtotop" onClick={backtotop_click}>
                <img className="icons" width="24" src={up} alt="Up"></img>
            </a>
        </div>
    );
}

export default BackToTop;
