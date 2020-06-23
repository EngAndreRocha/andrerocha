import React from 'react';

const Submit = (/*{submit_click}*/) => {
    
    return(// onClick={submit_click}??
        <div id="submit-input-div">
            <input id="submit-input" type="submit" formMethod="post" formTarget="_self" value="Submit"></input>
        </div>
    );
}

export default Submit;
