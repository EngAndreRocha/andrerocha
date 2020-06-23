import React from 'react';
import './Card.css';
import SCard from './SCard';


const SCardGallery = () => {

    return(
        <div className="cardset-content">
            <div className="cardset-div" id="scardgallery-div">
                <SCard/>
                <SCard/>
                <SCard/>
                <SCard/>
                <SCard/>
                <SCard/>
                <SCard/>
                <SCard/>
                <SCard/>
                <SCard/>
            </div>
        </div>
    );
}

export default SCardGallery;
