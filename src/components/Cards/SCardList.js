import React from 'react';
import './Card.css';
import SCard from './SCard';

const SCardList = () => {

    return(
        <div className="cardset-content">
            <div className="cardset-div" id="scardlist-div">
                <div className="cardPost">
                    <div className="cardPost-card">
                        <SCard/>
                    </div>
                    <div className="cardPost-Post">
                        <div className="Post-Title">
                            <h1>Title</h1>
                        </div>
                        <div className="Post-Content">
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SCardList;
