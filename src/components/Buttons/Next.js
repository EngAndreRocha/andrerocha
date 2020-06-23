import React from 'react';

const Next = ({next_click}) => {
    return(
        <div id="next-div">
            <button className="next-button" title="Next" onClick={next_click}>Next</button>
        </div>
    );
}

export default Next;
