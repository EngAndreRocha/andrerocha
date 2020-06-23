import React from 'react';
import dropdown from '../../images/icons/149629-essential-compilation/svg/dropdown.svg';
import DropDownList from '../Lists/DropDownList';

const Dropdown = ({dropdown_click, is_DropDownList_Hidden, onClickOut}) => {
    return(
        <div className="small-icons-div" onMouseLeave={onClickOut}>
            <a href="#!"className="icons-link" title="Dropdown" onClick={dropdown_click}>
                <img className="small-icons" width="16" src={dropdown} alt="Dropdown"></img>
            </a>
            {!is_DropDownList_Hidden && <DropDownList onClickOut={onClickOut}/>}
        </div>
    );
}

export default Dropdown;
