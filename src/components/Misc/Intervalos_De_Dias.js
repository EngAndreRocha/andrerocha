
import React from 'react';
import './intervalos.css';
import IntervalosHours from './Intervalos_De_Hours';


const IntervalosDays = (props) => {

    /* console.log(props.horariodata); */
    /* var dias_da_semana =  (props.horariodata).map(item => item.dia_da_semana).filter((value, index, self) => self.indexOf(value) === index); */
    var day_valid =  (props.horariodata.length === 21)?((props.horariodata).filter(item => item.tipo === "Aberto")):([{}]);
    let result = [];

    //((props.horariodata))?((props.horariodata).filter(item => item.tipo === "Aberto")):([{}])
    /* console.log(day_valid); */
    const divStyle = {
        display: 'none'
      };

    return (props.horariodata.length !== 21)? <div></div> : (
        <div className="intervalos_dias_div">
            {
                day_valid.map((value2,i) =>{
                    if(value2.valid){
                        return(
                            <div className="dia" key={i}>
                                <span className="nome_dia">{value2.dia_da_semana}</span>
                                {
                                    // eslint-disable-next-line
                                    result = (props.horariodata).filter(day => day.dia_da_semana === value2.dia_da_semana),
                                    result.map((value3,j) =>{
                                        return(
                                            <div className="intervalo" key={j}>
                                                {value3.valid && <IntervalosHours key = {j} tipo = {value3.tipo} hora_inicio = {value3.hora_inicio} hora_fim = {value3.hora_fim}/>}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                    )}else{return(<div style={divStyle}  key={i}></div>)}
                })
            } 
        </div>
    );
}

export default IntervalosDays;

