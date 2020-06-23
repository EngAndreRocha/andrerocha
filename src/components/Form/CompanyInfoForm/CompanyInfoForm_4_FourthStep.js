import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  Segunda_Click,
  Terca_Click,
  Quarta_Click,
  Quinta_Click,
  Sexta_Click,
  Sabado_Click,
  Domingo_Click,
  Accordion_Segunda_Click,
  Accordion_Terca_Click,
  Accordion_Quarta_Click,
  Accordion_Quinta_Click,
  Accordion_Sexta_Click,
  Accordion_Sabado_Click,
  Accordion_Domingo_Click
} from '../../../actions';

import { Field, reduxForm } from 'redux-form';
/* import {required} from '../validate'; */
import {renderImageCheckBox} from '../render';
import s_letter_icon from '../../../images/icons/149629-essential-compilation/svg/week_segunda.svg';
import t_letter_icon from '../../../images/icons/149629-essential-compilation/svg/week_terca.svg';
import q_letter_icon from '../../../images/icons/149629-essential-compilation/svg/week_quarta.svg';
import d_letter_icon from '../../../images/icons/149629-essential-compilation/svg/week_domingo.svg';

import Accordion from '../../Lists/Accordion';
import Dailyworkhours from '../Dailyworkhours';

const mapStateToProps = (state) => {
  return {
    is_Accordion_Segunda_Hidden: state.ToggleWeekDay.is_Accordion_Segunda_Hidden,
    is_Accordion_Terca_Hidden: state.ToggleWeekDay.is_Accordion_Terca_Hidden,
    is_Accordion_Quarta_Hidden: state.ToggleWeekDay.is_Accordion_Quarta_Hidden,
    is_Accordion_Quinta_Hidden: state.ToggleWeekDay.is_Accordion_Quinta_Hidden,
    is_Accordion_Sexta_Hidden: state.ToggleWeekDay.is_Accordion_Sexta_Hidden,
    is_Accordion_Sabado_Hidden: state.ToggleWeekDay.is_Accordion_Sabado_Hidden,
    is_Accordion_Domingo_Hidden: state.ToggleWeekDay.is_Accordion_Domingo_Hidden,
    is_Panel_Segunda_Hidden: state.ToggleWeekDay.is_Panel_Segunda_Hidden,
    is_Panel_Terca_Hidden: state.ToggleWeekDay.is_Panel_Terca_Hidden,
    is_Panel_Quarta_Hidden: state.ToggleWeekDay.is_Panel_Quarta_Hidden,
    is_Panel_Quinta_Hidden: state.ToggleWeekDay.is_Panel_Quinta_Hidden,
    is_Panel_Sexta_Hidden: state.ToggleWeekDay.is_Panel_Sexta_Hidden,
    is_Panel_Sabado_Hidden: state.ToggleWeekDay.is_Panel_Sabado_Hidden,
    is_Panel_Domingo_Hidden: state.ToggleWeekDay.is_Panel_Domingo_Hidden
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSegunda_Click: () => dispatch(Segunda_Click()),
    onTerca_Click: () => dispatch(Terca_Click()),
    onQuarta_Click: () => dispatch(Quarta_Click()),
    onQuinta_Click: () => dispatch(Quinta_Click()),
    onSexta_Click: () => dispatch(Sexta_Click()),
    onSabado_Click: () => dispatch(Sabado_Click()),
    onDomingo_Click: () => dispatch(Domingo_Click()),
    onAccordion_Segunda_Click: () => dispatch(Accordion_Segunda_Click()),
    onAccordion_Terca_Click: () => dispatch(Accordion_Terca_Click()),
    onAccordion_Quarta_Click: () => dispatch(Accordion_Quarta_Click()),
    onAccordion_Quinta_Click: () => dispatch(Accordion_Quinta_Click()),
    onAccordion_Sexta_Click: () => dispatch(Accordion_Sexta_Click()),
    onAccordion_Sabado_Click: () => dispatch(Accordion_Sabado_Click()),
    onAccordion_Domingo_Click: () => dispatch(Accordion_Domingo_Click())
  }
}

class CompanyInfoFormFourthStep extends Component {
    
  render(){

    const { handleSubmit,
            previousStep,
            onSegunda_Click,
            onTerca_Click,
            onQuarta_Click,
            onQuinta_Click,
            onSexta_Click,
            onSabado_Click,
            onDomingo_Click,
            onAccordion_Segunda_Click,
            onAccordion_Terca_Click,
            onAccordion_Quarta_Click,
            onAccordion_Quinta_Click,
            onAccordion_Sexta_Click,
            onAccordion_Sabado_Click,
            onAccordion_Domingo_Click,
            is_Accordion_Segunda_Hidden,
            is_Accordion_Terca_Hidden,
            is_Accordion_Quarta_Hidden, 
            is_Accordion_Quinta_Hidden,
            is_Accordion_Sexta_Hidden,
            is_Accordion_Sabado_Hidden,
            is_Accordion_Domingo_Hidden,
            is_Panel_Segunda_Hidden,
            is_Panel_Terca_Hidden,
            is_Panel_Quarta_Hidden, 
            is_Panel_Quinta_Hidden,
            is_Panel_Sexta_Hidden,
            is_Panel_Sabado_Hidden,
            is_Panel_Domingo_Hidden} = this.props;

    return (
      <form className="form-div2" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Informação Empresarial</h2></div>
        {/* EMPRESA: 
          Horario regular de atendimento/funcionamento,  (time)  //consider API for UX
        */}
        <div className="input-div">
          <meter value="0.4"/>
          <div className="input-div-1">
            <div className="dias-da-semana-div">
              <label>Dias Laborais</label>
              <div className="selectable-images">
                <Field types="checkbox" name="segunda" valued="segunda" srcs={s_letter_icon} fieldclass="image-checkbox" component={renderImageCheckBox} onField_Click={onSegunda_Click}/>
                <Field types="checkbox" name="terca" valued="terca" srcs={t_letter_icon} fieldclass="image-checkbox" component={renderImageCheckBox} onField_Click={onTerca_Click}/>
                <Field types="checkbox" name="quarta" valued="quarta" srcs={q_letter_icon} fieldclass="image-checkbox" component={renderImageCheckBox} onField_Click={onQuarta_Click}/>
                <Field types="checkbox" name="quinta" valued="quinta" srcs={q_letter_icon} fieldclass="image-checkbox" component={renderImageCheckBox} onField_Click={onQuinta_Click}/>
                <Field types="checkbox" name="sexta" valued="sexta" srcs={s_letter_icon} fieldclass="image-checkbox" component={renderImageCheckBox} onField_Click={onSexta_Click}/>
                <Field types="checkbox" name="sabado" valued="sabado" srcs={s_letter_icon} fieldclass="image-checkbox" component={renderImageCheckBox} onField_Click={onSabado_Click}/>
                <Field types="checkbox" name="domingo" valued="domingo" srcs={d_letter_icon} fieldclass="image-checkbox" component={renderImageCheckBox} onField_Click={onDomingo_Click}/>
              </div>
            </div>
          </div>
          <div className="input-div-2">
            <div className="horario_funcionamento">
                {!is_Accordion_Segunda_Hidden && <Accordion title="Segunda-Feira" onAccordion_Click={onAccordion_Segunda_Click}>
                  {!is_Panel_Segunda_Hidden && <Dailyworkhours weekday="Segunda"/>}
                </Accordion>}
                {!is_Accordion_Terca_Hidden && <Accordion title="Terça-Feira" onAccordion_Click={onAccordion_Terca_Click}>
                  {!is_Panel_Terca_Hidden && <Dailyworkhours weekday="Terca"/>}
                </Accordion>}
                {!is_Accordion_Quarta_Hidden && <Accordion title="Quarta-Feira" onAccordion_Click={onAccordion_Quarta_Click}>
                  {!is_Panel_Quarta_Hidden && <Dailyworkhours weekday="Quarta"/>}
                </Accordion>}
                {!is_Accordion_Quinta_Hidden && <Accordion title="Quinta-Feira" onAccordion_Click={onAccordion_Quinta_Click}>
                  {!is_Panel_Quinta_Hidden && <Dailyworkhours weekday="Quinta"/>}
                </Accordion>}
                {!is_Accordion_Sexta_Hidden && <Accordion title="Sexta-Feira" onAccordion_Click={onAccordion_Sexta_Click}>
                  {!is_Panel_Sexta_Hidden && <Dailyworkhours weekday="Sexta"/>}
                </Accordion>}
                {!is_Accordion_Sabado_Hidden && <Accordion title="Sábado" onAccordion_Click={onAccordion_Sabado_Click}>
                  {!is_Panel_Sabado_Hidden && <Dailyworkhours weekday="Sabado"/>}
                </Accordion>}
                {!is_Accordion_Domingo_Hidden && <Accordion title="Domingo" onAccordion_Click={onAccordion_Domingo_Click}>
                  {!is_Panel_Domingo_Hidden && <Dailyworkhours weekday="Domingo"/>}
                </Accordion>}
            </div>
          </div>
        </div>
          <div className="buttons-form">
            <div className="previous-div">
              <button type="button" className="previous" onClick={previousStep}>Anterior</button>
            </div>
            <div className="next-div">  
          <button type="submit" className="next">Seguinte</button>
        </div>
          </div>
      </form>
    );
  }
}

const CompanyInfoFormFourthStep_variable = connect(mapStateToProps, mapDispatchToProps)(CompanyInfoFormFourthStep);

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    /* validate, */
  })(CompanyInfoFormFourthStep_variable);
  
