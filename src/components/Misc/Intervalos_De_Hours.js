
import React from 'react';
import './intervalos.css';

const IntervalosHours = (props, key) => {

if( props.tipo &&
    props.hora_inicio &&
    props.hora_fim){

    var strHour1 = (props.hora_inicio).substring(0, (props.hora_inicio).length - 3);

    var strHour2 = (props.hora_fim).substring(0, (props.hora_fim).length - 3);
}

    return(
        <div className="intervalos_hours_div" id={key}>
            <div>
                {/* <span className="intervalos_tipo_div">{props.tipo}</span> */}
                <div className="intervalos_horas_div">
                <span className="intervalos_tipo_div">{props.tipo} das </span><span className="intervalos_inicio">{(strHour1) ? (strHour1) : (" ")}</span><span> às </span><span className="intervalos_fim">{(strHour2) ? (strHour2) : (" ")}.</span>
                </div>
            </div>
        </div>
    );
}

export default IntervalosHours;

