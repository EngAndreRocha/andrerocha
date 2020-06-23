import React from 'react';
import './Card.css';
import HCard from './HCard';

const HCardGallery = () => {

    return(
        <div className="cardset-content">
            <div className="cardset-div" id="hcardgallery-div">
                <HCard/>
                <HCard/>
                <HCard/>
                <HCard/>
                <HCard/>
                <HCard/>
                <HCard/>
                {/* map all cards */}
            </div>
        </div>
    );
}

export default HCardGallery;
