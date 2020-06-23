import React from 'react';
import arrowdown from '../../images/icons/149629-essential-compilation/svg/arrow-2.svg';

const ArrowDown = ({arrowdown_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="ArrowDown" onClick={arrowdown_click}>
                <img className="icons" width="24" src={arrowdown} alt="ArrowDown"></img>
            </a>
        </div>
    );
}

export default ArrowDown;
