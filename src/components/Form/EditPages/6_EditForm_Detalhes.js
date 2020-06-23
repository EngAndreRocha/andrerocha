import React from 'react'
import { Field, FieldArray , reduxForm } from 'redux-form';
import {required/* , address */, email, number} from '../validate';
import {renderField, renderMorada/* , renderContatos */, renderRedesSociais, renderImageCheckBox/* , renderFileInput */} from '../render';


import mbway_icon from '../../../images/mbway_icon.svg';
/*<div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
import cash from '../../../images/money_icon.svg';
import debitcard from '../../../images/multibanco_icon.svg';

const EditFormDetalhes = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form  className="form-div" onSubmit={handleSubmit} encType="multipart/form-data">
    <div className="form-title"><h2>Detalhes</h2></div> 
      <div className="input-div">
            <div className="input-div-1">
            <Field name="maplink" type="text" fieldclass="email_in" component={renderField} label={`MAP LINK`} placeholder="https://www.openstreetmap.org/export/embed.html?bbox=-8.413266241550447%2C41.64822818509019%2C-8.410272896289827%2C41.64943473295817&amp;layer=mapnik&amp;marker=41.64883146184879%2C-8.411769568920135" validate={[required]}/>
              <Field name="morada" fieldclass="morada_in" component={renderMorada} label="Morada" /* validate={[required, address]} *//>
              <Field name="email" type="email" fieldclass="email_in" component={renderField} label={`EMAIL`} placeholder="email@domain.com" validate={[required, email]}/>
              {/* <FieldArray name="contatos" fieldclass="fieldarray" component={renderContatos} /> */}
              <Field name="contato" fieldclass="email_in" component={renderField} type="number" maxlength="9" label={`CONTATO`} placeholder="9XXXXXXXX/25XXXXXXX" validate={[required, number]}/>
              <Field name={`capacidade_total`} type="number" maxlength="5" fieldclass="capacidade_in" component={renderField} label={`Capacidade Maxima de Pessoas`} placeholder="9999" validate={[required, number]} />
              <div className="in_pagamentos">
                <Field types="checkbox" name="mbway" ids="mbway" valued="mbway" srcs={mbway_icon} fieldclass="image-radiobox" component={renderImageCheckBox}/>
                <Field types="checkbox" name="money" ids="money" valued="money" srcs={cash} fieldclass="image-radiobox" component={renderImageCheckBox}/>
                <Field types="checkbox" name="debitcard" ids="debitcard" valued="debitcard" srcs={debitcard} fieldclass="image-radiobox" component={renderImageCheckBox}/>
              </div>
              <FieldArray name="redes" fieldclass="fieldarray" component={renderRedesSociais} />
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
    form: 'EditFormDetalhes',
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true,
    enableReinitialize: true
})(EditFormDetalhes)

