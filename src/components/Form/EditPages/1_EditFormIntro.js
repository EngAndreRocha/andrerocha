import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, minLength, maxLength, alphaNumeric, minLength2} from '../validate';
import {renderField,renderTextArea/* , renderCompanyId */} from '../render';

/*import PropTypes from 'prop-types'; */

const EditFormIntro = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form  className="form-div" onSubmit={handleSubmit}>
    <div className="form-title"><h2>Introdução</h2></div>
      <div className="input-div">
            <div className="input-div-1">
              {<Field name="titulo" type="text" fieldclass="" component={renderField} label="Titulo " validate={[required, maxLength(30), minLength2, alphaNumeric]}/>}
            </div>
            <div className="input-div-2">
              {<Field name="descricao" type="text" fieldclass="" component={renderTextArea} label="Descrição " validate={[required, minLength(50),alphaNumeric, maxLength(1000)]}/>}
            </div>
      </div>
      <div className="buttons-form">
        <div className="previous-div"><button type="button" disabled={pristine || submitting} onClick={reset}>Limpar</button></div>
        <div className="next-div"><button type="submit" disabled={pristine || submitting}>Submeter</button></div>
      </div>
    </form>
  )
}


export default reduxForm({
    form: 'EditFormIntro',//                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize: true
})(EditFormIntro)
