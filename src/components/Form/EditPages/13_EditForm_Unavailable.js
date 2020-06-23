import React from 'react'
import { /* Field, FieldArray , */ reduxForm } from 'redux-form';
/*import {required, email, number} from '../validate';
import {renderField} from '../render'; */

const EditFormUnavailable = props => {
  const { handleSubmit/* , pristine, reset, submitting  */} = props;
  return (
    <form  className="form-div" onSubmit={handleSubmit}>
    <div className="form-title"><h2>Oops!</h2></div>
      <div className="input-div">
            <div className="input-div-1">
                <h2 className="form-title">Lamentamos, funcionalidade indisponivel!<br></br>Por favor, entre em contato com o desenvolvedor do seu Website.<br></br>Edição Gratuita!</h2>
            </div>
      </div>
      {/* <div className="buttons-form">
        <div className="next-div"><button type="submit" disabled={pristine || submitting}>Submeter</button></div>
        <div className="previous-div"><button type="button" disabled={pristine || submitting} onClick={reset}>Limpar</button></div>
      </div> */}
    </form>
  )
}


export default reduxForm({
    form: 'EditFormUnavailable',
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true,
    enableReinitialize: true
})(EditFormUnavailable)

