import React from 'react';
import './Card.css';
/* import example_image from '../../images/Claricia/horizontal/11.JPG'; */

const HCard = () => {

    return(
            <div className="card-div" id="hcard-div">
                <a href="#!"className="card-link" title="hcardLink" id="hcard-link">
                    {/* <img className="card-image" src={example_image} alt="hcard" id="hcard-image"></img> */}
                    <div className="card-overlay"></div>
                    <div className="card-description">
                        <span><b>SuperEvent</b></span><br></br>
                        <span>12-05-2019 às 18:45</span>
                    </div>
                </a>
            </div>
    );
}

export default HCard;
