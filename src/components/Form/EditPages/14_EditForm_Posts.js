import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from '../validate';
import {renderField,renderOrientationSelector} from '../render';


const EditFormPosts = props => {
  const { label, handleSubmit, pristine, reset, submitting } = props
  return (
    <form  className="form-div" onSubmit={handleSubmit}>
    <div className="form-title">{label}</div>
      <div className="input-div">
            <div className="input-div-1">
              <Field name="titulo" type="text" fieldclass="" component={renderField} label="Titulo " validate={[required]}/>
              {/* <Field name="tipo" type="text" fieldclass="" component={renderField} label="Tipo " validate={[required]}/> */}
              <Field name="orientation" /* type="text" */ fieldclass="" component={renderOrientationSelector} label="Orientacao " validate={[required]}/>
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
    form: 'EditFormPosts',//                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize: true
})(EditFormPosts)

