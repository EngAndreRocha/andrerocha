import React from 'react';
import arrowup from '../../images/icons/149629-essential-compilation/svg/arrow-1.svg';

const ArrowUp = ({arrowup_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="ArrowUp" onClick={arrowup_click}>
                <img className="icons" width="24" src={arrowup} alt="ArrowUp"></img>
            </a>
        </div>
    );
}

export default ArrowUp;
