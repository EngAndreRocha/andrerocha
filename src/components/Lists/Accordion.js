import React from 'react';
import './Lists.css';

const Accordion = (props) => {
    return(
        <div className="accordion-div">
            <div className="accordion" onClick={props.onAccordion_Click}>{ props.title }</div>
            <div className="panel">
                {props.children}
            </div>
        </div>
    );
}

export default Accordion;
