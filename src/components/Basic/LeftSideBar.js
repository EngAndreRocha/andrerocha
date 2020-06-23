import React from 'react';
import './LeftSideBar.css';

const LeftSideBar = ({ leftsidebar_closebutton_click }) => {
    
    return(
        <div className="leftsidebar-div">
            <button className="closebutton" onClick={leftsidebar_closebutton_click}>&times;</button>
            <p></p>
        </div>
    );
}

export default LeftSideBar;
