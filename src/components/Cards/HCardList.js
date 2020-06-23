import React from 'react';
import './Card.css';
import HCard from './HCard';


const HCardList = () => {

    return(
        <div className="cardset-content">
            <div className="cardset-div" id="hcardlist-div">
                <div className="cardPost">
                    <div className="cardPost-card">
                        <HCard/>
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
                {/* map all cards */}
            </div>
        </div>
    );
}

export default HCardList;
