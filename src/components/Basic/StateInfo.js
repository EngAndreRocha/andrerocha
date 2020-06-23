import React from 'react';
import './StateInfo.css';
import warning from '../../images/icons/149629-essential-compilation/svg/warning-1.svg';
/* import info from '../images/icons/149629-essential-compilation/svg/info-1.svg'; */
/* import question from '../images/icons/149629-essential-compilation/svg/question.svg'; */


const StateInfo = ({stateinfo_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="StateInfo" onClick={stateinfo_click}>
                <img className="icons" width="24" src={warning} alt="Warning"></img>
            </a>
        </div>
    );
}

export default StateInfo;
