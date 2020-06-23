import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, minLength, alpha, alphapointhifen, maxLength} from '../validate';
import {renderField} from '../render';

const CompanyInfoFormFirstStep = props => {
  const { handleSubmit } = props;
  return (
    <form className="form-div" onSubmit={handleSubmit}>
      <div className="form-title"><h2>Informação Empresarial</h2></div>
      {/* EMPRESA: 
                  Nome, (texto),
                  Designação Oficial (texto)
        */}
      <div className="input-div">
      <meter value="0.1"/>
      <div className="input-div-1">
          <Field name="name_empresa" type="text" fieldclass="" component={renderField} label="Nome " validate={[required, minLength(3), alpha , maxLength(50) ]}/> {/* parse names and check max and min limits of number and size of words*/}
        </div>
        <div className="input-div-2">
          <Field name="oficialname_empresa" type="text" fieldclass="" component={renderField} label="Designação nas Finanças" validate={[required, minLength(3), alphapointhifen, maxLength(50)]}/>
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
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
  /* validate, */
})(CompanyInfoFormFirstStep);
