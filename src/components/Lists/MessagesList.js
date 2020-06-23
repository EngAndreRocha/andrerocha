import React from 'react';
import './Lists.css';

const MessagesList = () => {
    return(
        <div className="Lists-div">
            <ul>
                <li><a>MessagesList-item-1</a></li>
                <li><a>MessagesList-item-2</a></li>
                <li><a>MessagesList-item-3</a></li>
                <li><a>MessagesList-item-4</a></li>
            </ul>
        </div>
    );
}

export default MessagesList;
