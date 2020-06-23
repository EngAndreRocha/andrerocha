
import React from 'react';

/* import loading_gif from '../../images/loading_gif.svg'; */

const Metodos = (props) => {

    const divStyle = {
        display: 'none'
    };

    return(
        <div className="metodos_div">
            {
                (props.metodosdata).map((value,i) =>{
                    if(value.valid) {
                        return(
                            <div className="metodo" key={i}>
                                <img src={value.icon_localurl} alt="icon" height="42" width="42" />
                            </div>
                        );
                    }
                    else {return(<div style={divStyle}  key={i}></div>)}
                })
                
            }
        </div>
    );
}

export default Metodos;

