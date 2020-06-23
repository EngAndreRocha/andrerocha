import React from 'react';

const Back = ({back_click}) => {
    return(
        <div id="back-div">
            <button className="back-button" title="Back" onClick={back_click}>Back</button>
        </div>
    );
}

export default Back;
