import React from 'react';
import './RightSideBar.css';
import ArrowDown from '../Buttons/ArrowDown.js';
import ArrowUp from '../Buttons/ArrowUp.js';
import ArrowRight from '../Buttons/ArrowRight.js';
import ArrowLeft from '../Buttons/ArrowLeft.js';
import Up from '../Buttons/Up.js';
import Add from '../Buttons/Add.js';
import Minus from '../Buttons/Minus.js';
import StateInfo from './StateInfo.js';


const RightSideBar = ({ rightsidebar_closebutton_click,
                        arrowdown_click,
                        arrowup_click,
                        arrowright_click,
                        arrowleft_click,
                        up_click,
                        add_click,
                        minus_click,
                        stateinfo_click
}) => {

    return(
        <div className="rightsidebar-div">
            <button className="closebutton" onClick={rightsidebar_closebutton_click}>&times;</button>
            <ArrowDown arrowdown_click={arrowdown_click}/>
            <ArrowUp arrowup_click={arrowup_click}/>
            <ArrowRight arrowright_click={arrowright_click}/>
            <ArrowLeft arrowleft_click={arrowleft_click}/>
            <Up up_click={up_click}/>
            <Add add_click={add_click}/>
            <Minus minus_click={minus_click}/>
            <StateInfo stateinfo_click={stateinfo_click}/>
        </div>
    );
}

export default RightSideBar;
