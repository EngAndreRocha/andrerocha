import React from 'react';
import {Field, reduxForm } from 'redux-form';
import {renderEvento} from '../render';


const InputFormEventos = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
      <form className="form-div3" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Adicionar Evento</h2></div>
        <div className="input-div">
          <div className="input-div-1">
            <Field name="evento" fieldclass="field" component={renderEvento} />
          </div>
        </div>
        <div className="buttons-form">
          <div className="previous-div"><button type="button" disabled={pristine || submitting} onClick={reset}>Limpar</button></div>
          <div className="next-div"><button type="submit" disabled={pristine || submitting}>Submeter</button></div>
        </div>
      </form>
    );
  };



export default reduxForm({
    form: 'InputFormEventos', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize: true
    /* validate, */
  })(InputFormEventos);
  