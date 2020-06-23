import React from 'react';
import arrowright from '../../images/icons/149629-essential-compilation/svg/arrow.svg';

const ArrowRight = ({arrowright_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="ArrowRight" onClick={arrowright_click}>
                <img className="icons" width="24" src={arrowright} alt="ArrowRight"></img>
            </a>
        </div>
    );
}

export default ArrowRight;
