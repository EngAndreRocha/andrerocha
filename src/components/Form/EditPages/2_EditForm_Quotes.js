import React from 'react'
import { Field, reduxForm } from 'redux-form';
import {required} from '../validate';
import {renderField} from '../render';


import PropTypes from 'prop-types';


const EditFormNome = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form  className="form-div" onSubmit={handleSubmit}>
    <div className="form-title"><h2>Quotes</h2></div>
      <div className="input-div">
            <div className="input-div-1">
              {<Field name="nome" type="text" fieldclass="" component={renderField} label="Foto de Capa " validate={[required]}/>}
            </div>
      </div>
      <div className="buttons-form">
        <div className="previous-div"><button type="button" disabled={pristine || submitting} onClick={reset}>Limpar</button></div>
        <div className="next-div"><button type="submit" disabled={pristine || submitting}>Submeter</button></div>
      </div>
    </form>
  )
}

EditFormNome.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'EditForm_FotoApresentacao',//                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize: true
})(EditFormNome)


