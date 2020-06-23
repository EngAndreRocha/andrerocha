import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required,email,minLength,maxLength} from '../validate';
import {renderField} from '../render';


const SignInFormAdmin = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form  className="form-div" onSubmit={handleSubmit}>
        <div className="form-title"><h2>Login</h2></div>
        <div className="input-div">
            <div className="input-div-1">
                <Field name="email" type="email" component={renderField} label="Email " validate={[required,email,minLength(8),maxLength(50)]} autoComplete="username" />
            </div>
            <div className="input-div-2">
                <Field name="password" type="password" component={renderField} label="Password " validate={[required,minLength(4),maxLength(50)]} autoComplete="current-password"/>
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
    form: 'SignInFormAdmin',//                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    enableReinitialize: true
})(SignInFormAdmin)


