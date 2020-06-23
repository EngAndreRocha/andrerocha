import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {required, email} from '../validate';
import { renderField, renderContatos} from '../render';

const CompanyInfoFormSixthStep = props => {
    const { handleSubmit, previousStep } = props;
    return (
      <form className="form-div" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Informação Empresarial</h2></div>
        {/* EMPRESA: 
          telefone/telemovel, (tel)  //consider API for validation
          email, (email)  //consider API for validation
        */}
        <div className="input-div">
          <meter value="0.6"/>
          <div className="input-div-1">
            <FieldArray name="contatos" fieldclass="fieldarray" component={renderContatos} />
          </div>
          <div className="input-div-2">
            <Field name="email" type="email" fieldclass="" component={renderField} label={`Email:`} validate={[required, email]}/>
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
  })(CompanyInfoFormSixthStep);
  