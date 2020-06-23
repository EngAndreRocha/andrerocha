import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {validateImageWeight, validateImageWidth, validateImageHeight} from '../validate';
import {renderFileInput} from '../render';



const ImageInput = props => {
  const { handleSubmit, pristine, reset, submitting} = props
  return (
    <form  className="file-upload-div" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-title"></div>
        <div className="input-div">
            <div className="input-div-1">
              <Field label={props.label} name={props.nome} type="file" validate={[validateImageWeight(props.maxWeight), validateImageWidth(props.maxWidth), validateImageHeight(props.maxHeight)]} component={renderFileInput}/>
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
    form: 'ImageInput',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true
})(ImageInput)





