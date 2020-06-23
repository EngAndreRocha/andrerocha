import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, tooYoung} from '../validate';
import {renderField, renderImageRadioBox/* , renderGenderSelector */} from '../render';
import MenIcon from '../../../images/icons/149629-essential-compilation/svg/men.svg';
import WomenIcon from '../../../images/icons/149629-essential-compilation/svg/women.svg';

const RegisterFormFirstStep = props => {
  const { handleSubmit } = props;
  return (
    <form className="form-div" onSubmit={handleSubmit}>
      <div className="input-div">
        <meter value="0"/>
        <div className="input-div-1">
          <label>Género</label>
          <div className="selectable-images"> {/* Required */}
            <Field types="radio" name="genero" ids="homem" valued="homem" srcs={MenIcon} fieldclass="image-radiobox" component={renderImageRadioBox}/>
            <Field types="radio" name="genero" ids="mulher" valued="mulher" srcs={WomenIcon} fieldclass="image-radiobox" component={renderImageRadioBox}/>
          </div>
        </div>
        <div className="input-div-2">
          <Field name="dob" type="date" fieldclass="" component={renderField} label="Data de Nascimento" validate={[required, tooYoung]}/>
        </div>
      </div>
      <div className="buttons-form">
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
})(RegisterFormFirstStep);
