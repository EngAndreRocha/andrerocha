import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from '../validate';

import {renderCountrySelector, renderDistrictSelector} from '../render';

const RegisterFormThirdStep = props => {
  
  const { handleSubmit, previousStep } = props;
  return (

    <form className="form-div" onSubmit={handleSubmit}>
      {/* InputPais, InputDistrito */}
      <div className="input-div">
        <meter value="0.66"/>
        <div className="input-div-1">
          <label>País</label>
          <Field name="country" fieldclass="" component={renderCountrySelector} validate={[required]}/>
        </div>
        <div className="input-div-2">
          <label>Distrito</label>
          <Field name="distric" fieldclass="" component={renderDistrictSelector} validate={[required]}/>
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
})(RegisterFormThirdStep);
