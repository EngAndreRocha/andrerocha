import React from 'react'
import { Field , reduxForm } from 'redux-form';
import {required} from '../validate';
import {rendercategorias_sugestoesSelector, renderTextArea} from '../render';



const EditFormSugestions = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form  className="form-div" onSubmit={handleSubmit}>
    <div className="form-title"><h2>Sugestão</h2></div>
      <div className="input-div">
            <div className="input-div-1">
                <Field name="categoria-sugestao" type="text" fieldclass="" component={rendercategorias_sugestoesSelector} label="Nome " validate={[required]}/>
            </div>
            <div className="input-div-2">
                <Field name="texto-sugestao" type="text" fieldclass="" component={renderTextArea} label="A sua sugestão... " validate={[required]}/>
            </div>
      </div>
      <div className="buttons-form">
        <div className="previous-div"><button type="button" disabled={pristine || submitting} onClick={reset}>Limpar Valores</button></div>
        <div className="next-div"><button type="submit" disabled={pristine || submitting}>Submeter</button></div>
      </div>
    </form>
  )
}


export default reduxForm({
    form: 'EditFormSugestions',
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true,
    enableReinitialize: true
})(EditFormSugestions)

