import React from 'react';
import mail from '../../images/icons/149629-essential-compilation/svg/mail.svg';
import MessagesList from '../Lists/MessagesList';

const Messages = ({messages_click, is_MessagesList_Hidden, onClickOut}) => {
    return(
        <div className="small-icons-div" onMouseLeave={onClickOut}>
            <a href="#!"className="icons-link" title="Mail" onClick={messages_click}>
                <img className="small-icons" width="16" src={mail} alt="Mail"></img>
            </a>
            {!is_MessagesList_Hidden && <MessagesList />}
        </div>
    );
}

export default Messages;
