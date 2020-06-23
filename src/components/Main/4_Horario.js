import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Setup_Horario,
    Setup_Nota_Ferias,
    Update_Horario_Nota
} from '../../actions';

import './4_Horario.css'; 

import ToggleVisibilityButton from '../../components/Buttons/ToggleVisibility';
import Edit from '../../images/edit-1.svg';

import EditFormHorarioFuncionamento from '../Form/EditPages/5_EditForm_HorarioFuncionamento';


import IntervalosDays from '../Misc/Intervalos_De_Dias';

const mapStateToProps = (state) => {
    return {
        horariodata: state.Horario.horariodata,
        isPending: state.Horario.isPending,
        error: state.Horario.error,
        notadata: state.Nota_Ferias.notadata,
        isPendig_nota: state.Nota_Ferias.isPendig_nota,
        error_nota: state.Nota_Ferias.error_nota
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSetup_Horario: () => dispatch(Setup_Horario()),
        onSetup_Nota_Ferias: () => dispatch(Setup_Nota_Ferias()),
        handle_HorarioForm_Submit: values => dispatch(Update_Horario_Nota(values))
    }
}

class Horario extends Component {

    componentDidMount() {
        this.props.onSetup_Horario();
        this.props.onSetup_Nota_Ferias();
    }
    render() {

        const {
            isPending,
            /* error, */
            horariodata,
            notadata,
            isPendig_nota/* ,
            error_nota */
        } = this.props;

    return (isPending && isPendig_nota) ? <h1> </h1> : (
            <div className="horario-div" id="horario-div">       
                <div className="horario-description" id="horario-description">
                    <div className="dias-horario-laboral">
                        <h3>Horário:</h3>
                        <IntervalosDays horariodata = {horariodata}/>
                        <div className="fechado-ferias"> {(notadata.length > 0) ? (notadata[0].notas) : (" ")}{/* {notadata[0].notas} */}</div>
                    </div>               
                    <ToggleVisibilityButton imgsrc={Edit} name="horario_input_edit_button" index={4}>
                        <EditFormHorarioFuncionamento  onSubmit={this.props.handle_HorarioForm_Submit} 
                            initialValues={{
                                    id_lojas: 3, /* database */
                                    segunda:false,abr_time_Segunda:"00:00:00",enc_time_Segunda:"00:00:00",enc_alm_Segunda:false,enc_alm_time_Segunda:"00:00:00",abr_alm_time_Segunda:"00:00:00",enc_jnt_Segunda:false,enc_jnt_time_Segunda:"00:00:00",abr_jnt_time_Segunda:"00:00:00",
                                    terca:false,abr_time_Terca:"00:00:00",enc_time_Terca:"00:00:00",enc_alm_Terca:false,enc_alm_time_Terca:"00:00:00",abr_alm_time_Terca:"00:00:00",enc_jnt_Terca:false,enc_jnt_time_Terca:"00:00:00",abr_jnt_time_Terca:"00:00:00",
                                    quarta:false, abr_time_Quarta:"00:00:00",enc_time_Quarta:"00:00:00",enc_alm_Quarta:false,enc_alm_time_Quarta:"00:00:00",abr_alm_time_Quarta:"00:00:00",enc_jnt_Quarta:false,enc_jnt_time_Quarta:"00:00:00",abr_jnt_time_Quarta:"00:00:00",
                                    quinta:false, abr_time_Quinta:"00:00:00",enc_time_Quinta:"00:00:00",enc_alm_Quinta:false,enc_alm_time_Quinta:"00:00:00",abr_alm_time_Quinta:"00:00:00",enc_jnt_Quinta:false,enc_jnt_time_Quinta:"00:00:00",abr_jnt_time_Quinta:"00:00:00",
                                    sexta:false, abr_time_Sexta:"00:00:00",enc_time_Sexta:"00:00:00",enc_alm_Sexta:false,enc_alm_time_Sexta:"00:00:00",abr_alm_time_Sexta:"00:00:00",enc_jnt_Sexta:false,enc_jnt_time_Sexta:"00:00:00",abr_jnt_time_Sexta:"00:00:00",
                                    sabado:false, abr_time_Sabado:"00:00:00",enc_time_Sabado:"00:00:00",enc_alm_Sabado:false,enc_alm_time_Sabado:"00:00:00",abr_alm_time_Sabado:"00:00:00",enc_jnt_Sabado:false,enc_jnt_time_Sabado:"00:00:00",abr_jnt_time_Sabado:"00:00:00",
                                    domingo:false, abr_time_Domingo:"00:00:00",enc_time_Domingo:"00:00:00",enc_alm_Domingo:false,enc_alm_time_Domingo:"00:00:00",abr_alm_time_Domingo:"00:00:00",enc_jnt_Domingo:false,enc_jnt_time_Domingo:"00:00:00",abr_jnt_time_Domingo:"00:00:00",
                                    nota:""
                                }}/>
                    </ToggleVisibilityButton>
                </div>
            </div>
    );
}

}

export default connect(mapStateToProps, mapDispatchToProps)(Horario);
