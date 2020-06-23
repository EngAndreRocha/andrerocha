import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, address} from '../validate';

import {renderField} from '../render';

const CompanyInfoFormSecondStep = props => {
  const { handleSubmit, previousStep } = props;
  return (
    <form className="form-div" onSubmit={handleSubmit}>
      <div className="form-title"><h2>Informação Empresarial</h2></div>
      {/* EMPRESA: 
                  Morada,  (texto)  //consider API for validation and UX
        */}
      <div className="input-div">
        <meter value="0.2"/>
        <div className="input-div-1">
          <Field name="morada" type="text" fieldclass="" component={renderField} label="Morada" validate={[required, address]}/>
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
})(CompanyInfoFormSecondStep);
