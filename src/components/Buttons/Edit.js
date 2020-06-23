import React from 'react';
import Edit from '../../images/icons/148705-essential-compilation/svg/edit-1.svg';

const Edit = ({edit_click}) => {
    return(
        <div className="icons-div">
            <a href="#!"className="icons-link" title="Edit" onClick={edit_click}>
                <img className="icons" width="24" src={Edit} alt="Edit"></img>
            </a>
        </div>
    );
}

export default Edit;
