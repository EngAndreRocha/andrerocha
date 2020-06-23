import React from 'react';
import { /* Field, */ FieldArray, reduxForm } from 'redux-form';
/* import {required} from '../validate'; */
import {/* renderField, */ renderEventos} from '../render';


const CompanyInfoFormFifthStep = props => {
    const { handleSubmit, previousStep } = props;
    return (
      <form className="form-div2" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Informação Empresarial</h2></div>
        {/* EMPRESA: 
          datas de eventos semanais/mensais/anuais/pontuais, (datetime-local) //consider API for UX
          data, tipo, local, descrição
        */}
        <div className="input-div">
          <meter value="0.5"/>
          <div className="input-div-1">
            <label>Eventos</label>
            <FieldArray name="eventos" fieldclass="fieldarray" component={renderEventos} />
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
  };



export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    /* validate, */
  })(CompanyInfoFormFifthStep);
  