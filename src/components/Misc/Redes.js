
import React from 'react';

/* import loading_gif from '../../images/loading_gif.svg'; */


const Redes = (props) => {

    const divStyle = {
        display: 'none'
    };

    return(
        <div className="redes_div">
            {
                (props.redesdata).map((value,i) =>{
                    if(value.valid) {
                        return(
                            <div className="rede" key={i}>
                                
                                <a href={value.url}>
                                    <img src={value.icon_localurl} alt="icon" height="42" width="42" />
                                </a>
                            </div>
                        );
                    }
                    else {return(<div style={divStyle}  key={i}></div>)}
                })
            }
        </div>
    );
}

export default Redes;
