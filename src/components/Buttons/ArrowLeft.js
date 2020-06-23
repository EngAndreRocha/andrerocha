import React from 'react';
import arrowleft from '../../images/icons/149629-essential-compilation/svg/arrow-3.svg';

const ArrowLeft = ({arrowleft_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="ArrowLeft" onClick={arrowleft_click}>
                <img className="icons" width="24" src={arrowleft} alt="ArrowLeft"></img>
            </a>
        </div>
    );
}

export default ArrowLeft;
