import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, minLength2, alpha, email} from '../validate';

import {renderField} from '../render';

const RegisterFormSecondStep = props => {
  const { handleSubmit, previousStep } = props;
  return (
    <form className="form-div" onSubmit={handleSubmit}>
      {/* InputNome, InputEmail */}
      <div className="input-div">
        <meter value="0.33"/>
        <div className="input-div-1">
          <Field name="name" type="text" fieldclass="" component={renderField} label="Nome" validate={[required, minLength2, alpha]}/>
        </div>
        <div className="input-div-2">
          <Field name="email" type="email" fieldclass="" component={renderField} label="Email" validate={[required, email]}/>
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
})(RegisterFormSecondStep);
