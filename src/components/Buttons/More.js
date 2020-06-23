import React from 'react';
import more from '../../images/more.svg';

const More = ({more_click}) => {
    return(
        <div className="icons-div">
            <a href="#!" className="icons-link" title="mais..." onClick={more_click}>
                <img className="icons" width="16" src={more} alt="More"></img>
            </a>
        </div>
    );
}

export default More;
