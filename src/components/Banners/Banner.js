import React from 'react';
import './Banner.css';

const Banner = (props) => {

    if( props.image &&
        props.eventnome &&
        props.eventbegindate &&
        props.eventbeginhour &&
        props.eventenddate &&
        props.eventendhour &&
        props.eventdescription &&
        props.eventtype &&
        props.eventprice &&
        props.eventcapacity &&
        props.eventlocal){
    
    
        var d1 = new Date(props.eventbegindate);
        var year1 = d1.getFullYear();
        var month1 = d1.getMonth() + 1;
        var day1 = d1.getDate();
    
        var strDate1 = 'd/m/Y'
            .replace('d', day1)
            .replace('m', month1)
            .replace('Y', year1);
            
/*         var d2 = new Date(props.eventenddate);
        var year2 = d2.getFullYear();
        var month2 = d2.getMonth() + 1;
        var day2 = d2.getDate();
    
        var strDate2 = 'd/m/Y'
            .replace('d', day2)
            .replace('m', month2)
            .replace('Y', year2); */
    
    
        var strHour1 = (props.eventbeginhour).substring(0, (props.eventbeginhour).length - 3);
    
        /* var strHour2 = (props.eventendhour).substring(0, (props.eventendhour).length - 3); */
    }


    return(
            <div className="banner-div" id="banner-div">
                <div className="banner-image-div">
                    <a href="#!"className="banner-link" title="bannerLink" id="banner-link"><img className="banner-image" src={props.image} alt="banner" id="banner-image"></img></a>
                </div>
                <div className="banner-text">
                    <div className="banner-title">
                        <h1>{props.eventnome}</h1>
                    </div>
                    <div className="data-evento">
                        <span>{(strDate1) ? (strDate1) : (" ")} às {(strHour1) ? (strHour1) : (" ")}</span>
                    </div>
                    <div className="banner-description">
                        <p>{props.eventdescription}</p>
                    </div>
                    <div className="event-local">
                        <span>{props.eventlocal}</span>
                    </div>
                </div>
            </div>
    );
}

export default Banner;
