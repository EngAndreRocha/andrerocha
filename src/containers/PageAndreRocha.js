import React, { Fragment } from 'react';
import './Page.css';


import claricia_thumbnail from '../images/claricia_thumbnail.jpg';

/* import postgresql from '../images/postgresql.png';
import redis from '../images/redis.png';
import knex from '../images/knex.png';
import jwt from '../images/jwt.png';
import nodejs from '../images/nodejs.png';
import aws from '../images/aws.png';
import redux from '../images/redux.png';
import react from '../images/react.png';
import github from '../images/github.png'; */


const PageAndreRocha = ({props}) => {

    return(
            <Fragment>
                <div className="above_the_fold">
                    <div className="background"></div>
                    <div className="background_overlay"></div>
                    <div className="signiture"></div>
                    <div className="rightscroller">
                        <div className="center">
                            <h1>Hello World!</h1>
                            <span>My name is André from Portugal and I love to make websites! Relentless at problem solving, with a paisson to create new things and always open to new adventures. </span>
                        </div>
                        <div className="websites-wrapper">
                            <div className="websites-div">
                                <a href="http://clariciaeventus.com/">
                                    <img className="thumbnail_img" src={claricia_thumbnail} title="Using
                                    Postgresql, 
                                    Redis, 
                                    Nodejs, 
                                    AWS Services, 
                                    React-Redux, 
                                    Reactjs, 
                                    Github, 
                                    Knexjs, 
                                    JWT 
                                    and more..." alt="claricia thumbnail"></img>
                                </a>
                            </div>
                            {/* <div className="using-div">
                                <h5>With this...</h5>
                                <div className="icons_div">
                                    <a href="https://www.postgresql.org/">
                                        <img className="icon_image" src={postgresql} alt="postgresql"></img>
                                    </a>
                                    <a href="https://redis.io/">
                                        <img className="icon_image" src={redis} alt="redis"></img>
                                    </a>
                                    <a href="https://nodejs.org/en/">
                                        <img className="icon_image" src={nodejs} alt="nodejs" ></img>
                                    </a>
                                    <a href="https://aws.amazon.com/pt/">
                                        <img className="icon_image" src={aws} alt="aws"></img>
                                    </a>
                                    <a href="https://react-redux.js.org/">
                                        <img className="icon_image" src={redux} alt="redux"></img>
                                    </a>
                                    <a href="https://reactjs.org/">
                                        <img className="icon_image" src={react} alt="react"></img>
                                    </a>
                                    <a href="https://github.com/">
                                        <img className="icon_image" src={github} alt="github"></img>
                                    </a>
                                    <a href="http://knexjs.org/">
                                        <img className="icon_image" src={knex} alt="knex"></img>
                                    </a>
                                    <a href="https://jwt.io/">
                                        <img className="icon_image" src={jwt} alt="jwt" ></img>
                                    </a>
                                </div>
                                <h5>...and some other tools.</h5>
                            </div> */}
                        </div>
                        <div className="center">
                            <h1>Let's create something together!</h1>
                            <p className="email">rochandre@gmail.com</p>
                            <p className="cell">+351 925 112 378</p>
                        </div>
                    </div>
                </div>
            </Fragment>
    );
}


export default PageAndreRocha;
