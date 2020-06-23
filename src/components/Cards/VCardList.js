import React from 'react';
import './Card.css';
import VCard from './VCard';

const VCardList = () => {

    return(
        <div className="cardset-content">
            <div className="cardset-div" id="vcardlist-div">
                <div className="cardPost">
                    <div className="cardPost-card">
                        <VCard/>
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

export default VCardList;
