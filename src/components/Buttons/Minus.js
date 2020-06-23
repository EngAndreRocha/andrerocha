import React from 'react';
import minus from '../../images/icons/149629-essential-compilation/svg/minus-2.svg';

const Minus = ({minus_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="Minus" onClick={minus_click}>
                <img className="icons" width="16" src={minus} alt="Minus"></img>
            </a>
        </div>
    );
}

export default Minus;
