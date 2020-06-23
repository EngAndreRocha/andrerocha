import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, number, maxLength15, minLength2, exactLenght} from '../validate';

import {renderField} from '../render';

const CompanyInfoFormThirdStep = props => {
  
  const { handleSubmit, previousStep } = props;
  return (

    <form className="form-div" onSubmit={handleSubmit}>
      <div className="form-title"><h2>Informação Empresarial</h2></div>
      {/* EMPRESA: 
                  Capital Social,  (numero)
                  nContribuinte,  (numero)
        */}
      <div className="input-div">
        <meter value="0.3"/>
        <div className="input-div-1">
          <Field name="capsocial" type="number" fieldclass="" component={renderField} label="Capital Social" validate={[required, maxLength15, minLength2, number]}/>
        </div>
        <div className="input-div-2">
          <Field name="ncontribuinte" type="number" fieldclass="" component={renderField} label="Contribuinte"  validate={[required, number, exactLenght(9)]}/>
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
})(CompanyInfoFormThirdStep);
