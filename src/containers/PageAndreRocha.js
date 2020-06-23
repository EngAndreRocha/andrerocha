import React, { Fragment } from 'react';
import './Page.css';
import me from '../images/me.png'

const PageAndreRocha = ({props}) => {

    return(
            <Fragment className="andrerocha-div" id="andrerocha-div">
                <div><h1>André Rocha</h1></div>
                <div><h2 className="email">rochandre@gmail.com</h2></div>
                <div><h2 className="cell">925112378</h2></div>
                <div><img className="App-logo" src ={me} alt='fail'></img></div>
            </Fragment>
    );
}


export default PageAndreRocha;
