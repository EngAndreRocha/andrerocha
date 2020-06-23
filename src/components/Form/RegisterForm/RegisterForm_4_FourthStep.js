import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, passMatch, minLength} from '../validate';
import {renderField, renderCheckBox} from '../render';


const RegisterFormFourthStep = props => {
    const { handleSubmit, pristine, previousStep, submitting } = props;
    return (
      <form className="form-div" onSubmit={handleSubmit}>
        {/* InputPassword, InputRepPassword */}
        <div className="input-div">
          <meter value="1"/>
          <div className="input-div-1">
            <Field name="password" type="password" fieldclass="" component={renderField} label="Password" validate={[required,minLength(8)]}/>
          </div>
          <div className="input-div-2">  
            <Field name="reppassword" type="password" fieldclass="" component={renderField} label="Repetir Password" validate={[required, passMatch]}/>
          </div>
          <div className="input-div-3">
            <Field name="terms" id="terms" component={renderCheckBox} type="checkbox"  label="Aceito Termos e Condições" validate={required}/>
          </div>
        </div>
          <div className="buttons-form">
            <div className="previous-div">
              <button type="button" className="previous" onClick={previousStep}>Anterior</button>
            </div>
            <div className="next-div">  
              <button type="submit" disabled={pristine || submitting}>Submeter</button>
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
  })(RegisterFormFourthStep);
  