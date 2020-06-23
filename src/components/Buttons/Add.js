import React from 'react';
import add from '../../images/icons/149629-essential-compilation/svg/add-4.svg';

const Add = ({add_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="Add" onClick={add_click}>
                <img className="icons" width="24" src={add} alt="Add"></img>
            </a>
        </div>
    );
}

export default Add;
